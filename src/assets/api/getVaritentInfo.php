<?php
    require "init.php";
    $prodid = $_POST['id'];
    $data = array();
    $count = 0;
    $varitantType = "";
    $sql_query = "SELECT DISTINCT(name) FROM `variant_info` WHERE prodid = $prodid";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $varitantType = $varitantType.$row['name'].",";
    }
    $varitantType = rtrim($varitantType, ",");
    $varitantType = explode(",", $varitantType);
    foreach($varitantType as $val){
        $varitant = array();
        $sql_query = "SELECT * FROM `variant_info` WHERE name like '%$val%' AND prodid = $prodid ";
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