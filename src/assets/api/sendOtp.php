<?php

$message = $_POST["message"];
$number = $_POST["mobileNo"];
$OTP = $_POST["otp"];
$curl = curl_init();

curl_setopt_array($curl, array(

CURLOPT_URL => "http://control.msg91.com/api/sendotp.php?otp_length=6&authkey=291584A2Gf8zuhC5r45d6687df&message=$message&sender=ScoopMyArt&mobile=$number&otp=$OTP",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => "",
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 30,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => "POST",
CURLOPT_POSTFIELDS => "",
CURLOPT_SSL_VERIFYHOST => 0,
CURLOPT_SSL_VERIFYPEER => 0,
));

$response = curl_exec($curl);

$err = curl_error($curl);

curl_close($curl);

if ($err) 
{
    echo json_encode("0");
} 
else 
{
    echo json_encode($response);
}

?>