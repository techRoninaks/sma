<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $image = $_POST["image"];
    $mob=0;
    $data = array();

    if($image != 1){
        // $dir='../assets/images/shop/'.$shopId.'/';
        // mkdir($dir);
        if (!file_exists('../images/shop/'.$shopId.'/')) {
            mkdir('../images/shop/'.$shopId.'/', 0777, true);
            $dir='../images/shop/'.$shopId.'/';
        }
        // if (!file_exists('../'.$shopId.'/')) {
        //     mkdir('../'.$shopId.'/', 0777, true);
        //     $dir='../assets/images/shop/'.$shopId.'/';
        // }
        define('UPLOAD_DIR', '../images/shop/'.$shopId.'/');
        //  echo $image;
        $file = UPLOAD_DIR.$shopId.'_logo.jpg';
        if($mob == 0){
            $img =explode(",", $image);
            // echo $img;
            $img[1] = str_replace(' ', '+', $img[1]);
            $imgVal=$img[1];
            // echo $img[1];
            $data = base64_decode($img[1]);
            // echo $data;

        }else{
            $data = base64_decode($image);
        }
        $success = file_put_contents($file, $data);
        // echo "<br>";        
        // echo "<br>";
        // echo $success;
        // echo "<br>";
        // echo $dir.$file;
    }
    echo json_encode(array('imgSrcLogo'=>$imgVal));

?>