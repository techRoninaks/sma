<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];
    $data = array();


    $sql_query = "SELECT id FROM `follow` where shopid = $shopId && userid = $userId ";
    $result = mysqli_query($con2, $sql_query);

    if (mysqli_num_rows ($result)!= 0 )
    {
        $data = json_encode(array('response'=>"successful"));
        echo $data;
    }
    else if(mysqli_num_rows ($result) == 0 )
    {
        $data = json_encode(array('response'=>"unsuccessful"));
        echo $data;
    }
    mysqli_close($con1);
    mysqli_close($con2);
    // echo json_encode($data);
?>