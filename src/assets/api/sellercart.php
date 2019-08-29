<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
   
    $sql_query = "SELECT * FROM `seller` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["seller"]=array('seller'=>$row["id"],'name'=>$row["name"],'username'=>$row["username"],'password'=>$row["password"],'email'=>$row["email"],'dob'=>$row["dob"],'salt'=>$row["salt"],'accountNo'=>$row["account_no"],'accountHolder'=>$row["account_holder"],'accountType'=>$row["account_type"],'gst'=>$row["gst"],'bankname'=>$row["bankname"],'ifsc'=>$row["ifsc"],'phone1'=>$row["phone1"],'phone2'=>$row["phone2"],'idcardType'=>$row["idcard_type"],'idcardno'=>$row["idcardno"],'idimage'=>$row["idimage"],'is_private'=>$row["isPrivate"]);

    }


    echo json_encode($data);
        //echo "hello";
    
?>