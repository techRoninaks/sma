<?php
require "init.php";
$data = array();
$id = $_POST["id"];

$sql_query = "SELECT order_status from purchase_order WHERE customerid= $id and order_status='pending_payment'";

$result = mysqli_query($con2, $sql_query);
while(mysqli_fetch_assoc($result))
{
    $rowcount=mysqli_num_rows($result);
    $data = array('status'=>$result,'pcount'=>$rowcount);
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>