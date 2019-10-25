<?php
    require "init.php";
    $category_id = $_POST['id'];
    $data = array();
    $count = 0;
    $sql_query = "SELECT * from `category` where parentid = $category_id ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array('category'=>$row["category"],'category_id'=>$row["category_id"]);
    }
    echo json_encode($data);
        //echo "hello";
    
?>  