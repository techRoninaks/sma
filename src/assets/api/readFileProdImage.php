<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $dir = "C:/wamp/www/sma7/src/assets/images/product/$prodId";
    $i = 0; 
    if ($handle = opendir($dir)) {
        while (($file = readdir($handle)) !== false){
            if (!in_array($file, array('.', '..')) && !is_dir($dir.$file)) 
                $i++;
        }
    }
    echo json_encode(array("countPI"=>$i));
?> 