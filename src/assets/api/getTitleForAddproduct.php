<?php
    require "init.php";
    $prodid = $_POST['id'];
    $data = array();
    $count = 0;
    $sql_query = "SELECT * FROM `prod_message` WHERE prodid = $prodid";
    // echo $sql_query;
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[] = $row['title'];
    }


    echo json_encode($data);
        //echo "hello";
    
?>  