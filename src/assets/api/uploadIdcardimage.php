<?php
$imageFront = $_POST["imageFront"];
$imageBack = $_POST["imageBack"];
$sellerid =$_POST["sellerid"];
$mob = 0;    
if($imageFront != 1){
    if (!file_exists('../images/seller/'.$sellerid.'/')) {
        mkdir('../images/seller/'.$sellerid.'/', 0777, true);
        $dir='../images/seller/'.$sellerid.'/';
    }
    define('UPLOAD_DIR', '../images/seller/'.$sellerid.'/');
    $file = UPLOAD_DIR.$sellerid.'idfront'.'.jpg';
    $img =explode(",", $imageFront);
    $img[1] = str_replace(' ', '+', $img[1]);
    $data = base64_decode($img[1]);
    $success = file_put_contents($file, $data);
}
if($imageBack != 1){
    if (!file_exists('../images/seller/'.$sellerid.'/')) {
        mkdir('../images/seller/'.$sellerid.'/', 0777, true);
        $dir='../images/seller/'.$sellerid.'/';
    }
    define('UPLOAD_DIR', '../images/seller/'.$sellerid.'/');
    $file = UPLOAD_DIR.$sellerid.'idback'.'.jpg';
    $img =explode(",", $imageBack);
    $img[1] = str_replace(' ', '+', $img[1]);
    $data = base64_decode($img[1]);
    $success = file_put_contents($file, $data);
}
?>