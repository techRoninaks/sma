<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$data = array();
$catgegoryid;
$sql_query = "SELECT * FROM seller WHERE id='$seller_id'";
$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
    $data = array('name'=>$row["seller_name"],'dob'=>$row["dob"],'idcard_type'=>$row["idcard_type"],'idcardno'=>$row["idcardno"],'idimage'=>$row["idimage"],'email'=>$row["email"],'contact'=>$row["phone1"],'gst'=>$row["gst"],'addr_id'=>$row["addr_id"]);
}



$sql_query = "SELECT * FROM `shop_details` WHERE seller_id='$seller_id'";
$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
    $catgegoryid = $row["category_id"];
    $data = $data + array('shopname'=>$row["shopname"],'primary_image'=>$row["primary_image"],'prod_image_1'=>$row["prod_image_1"],'prod_image_2'=>$row["prod_image_2"],'prod_image_3'=>$row["prod_image_3"],'shop_address_id'=>$row["addr_id"]);
}

$sql_query = "SELECT * FROM `category` WHERE `category_id` = '$catgegoryid'";
// echo $sql_query;
$result = mysqli_query($con1, $sql_query);
$row=mysqli_fetch_assoc($result);
$data = $data + array('category'=>$row["category"]);

$shopaddress = $data['shop_address_id'];
$sql_query = "SELECT * FROM `address`  WHERE id='$shopaddress'";
$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
    $data = $data + array('shop_address'=>$row["addr1"].', '.$row["addr2"].', '.$row["city"].', '.$row["district"].', '.$row["state"].', '.$row["country"].', '.$row["pincode"]);
}
$result = mysqli_query($con2, $sql_query);
echo json_encode($data);
?>