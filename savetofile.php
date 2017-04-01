<?php
$path = __DIR__ . '/messages';
if (!is_dir($path)) {
    mkdir($path, '0777'); // r w e (read write execute)
    // fisiere 0644
    // foldere 0755
}

$name = (isset($_POST['nume']) ? $_POST['nume'] : "");
$email = (isset($_POST['email']) ? $_POST['email'] : "");
$phone = (isset($_POST['telefon']) ? $_POST['telefon'] : "");
$message = (isset($_POST['mesaj']) ? $_POST['mesaj'] : "");

$fileName = preg_replace('/\s+/', '', strtolower($name));
$file = fopen($path . '/message-' . $fileName . '.txt', 'a');

$fileMessage = "Nume: " . $name . "\r\n";
$fileMessage .= "Data: " . date('Y-m-d', time()) . "\r\n";
$fileMessage .= "Ora: " . date('H:i:s', time()) . "\r\n";
$fileMessage .= "Email: " . $email . "\r\n";
$fileMessage .= "Telefon: " . $phone . "\r\n";
$fileMessage .= "Mesaj: " . $message . "\r\n";
$fileMessage .= "-------------------------------\r\n";

fwrite($file, $fileMessage);
fclose($file);

header("Location: /contact.html");
die();