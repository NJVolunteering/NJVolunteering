<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Send an email with the collected information
    $to = "llamapatel123@gmail.com";
    $subject = "New message from $name: $subject";
    $email_message = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $name <$email>";
    
    mail($to, $subject, $email_message, $headers);
    
    // Redirect the user to the thank you page
    header("Location: thank_you.html");
    exit;
}
?>