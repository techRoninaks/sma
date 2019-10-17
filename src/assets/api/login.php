<?php
session_start();
include("init.php");    //Establishing connection with our database

$error = "";            //Variable for storing our errors.
$uname =array();
// if(isset($_POST["submit"]))
// {
    if(empty($_POST["login_email"]) || empty($_POST["login_password"]))
    {
        $error = "Both fields are required.";
        echo json_encode ($error);
    }
    else
    {
            // Define $username and $password
            $username=$_POST['login_email'];
            $password=$_POST['login_password'];

            // To protect from MySQL injection
            $username = stripslashes($username);
            $password = stripslashes($password);
            $username = mysqli_real_escape_string($con2, $username);
            $password = mysqli_real_escape_string($con2, $password);
        //     $password = md5($password);

            //Check username and password from database
            $sql="SELECT username ,id FROM user WHERE email = '$username' and password = '$password' ";
            $result=mysqli_query($con2,$sql);
            $row=mysqli_fetch_array($result);

            $sql1="SELECT id,seller_name FROM seller WHERE email = '$username' and password = '$password' ";
            $result1=mysqli_query($con2,$sql1);
            $row1=mysqli_fetch_array($result1);
            $seller_id = $row1['id'];
            $sql_query = "SELECT city, pincode FROM `address` WHERE mapping_id ='$seller_id'";
            $result2 = mysqli_query($con2, $sql_query);
            $row2=mysqli_fetch_assoc($result2);

            if($row)
            {
                    // $_SESSION['username'] = $row["username"]; // Initializing Session
                    $error = "Success1";
                    $uname = array('username'=>$row['username'],'status'=>$error,'userid'=>$row['id'],'city'=>$row2['city'],'pincode'=>$row2['pincode']);
                    echo json_encode($uname);
            }
            else if($row1)
            {
                    $error = "Success2";
                    $uname = array('status'=>$error,'sellerId'=>$row1['id'],'seller_name'=>$row1['seller_name'],'city'=>$row2['city'],'pincode'=>$row2['pincode']);
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