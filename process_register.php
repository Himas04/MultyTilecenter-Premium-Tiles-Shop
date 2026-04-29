<?php
// ===========================
// MULTYTILECENTER – Register Handler
// ===========================

session_start();

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'tilevista_db');

function getConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die("Database connection failed.");
    }
    $conn->set_charset("utf8mb4");
    return $conn;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = htmlspecialchars(trim($_POST['firstname'] ?? ''));
    $lastname  = htmlspecialchars(trim($_POST['lastname'] ?? ''));
    $email     = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone     = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $password  = $_POST['password'] ?? '';

    $errors = [];
    if (empty($firstname)) $errors[] = 'First name is required.';
    if (empty($lastname))  $errors[] = 'Last name is required.';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required.';
    if (strlen($password) < 8) $errors[] = 'Password must be at least 8 characters.';

    if (!empty($errors)) {
        $_SESSION['register_error'] = implode(' ', $errors);
        header('Location: login.html');
        exit;
    }

    $conn = getConnection();

    // Check if email exists
    $check = $conn->prepare("SELECT id FROM users WHERE email = ? LIMIT 1");
    $check->bind_param("s", $email);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        $_SESSION['register_error'] = 'An account with this email already exists.';
        $check->close(); $conn->close();
        header('Location: login.html');
        exit;
    }
    $check->close();

    // Hash password
    $hash = password_hash($password, PASSWORD_BCRYPT);

    // Insert user
    $stmt = $conn->prepare("
        INSERT INTO users (firstname, lastname, email, phone, password_hash, role, created_at)
        VALUES (?, ?, ?, ?, ?, 'customer', NOW())
    ");
    $stmt->bind_param("sssss", $firstname, $lastname, $email, $phone, $hash);

    if ($stmt->execute()) {
        $user_id = $conn->insert_id;
        $_SESSION['user_id']   = $user_id;
        $_SESSION['user_name'] = $firstname . ' ' . $lastname;
        $_SESSION['user_role'] = 'customer';

        $stmt->close(); $conn->close();
        header('Location: index.html');
    } else {
        $_SESSION['register_error'] = 'Registration failed. Please try again.';
        $stmt->close(); $conn->close();
        header('Location: login.html');
    }
    exit;
}

header('Location: login.html');
exit;
?>
