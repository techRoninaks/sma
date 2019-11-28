<?php
    require "init.php";
    $data = array();
    $id = $_POST["id"];
    $sql_query = "SELECT * FROM `address` WHERE mapping_id= $id ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data = array('address'=>$row["id"],'mappingId'=>$row["mapping_id"],'addr1'=>$row["addr1"],'addr2'=>$row["addr2"],'city'=>$row["city"],'district'=>$row["district"],'state'=>$row["state"],'country'=>$row["country"],'pincode'=>$row["pincode"],'contactEmail'=>$row["contact_email"],'contactNumber'=>$row["contact_number"]);
    }
    echo json_encode($data);
    
?>