<?php

    header("Access-Control-Allow-Origin: *");
    header('Content-Type: text/html; charset=utf-8');

    $db_name1 = "smapr";
    $db_name2 = "smausr";
    $user_name = "root";
    $user_pass = "";
    $server_name = "localhost";
    $con1 = mysqli_connect($server_name,$user_name,$user_pass,$db_name1);
    mysqli_set_charset($con1,'utf8');
    // $success = "Hello db1";
    $con2 = mysqli_connect($server_name,$user_name,$user_pass,$db_name2);
    mysqli_set_charset($con2,'utf8');
    // $success = "Hello db2";
    // echo $success;
?>