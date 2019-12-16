<?php
    require "init.php";
    $category_id = $_POST['id'];
    $searchTerm = $_POST['searchTerm'];
    $data = array();
    $count = 0;
    $sql_query = "SELECT * from `category` where parentid = $category_id and  `category` LIKE '%$searchTerm%'";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array('category'=>$row["category"],'id'=>$row["category_id"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
        //echo "hello";
    
?>  