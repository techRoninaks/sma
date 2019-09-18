<?php
require "init.php";
$data = array();

$sql_query = "SELECT * FROM plan WHERE plan_id='4'";
$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
        $data = array('planDescription'=>$row["plan_features"],'planPrice'=>$row["plan_price"],'taxPrice'=>$row["tax_price"],'planDiscount'=>$row["plan_discount"],'duration'=>$row["duration"]);
}

echo json_encode($data);
?>