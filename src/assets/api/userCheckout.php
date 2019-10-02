<?php
    require "init.php";
    $data = array();
    $id = $_POST["id"];
    $sql_query = "SELECT * FROM `user` WHERE id= $id ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data = array('Name'=>$row["Name"]);
    }
    echo json_encode($data);
    
?>