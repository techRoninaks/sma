<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $sql_query = "SELECT * FROM `offer` ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data["offer"]=array('offer'=>$row["id"],'prodId'=>$row["proid"],'percentage'=>$row["percentage"],'fromTimeStamp'=>$row["from_time_stamp"],'toTimeStamp'=>$row["to_tme_Stamp"]);     

    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
        //echo "hello";
    
?>