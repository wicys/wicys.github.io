<?php $name = $_POST['Contact-Name'];
$email = $_POST['Contact-Email'];
$message = $_POST['Contact-Message'];
$formcontent="From: $Contact-Name \n Message: $Contact-Message";
$recipient = "talaaoun@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $Contact-Email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
