<?php
    require "init.php";
    $data = array();
    $id = $_POST["id"];
    $sql_query = "SELECT * FROM `prod_shipping_price` WHERE prodid = $id ";
    // echo $sql_query;
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data[] = array('pincode'=>$row["shipping_location"],'price'=>$row["price"],'qtn'=>$row["quantity_price"]);
        // $data = array('address'=>$row["addr1"]);
    }
    echo json_encode($data);
    
?>