<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `address` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["address"]=array('address'=>$row["id"],'mappingId'=>$row["mapping_id"],'addr1'=>$row["addr1"],'addr2'=>$row["addr2"],'city'=>$row["city"],'district'=>$row["district"],'state'=>$row["state"],'country'=>$row["country"],'pincode'=>$row["pincode"],'contactEmail'=>$row["contact_email"],'contactNumber'=>$row["contact_number"],'addrType'=>$row["addr_type"],'name'=>$row["name"]);
            
    }




    echo json_encode($data);
        //echo "hello";
    
?>