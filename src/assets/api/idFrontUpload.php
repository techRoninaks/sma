<?php
$image = $_POST["image"];
$seller_id =$_POST["sellerId"];
$mob = 0;    
if($image != 1){
    if (!file_exists('../images/seller/id/'.$seller_id.'/')) {
        mkdir('../images/seller/id/'.$seller_id.'/', 0777, true);
        $dir='../images/seller/id/'.$seller_id.'/';
    }
    define('UPLOAD_DIR', '../images/seller/id/'.$seller_id.'/');
    $file = UPLOAD_DIR.$seller_id.'front'.'.jpg';
    if($mob == 0){
        $img =explode(",", $image);
        $img[1] = str_replace(' ', '+', $img[1]);
        $data = base64_decode($img[1]);
    }else{
        $data = base64_decode($image);
    }
    $success = file_put_contents($file, $data);
}
mysqli_close($con1);
mysqli_close($con2);
?>