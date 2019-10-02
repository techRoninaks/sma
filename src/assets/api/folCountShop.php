<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query = "SELECT count(*) as fCount FROM `follow` where shopid = $shopId";
    $result = mysqli_query($con2, $sql_query);
    // echo $sql_query;
    $row = mysqli_fetch_array($result);
    if (mysqli_num_rows ($result)!= 0 )
    {
        // $data["folCount"]=$row["fCount"];
        $data = json_encode(array('status'=>"successful",'folCount'=>$row["fCount"]));
        echo $data;
    }
    else if(mysqli_num_rows ($result) == 0 )
    {
        $data = json_encode(array('response'=>"unsuccessful"));
        echo $data;
    }
 
    // json_encode($data);    
?>
