<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `bulk_discount` ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data["bulk_discount"]=array('bulkDiscount'=>$row["id"],'prodId'=>$row["prodid"],'quant'=>$row["quant"],'discount'=>$row["discount"],'fromTimeStamp'=>$row["from_time_stamp"],'toTimeStamp'=>$row["to_time_Stamp"]);     
    }


    mysqli_close($con1);
    mysqli_close($con2);

    echo json_encode($data);
        //echo "hello";
    
?>