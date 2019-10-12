<?php
    // require "init.php";

    $image = $_POST["image"];
    if($image != 1){
        define('UPLOAD_DIR', '../assets/images/order/');
        $file = UPLOAD_DIR.$uniqeCode.'.png';
        if($mob == 0){
            $img =explode(",", $image);
            echo $img;
            $img[1] = str_replace(' ', '+', $img[1]);
            echo $img;
            $data = base64_decode($img[1]);
            echo $data;

        }else{
            $data = base64_decode($image);
        }
        $success = file_put_contents($file, $data);
    }










    // $image = $_POST["image"];
    // if($image != 1){
    //     define('UPLOAD_DIR', '../img/profile/userimage/');
    //     $file = UPLOAD_DIR.$uniqeCode.'.png';
    //     if($mob == 0){
    //         $img =explode(",", $image);
    //         echo $img;
    //         $img[1] = str_replace(' ', '+', $img[1]);
    //         echo $img;
    //         $data = base64_decode($img[1]);
    //         echo $data;

    //     }else{
    //         $data = base64_decode($image);
    //     }
    //     $success = file_put_contents($file, $data);
    //     print $success ? $file : 'Unable to save the file.'; 
    //     }

?>
