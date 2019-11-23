<?php
$image = $_POST["image"];
$userId =$_POST["userId"];
$mob = 0;    
if($image != 1){
    if (!file_exists('../images/user/review/'.$userId.'/')) {
        mkdir('../images/user/review/'.$userId.'/', 0777, true);
        $dir='../images/user/review/'.$userId.'/';
    }
    define('UPLOAD_DIR', '../images/user/review/'.$userId.'/');
    $file = UPLOAD_DIR.$userId.'image2'.'.jpg';
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