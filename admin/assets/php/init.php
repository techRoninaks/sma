
<?php

// header("Access-Control-Allow-Origin: *");    
$db_name = "roninaks_smapr";
$username = "roninaks";
$password = "complexP@ssw0rd";
$servername = "localhost";

$con1 = new mysqli($servername, $username, $password, $db_name);
// Check connection		


// header("Access-Control-Allow-Origin: *");    
$db_name = "roninaks_smausr";
$username = "roninaks";
$password = "complexP@ssw0rd";
$servername = "localhost";

$con2 = new mysqli($servername, $username, $password, $db_name);
// Check connection		
?>

