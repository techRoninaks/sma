<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    // var_dump($prodId);
    $data = array();
    $sql_query1= "SELECT `label_id` FROM `product` where prodid =  $prodId  ";
    $result1 = mysqli_query($con1 , $sql_query1);
    while($row1=mysqli_fetch_array($result1)){
        $data1=array('discountText'=>$row1["label_id"]);
    }
    $labelId = $data1["discountText"];
    $sql_query = "SELECT `label_text` FROM `label` where id =  $labelId  ";
    $result = mysqli_query($con1 , $sql_query);
    while($row=mysqli_fetch_array($result)){
        $data=array('discountText'=>$row["label_text"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>