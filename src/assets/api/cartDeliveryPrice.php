<?php
require "init.php";
$data = array();
$prodId = $_POST['prodId'];
$pincode = $_POST['pincode'];
$deliveryOption =$_POST['deliveryOption'];
$productQuantity =$_POST['productQuantity'];

$sql_query = "SELECT price, quantity_price FROM `prod_shipping_price` where prodid = $prodId and shipping_location like $pincode";
$result = mysqli_query($con1, $sql_query);
$row=mysqli_fetch_assoc($result);
    $data = array('price'=>$row["price"],'quantity_price'=>$row["quantity_price"]);

    $shipQtyPrice=$row["quantity_price"];
    $shipBasePrice=$row["price"];

    //shipping qty price 

    if($deliveryOption=="shipping")
    {
        if($productQuantity==1)
        {
            $qtPrice=0;
        }
        else{
            $qt=$productQuantity-1;
            $qtPrice=$qt*$shipQtyPrice;
        } 
        $shipOption=1;
    }
    else if($deliveryOption=="homedelivery")
    {
        $qtPrice=0;
        $shipBasePrice=0;
        $shipOption=2;
    }
    else if($deliveryOption=="pickup")
    {
        $qtPrice=0;
        $shipBasePrice=0;
        $shipOption=3;
    }
    // $data = array('price'=>$row["price"],'quantity_price'=>$row["quantity_price"],'total'=>$qtPrice);
    // $price = $qtPrice + $shipBasePrice;
    mysqli_close($con1);
    mysqli_close($con2);
echo json_encode($data);

?>