<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Here you can perform actions like sending an email, storing in a database, etc.
    // For example:
    // mail("your@email.com", $subject, $message, "From: $name <$email>");
    
    // Redirect the user to a thank you page or back to the contact page
    header("Location: thank_you.html");
    exit;
}
?>
