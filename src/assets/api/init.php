<?php

    header("Access-Control-Allow-Origin: *");
    header('Content-Type: text/html; charset=utf-8');

    $db_name1 = "u694003942_smapr";
    $db_name2 = "u694003942_smaus";
    $user_name1 = "u694003942_smapr";
    $user_name2 = "u694003942_smaus";
    $user_pass = "complexP@ssw0rd";
    $server_name = "localhost";
    $con1 = mysqli_connect($server_name,$user_name1,$user_pass,$db_name1);
    mysqli_set_charset($con1,'utf8');
    // $success = "Hello db1";
    $con2 = mysqli_connect($server_name,$user_name2,$user_pass,$db_name2);
    mysqli_set_charset($con2,'utf8');
    // $success = "Hello db2";
    // echo $success;
?>