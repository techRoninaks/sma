<?php
    require "init.php";
    $data = array();
    $sql_query = "SELECT * FROM `prod_shipping_price` ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data["prod_shipping_price"]=array('prodShippingPrice'=>$row["id"],'prodId'=>$row["proid"],'shippingLocation'=>$row["shipping_loaction"],'type'=>$row["type"],'quantityPrice'=>$row["quantity_price"],'price'=>$row["price"]);     
    }

    echo json_encode($data);
?>