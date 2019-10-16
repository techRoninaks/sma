<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *");
    $prodid = $_POST['prodid'] ;
    $data = array();
    // $count = 0;
    $sql_query = "SELECT * FROM `prod_message` where prodid = prodid";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data=array(
        'id'=>$row["id"],
        'prodid'=>$row["prodid"],
        'title'=>$row["title"]);
    }
    echo json_encode($data);
        //echo "hello";
    
?>