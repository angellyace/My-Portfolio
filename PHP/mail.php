<?php

if($_POST["submit"]) {
    $recipient="pallera.danjan@gmail.com";
    $subject="Form to email message";
    $sender="cyreneangel@gmail.com";
    $senderEmail="cyreneangel@gmail.com";
    $message="hello";

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?>