<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$data = array();

$sql_query = "SELECT * FROM seller WHERE id='$seller_id'";
$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
        $data = array('owner_name'=>$row["seller_name"],'email'=>$row["email"],'contact'=>$row["phone1"]);
}
echo json_encode($data);
?>