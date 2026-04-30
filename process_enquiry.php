<?php
// ===========================
// MULTYTILECENTER – Enquiry Handler
// ===========================

session_start();
header('Content-Type: application/json');

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'tilevista_db');

function getConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die(json_encode(['success' => false, 'message' => 'Database connection failed.']));
    }
    $conn->set_charset("utf8mb4");
    return $conn;
}

function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// ===== PROCESS ENQUIRY =====
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'])) {
    $name    = sanitize($_POST['name'] ?? '');
    $email   = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone   = sanitize($_POST['phone'] ?? '');
    $type    = sanitize($_POST['type'] ?? 'general');
    $message = sanitize($_POST['message'] ?? '');
    $cats    = isset($_POST['cats']) && is_array($_POST['cats'])
               ? implode(', ', array_map('sanitize', $_POST['cats']))
               : '';

    // Validation
    $errors = [];
    if (empty($name)) $errors[] = 'Name is required.';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required.';
    if (empty($phone)) $errors[] = 'Phone number is required.';
    if (empty($message)) $errors[] = 'Message is required.';

    if (!empty($errors)) {
        echo json_encode(['success' => false, 'errors' => $errors]);
        exit;
    }

    $conn = getConnection();

    // Prepare & bind
    $stmt = $conn->prepare("
        INSERT INTO enquiries (name, email, phone, enquiry_type, categories, message, created_at)
        VALUES (?, ?, ?, ?, ?, ?, NOW())
    ");
    $stmt->bind_param("ssssss", $name, $email, $phone, $type, $cats, $message);

    if ($stmt->execute()) {
        // Send notification email (in production, configure SMTP)
        $to      = "multytilecenter.mtc@gmail.com";
        $subject = "New Enquiry from $name – MultyTilecenter";
        $body    = "New enquiry received:\n\nName: $name\nEmail: $email\nPhone: $phone\nType: $type\nCategories: $cats\n\nMessage:\n$message";
        $headers = "From: multytilecenter.mtc@gmail.com\r\nReply-To: $email";
        @mail($to, $subject, $body, $headers);

        echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to save enquiry. Please try again.']);
    }

    $stmt->close();
    $conn->close();
    exit;
}

echo json_encode(['success' => false, 'message' => 'Invalid request.']);
?>
