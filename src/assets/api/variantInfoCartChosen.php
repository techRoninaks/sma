<?php
require "init.php";
$DB_SMA_PR = DB_SMA_PR;
$DB_SMA_USER = DB_SMA_USER;
$prodId = $_POST['prodId'];
$data = array();
$sql_query = "SELECT `name`,`value`,`price` FROM $DB_SMA_PR.variant_info, $DB_SMA_USER.cart WHERE FIND_IN_SET( $DB_SMA_PR.variant_info.variantid,  $DB_SMA_USER.cart.variants_chosen )";
$result = mysqli_query($con1, $sql_query);
$count= 0;
// echo $sql_query;
while($row=mysqli_fetch_assoc($result))
{
    $data[$count++] = array('name'=>$row["name"],'value'=>$row["value"],'price'=>$row["price"]);
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>