<?php
include("init.php");
$status ="";
$mobile = $_POST['mobile'];
$currentPassword = $_POST['currentPassword'];
$newPassword = $_POST['newPassword'];

$sql = "SELECT `password` FROM user WHERE phone1 = '$mobile'";
$result=mysqli_query($con2,$sql);
$row=mysqli_fetch_array($result);
if($row['password']==$currentPassword)
{
    $sql1 = "UPDATE `user` SET `password`='$newPassword' WHERE phone1 = '$mobile'";
    $result1=mysqli_query($con2,$sql1);
    if($result1)
    {
        $status="Success";
        echo json_encode($status);
    }
    else{
        $status="Error";
        echo json_encode($status);
    }
}
else
{
    $status = "Not Found";
    echo json_encode($status);
}
mysqli_close($con1);
mysqli_close($con2);
?>