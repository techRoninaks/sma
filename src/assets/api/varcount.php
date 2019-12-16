<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $sql_query0 = "SELECT `name`,COUNT(*) AS varCount FROM `variant_info` WHERE `prodid` = $prodId GROUP BY `name`";
    $result0 = mysqli_query($con1, $sql_query0);
    $count0=0;
    $count1=0;
    while($row0 = mysqli_fetch_assoc($result0)){
        $data0[$count0] = array('count'=>$count0,'varName' => $row0["name"],'varCount' => $row0["varCount"]);
        $count0++;
    }
    // echo $count0;
    $count=0;
    $count0 = $count0-1;
    // echo $count0."<br>";
    while($count0>=0){
        $varName=$data0[$count0]["varName"];
        $varCount=$data0[$count0]["varCount"];
        // echo $count0." ".$varName." ".$varCount."<br>";
        // echo $varCount;
        // while($varCount>0){
            $sql_query1 = "SELECT `name`, `value` , `variantid` ,`price` FROM `variant_info` WHERE `prodid` = $prodId AND `name` LIKE '%$varName%'";
            // echo $sql_query1;
            // echo$varCount;
            $result1 = mysqli_query($con1, $sql_query1);
            while($row1 = mysqli_fetch_assoc($result1)){
                $data1[] = array('type' => $row1["value"],'price' => $row1["price"] );
            }
        //     $varCount--;
        // }
        $data[$count++] = array('name'=>$varName, 'value'=>$data1);
        $data1=array();
        $count1=0;
        $count0--;
    }
    mysqli_close($con1);
    mysqli_close($con2);

    echo json_encode($data);
?>