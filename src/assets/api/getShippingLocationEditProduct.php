<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$prodid = $_POST['prodid'];
$sql_query = "SELECT * FROM `prod_shipping_price` WHERE prodid = $prodid GROUP BY type";
$result = mysqli_query($con1, $sql_query);
$count =0;
$data = array();
$locaName  = "";
while($row=mysqli_fetch_assoc($result))
{
    switch($row["type"]){
        case "ALL STATE":
        $locaName = "My State";
        break;
        case "ALL CITY":
        $locaName = "My City";
        break;
        case "ALL DISTRICT":
        $locaName = "My District";
        break;
        case "ALL INDIA":
        $locaName = "All Over India";
        break;
        default:
        $locaName = $row['shipping_location'];
    }
    $data[] = array('id'=>$row["id"],'pincode'=>$locaName,'price'=>$row["quantity_price"],'qtn'=>$row["price"]);
}
echo json_encode($data);
?>