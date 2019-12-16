<?php
    require "init.php";
    $categoryid = $_POST['categoryid'];
    $data = array();
    $count = 0;
    $varitantType = "";
    $sql_query = "SELECT DISTINCT(variantname) FROM `product_variant` WHERE categoryid = $categoryid ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $varitantType = $varitantType.$row['variantname'].",";
    }
    $varitantType = rtrim($varitantType, ",");
    $varitantType = explode(",", $varitantType);
    foreach($varitantType as $val){
        $varitant = array();
        $sql_query = "SELECT * FROM `product_variant` WHERE categoryid = $categoryid  and variantname like '%$val%'";
        $result = mysqli_query($con1, $sql_query);
        while($row=mysqli_fetch_assoc($result)){
            $varitant[] = array("type"=>$row['value'], "price"=>$row['price']);
        }
        $data[] = array("name"=>$val,"value"=>$varitant);
    }

    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
    
?>  