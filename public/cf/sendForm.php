<?php
header('Access-Control-Allow-Origin: http://elacrain.com/', false);
header('Access-Control-Allow-Origin: http://www.elacrain.com', false);

$company = $_REQUEST["c"] = "undefined" ? "" : $_REQUEST["c"];
$to      = 'me@elacrain.com';
$subject = "New Message from " . $_REQUEST["s"];
$message = $_REQUEST["m"] . "\r\nFrom: " . $_REQUEST["s"] . "\r\n--\r\nThis e-mail was sent from a contact form on My Blog (http://www.elacrain.com)";
$headers = 'From:' . $_REQUEST["f"] . "\r\n" .
    'Reply-To:' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

echo $company . "\r\n";
echo $to . "\r\n";
echo $subject . "\r\n";
echo $message . "\r\n";
echo $headers . "\r\n";

function sendMail($to, $subject, $message, $headers, $honeypot) {
    if ($honeypot) { echo "hi hon"; return; };
    if (!$subject) { echo "hi sub"; return; };
    if (!$message) { echo "hi mes"; return; };
    if (!$headers) { echo "hi hea"; return; };
    mail($to, $subject, $message, $headers);
}

sendMail($to, $subject, $message, $headers, $company)

?>