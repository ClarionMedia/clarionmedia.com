<?php

  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $service = $_REQUEST['service'];
  $message = $_REQUEST['message'];

  mail("ttreat@clarionmedia.com, cstrawn@clarionmedia.com", "Clarion Media Contact Form Message",
      "From: $name\n" .
      "Email: $email\n" .
      "Phone: $phone\n" .
      "Service: $service\n\n" .
      "$message", "From: $name <$email>");

  header("Location: index.html");

?>