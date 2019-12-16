<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$data = array();
$count =0;
$sql_query = "SELECT * FROM seller WHERE id='$seller_id'";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);

$sql_query1 = "SELECT DISTINCT `state` FROM `location` ";
$result1 = mysqli_query($con2, $sql_query1);

while($row1=mysqli_fetch_array($result1))
{
        $data[$count] = array('owner_name'=>$row["seller_name"],'email'=>$row["email"],'contact'=>$row["phone1"],'state'=>$row1['state']);
        $count++;
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>