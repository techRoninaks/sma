<?php
session_start();
include("init.php");

$error = "";
$uname =array();
    if(empty($_POST["login_email"]) || empty($_POST["login_password"]))
    {
        $error = "Both fields are required.";
        echo json_encode ($error);
    }
    else
    {
            $username=$_POST['login_email'];
            $password=$_POST['login_password'];

            // To protect from MySQL injection
            $username = stripslashes($username);
            $password = stripslashes($password);
            $username = mysqli_real_escape_string($con2, $username);
            $password = mysqli_real_escape_string($con2, $password);
        //     $password = md5($password);

            $sql="SELECT Name ,id FROM user WHERE email = '$username' and password = '$password' ";
            $result=mysqli_query($con2,$sql);
            $row=mysqli_fetch_array($result);
            $user_id = $row['id'];

            $sql_query = "SELECT city, pincode FROM `address` WHERE mapping_id ='$user_id'";
            $result2 = mysqli_query($con2, $sql_query);
            $row2=mysqli_fetch_assoc($result2);

            if(!$row){
                $sql1="SELECT id,seller_name,stage_number FROM seller WHERE email = '$username' and password = '$password' ";
                $result1=mysqli_query($con2,$sql1);
                $row1=mysqli_fetch_array($result1);
                $seller_id = $row1['id'];
                $stage_number = $row1['stage_number'];

                $sql_query1 = "SELECT city, pincode FROM `address` WHERE mapping_id ='$seller_id'";
                $result3 = mysqli_query($con2, $sql_query1);
                $row3=mysqli_fetch_assoc($result3);
            }
            
            if($row)
            {
                    $error = "Success1";
                    $uname = array('username'=>$row['Name'],'status'=>$error,'userid'=>$row['id'],'city'=>$row2['city'],'pincode'=>$row2['pincode']);
                    echo json_encode($uname);
            }
            else if($row1)
            {
                    $error = "Success2";
                    $uname = array('status'=>$error,'sellerId'=>$row1['id'],'seller_name'=>$row1['seller_name'],'city'=>$row3['city'],'pincode'=>$row3['pincode'],'stage'=>$stage_number);
                    echo json_encode($uname);
            }
            else
            {
                    $error = "Error";
                    echo json_encode($error);
            }

    }
// }
?>