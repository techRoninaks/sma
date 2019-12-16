<?php
require "init.php";
$bulkId = $_POST['bulkId'];
$sql_query = "SELECT prodid FROM `bulk_discount` WHERE id = $bulkId ";
$result = mysqli_query($con1, $sql_query);
$row=mysqli_fetch_assoc($result);
$prodid = $row['prodid'];
$count =0;
$data = "";
// echo $sql_query;
$sql_query = "SELECT * FROM `bulk_discount` WHERE prodid  = $prodid ";
$result = mysqli_query($con1, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
    $data = $data.$row['quant'].',';
}
$data = rtrim($data, ',');
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>