<?php
require "init.php";
$success = "unsucessfull";
// header("Access-Control-Allow-Origin: *"); 
// $customerid = $_POST["customerid"];
$orderid = $_POST["orderid"];
$data = array();
$sql_query = "SELECT `orderid` FROM `purchase_order` WHERE `customerid` = $orderid ORDER BY `customerid` DESC LIMIT 1";
$result = mysqli_query($con2 , $sql_query);
while($row=mysqli_fetch_assoc($result)){
    $data=array('orderid'=>$row["orderid"]);
}
$result = array("success"=>$success,"result"=>$data);
echo json_encode($data);

?>