<?php
require "init.php";
$prodId = $_POST['prodId'];
$data = array();
$sql_query = "SELECT `name`,`value`,`price` FROM smapr1.variant_info, smausr1.cart WHERE FIND_IN_SET( smapr1.variant_info.variantid, smausr1.cart.variants_chosen )";
$result = mysqli_query($con1, $sql_query);
$count= 0;
while($row=mysqli_fetch_assoc($result))
{
    $data[$count++] = array('name'=>$row["name"],'value'=>$row["value"],'price'=>$row["price"]);
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>