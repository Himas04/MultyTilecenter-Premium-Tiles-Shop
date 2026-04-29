<?php
// ===========================
// MULTYTILECENTER – Login Handler
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
    $email    = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'] ?? '';
    $remember = isset($_POST['remember']);

    if (empty($email) || empty($password)) {
        $_SESSION['login_error'] = 'Email and password are required.';
        header('Location: login.html');
        exit;
    }

    $conn = getConnection();
    $stmt = $conn->prepare("SELECT id, firstname, lastname, email, password_hash, role FROM users WHERE email = ? LIMIT 1");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user   = $result->fetch_assoc();
    $stmt->close();
    $conn->close();

    if ($user && password_verify($password, $user['password_hash'])) {
        $_SESSION['user_id']   = $user['id'];
        $_SESSION['user_name'] = $user['firstname'] . ' ' . $user['lastname'];
        $_SESSION['user_role'] = $user['role'];

        if ($remember) {
            // Set remember-me cookie for 30 days
            $token = bin2hex(random_bytes(32));
            setcookie('remember_token', $token, time() + (30 * 24 * 60 * 60), '/', '', true, true);
            // In production: store $token hash in DB against user
        }

        // Redirect based on role
        if ($user['role'] === 'admin') {
            header('Location: admin/dashboard.php');
        } else {
            header('Location: index.html');
        }
    } else {
        $_SESSION['login_error'] = 'Invalid email or password.';
        header('Location: login.html');
    }
    exit;
}

header('Location: login.html');
exit;
?>
