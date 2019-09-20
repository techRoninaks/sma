<?php
session_start();
include("init.php");    //Establishing connection with our database

$error = "";            //Variable for storing our errors.

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
            $sql="SELECT username FROM user WHERE email = '$username' and password = '$password' ";
            $result=mysqli_query($con2,$sql);
            $row=mysqli_fetch_array($result);

            //If username and password exist in our database then create a session.
            //Otherwise echo error.

            if($row)
            {
                    $_SESSION['username'] = $row["username"]; // Initializing Session
                    $error = "Success";
                    echo json_encode($error);
            }
            else
            {
                    $error = "Error";
                    echo json_encode($error);
            }

    }
// }

?>