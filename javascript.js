document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const formData = new FormData(this);

  fetch("send.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    alert("Message Sent Successfully");
  });
});

/*
<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$token = "YOUR_ACCESS_TOKEN";
$phone_id = "YOUR_PHONE_NUMBER_ID";
$to = "91XXXXXXXXXX"; // tumhara WhatsApp number

$data = [
  "messaging_product" => "whatsapp",
  "to" => $to,
  "type" => "text",
  "text" => [
    "body" => "📩 New Contact Form\n\nName: $name\nEmail: $email\nMessage: $message"
  ]
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://graph.facebook.com/v18.0/$phone_id/messages");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Authorization: Bearer $token",
  "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo json_encode(["success" => true]);*/


