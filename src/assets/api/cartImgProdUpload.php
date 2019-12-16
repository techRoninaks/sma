<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $dir = "../images/product/$prodId";
    $i = 0; 
    if ($handle = opendir($dir)) {
        while (($file = readdir($handle)) !== false){
            if (!in_array($file, array('.', '..')) && !is_dir($dir.$file)) 
                $i++;
        }
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode(array("countPI"=>$i));
?> 