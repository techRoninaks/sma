<?php
$image = $_POST["image"];
$orderId =$_POST["orderId"];
$mob = 0;    
if($image != 1){
    if (!file_exists('../images/order/'.$orderId.'/')) {
        mkdir('../images/order/'.$orderId.'/', 0777, true);
        $dir='../images/order/'.$orderId.'/';
    }
    define('UPLOAD_DIR', '../images/order/'.$orderId.'/');
    $file = UPLOAD_DIR.$orderId.'stage5'.'.jpg';
    if($mob == 0){
        $img =explode(",", $image);
        $img[1] = str_replace(' ', '+', $img[1]);
        $data = base64_decode($img[1]);
    }else{
        $data = base64_decode($image);
    }
    $success = file_put_contents($file, $data);
}
?>