<?php
    require "init.php";
    $prodId=$_POST["prodId"];
    $data = array();
   
    $sql_query = "SELECT `name` FROM `product` GROUP by name ";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array('name'=>$row["name"]);
    }
    echo json_encode($data);
?>