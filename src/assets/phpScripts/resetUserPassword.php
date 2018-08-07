<?php

$postdata = file_get_contents("php://input");
$dataDecode = json_decode($postdata);
$email= $dataDecode->email;

// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}


$to = 'daniel.steenberg@webdevsolutions.co.za';
$subject = 'Reset Password';
$from = 'daniel.steenberg@webdevsolutions.co.za';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Compose a simple HTML email message
$message = '<html><body style="font-family: open-sans; width: 800px; margin: auto; padding: 15px;">';
$message .= '<img style="width: 120px; margin-left: 235px;" src="https://webdevsolutions.co.za/zillion/assets/common/logo.png" />';
$message .= '<div style="width: 70%; height: auto; padding: 15px; color: #fff; text-align: center; box-shadow: 0px 0px 5px 2px #fdd866; border-radius: 5px; background-color: #434341;';
$message .= '<h1>New Registration</h1>';
$message .= '<p style="font-size:18px;">
<b>Email:</b> '.$email.'<br>';
$message .= '</div>';
$message .= '</body></html>';
// send email
mail($to, $subject, $message, $headers);
