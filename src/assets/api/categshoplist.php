<?php
    require "init.php";
    // $prodId=$_POST["prodId"];
    $data = array();
   
    $sql_query = "SELECT `category` FROM `category` GROUP by `category` ";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array('name'=>$row["category"]);
    }
    echo json_encode($data);
?>