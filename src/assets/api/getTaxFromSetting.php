<?php
    require "init.php";
    $data = array();
    $count = 0;
    $sql_query = "SELECT * FROM `web_settings`";
    // echo $sql_query;
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[$row['name']] = $row['value'];
    }

    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
        //echo "hello";
    
?>  