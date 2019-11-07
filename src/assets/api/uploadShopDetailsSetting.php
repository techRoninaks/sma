<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gst = $_POST['gst'];
$address = $_POST['address'];
$imageMain = $_POST['imageMain'];
$imageProductOne = $_POST['imageProductOne'];
$imageProductTwo = $_POST['imageProductTwo'];
$imageProductThree = $_POST['imageProductThree'];
$caetegory = $_POST['category'];
$data = array();

$sql_query = "SELECT * FROM `category` where `category` like '$caetegory'";
$result = mysqli_query($con1, $sql_query);
$row=mysqli_fetch_assoc($result);
$categoryName = $row['category_id'];


$sql_query = "UPDATE `seller` SET `email`='$email',`gst`=$gst,`phone1`=$phone where `id` = '$seller_id'";
$result = mysqli_query($con2, $sql_query);
$sql_query = "UPDATE `shop_details` SET `shopname`='$name',`category_id`=$categoryName WHERE `seller_id` = '$seller_id'";
$result = mysqli_query($con2, $sql_query);

$sql_query = "SELECT * FROM seller WHERE id='$seller_id'";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$addressId =$row["addr_id"];
$add = explode(",",$address);
$add1 = $add[0];
$add2 = $add[1];
$add3 = $add[2];
$add4 = $add[3];
$add5 = $add[4];
$add6 = $add[5];
$add7 = $add[6];

$sql_query = "UPDATE `address` SET `addr1`= '$add1',`addr2`='$add2',`city`='$add3',`district`='$add4',`state`='$add5',`country`='$add6',`pincode`='$add7',`contact_email`='$email',`contact_number`='$phone' WHERE `id` = '$addressId'";
// echo $sql_query;
$result = mysqli_query($con2, $sql_query);

$sql_query = "SELECT * FROM `shop_details` WHERE `seller_id`='$seller_id'";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$shopId =$row["id"];

if($imageMain != 1){
    if (!file_exists('../images/shop/'.$shopId.'/')) {
        mkdir('../images/shop/'.$shopId.'/', 0777, true);
        $dir='../images/shop/'.$shopId.'/';
    }
    else{}

    define('UPLOAD_DIR', '../images/shop/'.$shopId.'/');
    $file = UPLOAD_DIR.$shopId.'_square.jpg';
        $img =explode(",", $imageMain);
        $img[1] = str_replace(' ', '+', $img[1]);
        $imgVal=$img[1];
        $data = base64_decode($img[1]);
    $success = file_put_contents($file, $data);
}
if($imageProductOne != 1){
    if (!file_exists('../images/shop/'.$shopId.'/')) {
        mkdir('../images/shop/'.$shopId.'/', 0777, true);
        $dir='../images/shop/'.$shopId.'/';
    }
    else{}

    define('UPLOAD_DIR3', '../images/shop/'.$shopId.'/');
    $file = UPLOAD_DIR3.$shopId.'_product_one.jpg';
        $img =explode(",", $imageProductOne);
        $img[1] = str_replace(' ', '+', $img[1]);
        $imgVal=$img[1];
        $data = base64_decode($img[1]);
    $success = file_put_contents($file, $data);
}
if($imageProductTwo != 1){
    if (!file_exists('../images/shop/'.$shopId.'/')) {
        mkdir('../images/shop/'.$shopId.'/', 0777, true);
        $dir='../images/shop/'.$shopId.'/';
    }
    else{}

    define('UPLOAD_DIR1', '../images/shop/'.$shopId.'/');
    $file = UPLOAD_DIR1.$shopId.'_product_two.jpg';
        $img =explode(",", $imageProductTwo);
        $img[1] = str_replace(' ', '+', $img[1]);
        $imgVal=$img[1];
        $data = base64_decode($img[1]);
    $success = file_put_contents($file, $data);
}
if($imageProductThree != 1){
    if (!file_exists('../images/shop/'.$shopId.'/')) {
        mkdir('../images/shop/'.$shopId.'/', 0777, true);
        $dir='../images/shop/'.$shopId.'/';
    }
    else{}

    define('UPLOAD_DIR2', '../images/shop/'.$shopId.'/');
    $file = UPLOAD_DIR2.$shopId.'_product_three.jpg';
        $img =explode(",", $imageProductThree);
        $img[1] = str_replace(' ', '+', $img[1]);
        $imgVal=$img[1];
        $data = base64_decode($img[1]);
    $success = file_put_contents($file, $data);
}

$url = "assets/images/shop/$shopId/$shopId"."_square.jpg";
$url1 = "assets/images/shop/$shopId/$shopId"."_product_one.jpg";
$url2 = "assets/images/shop/$shopId/$shopId"."_product_two.jpg";
$url3 = "assets/images/shop/$shopId/$shopId"."_product_three.jpg";

$sql_query = "UPDATE `shop_details` SET `primary_image`='$url',`prod_image_1`='$url1',`prod_image_2`='$url2',`prod_image_3`='$url3' WHERE `seller_id`='$seller_id'";
$result = mysqli_query($con2, $sql_query);
// echo $sql_query;

if($result){
    echo "1";
}
else{
    echo '0';
}
?>