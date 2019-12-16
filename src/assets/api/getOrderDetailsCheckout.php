<?php
require "init.php";
$success = "unsucessfull";
// header("Access-Control-Allow-Origin: *"); 
// $customerid = $_POST["customerid"];
$userId = $_POST["userId"];
$data = array();
$sql_query = "SELECT `orderid` FROM `purchase_order` WHERE `customerid` = '$userId' ORDER BY `orderid` DESC LIMIT 1";
// echo $sql_query;
$result = mysqli_query($con2 , $sql_query);
while($row=mysqli_fetch_assoc($result)){
    $data=array('orderid'=>$row["orderid"]);
}
$result = array("success"=>$success,"result"=>$data);
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);

?>