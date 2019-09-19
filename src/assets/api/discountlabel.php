<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    // var_dump($prodId);
    $data = array();
    $sql_query = "SELECT `label_text` FROM `label` where id =  $prodId  ";
    $result = mysqli_query($con1 , $sql_query);
    while($row=mysqli_fetch_array($result)){
        $data=array('discountText'=>$row["label_text"]);
    }
    echo json_encode($data);
?>