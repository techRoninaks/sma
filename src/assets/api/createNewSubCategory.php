<?php
    require "init.php";
    $category_id = $_POST['id'];
    $newTerm = $_POST['newTerm'];
    $data = array();
    $count = 0;
    $sql_query = "INSERT INTO `category`(`category`, `parentid`, `show_in_home`) VALUES ('$newTerm',$category_id,1)";
    $result = mysqli_query($con1, $sql_query);
    $sql_query = "SELECT * FROM `category` ORDER BY category_id DESC LIMIT 1 ";
    $result = mysqli_query($con1, $sql_query);
    $row=mysqli_fetch_assoc($result);


    echo json_encode($row['category_id']);
        //echo "hello";
    
?>  