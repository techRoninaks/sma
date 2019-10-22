<?php 


require "init.php";


$position = $_POST['id'];
$sql1 = "SELECT count(*)  FROM `label`";
$result = mysqli_query($conn,$sql1);
$row =  mysqli_fetch_array($result);
$count = $row[0];
echo $count;

    for($i=0;$i<$count;$i++){
    $pos = $position[$i];
    $sql = "Update label SET position_order='$i' WHERE id='$pos'";

    $result= mysqli_query($conn,$sql);
    
    }

    








?>
