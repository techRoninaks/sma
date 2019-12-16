<?php
    require "init.php";
    $data = array();
    $userId = $_POST["userId"];
    $addr_type = "shipping";
    $sql_query = "SELECT * FROM `address` WHERE mapping_id= '$userId' AND `addr_type`= '$addr_type'";
    $result = mysqli_query($con2, $sql_query);
    $count =0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=$row["addr1"].", ".$row["addr2"].", ".$row["city"].", ".$row["district"].", ".$row["state"].", ".$row["country"].", ".$row["pincode"];
    }

    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
    
?>