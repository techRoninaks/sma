<?php
require "init.php";
$sql_query = "SELECT * FROM `category` ";
$result = mysqli_query($con1, $sql_query);
$count =0;
$data = array();
while($row=mysqli_fetch_assoc($result))
{
    $data[$count++] = array('id'=>$row["category_id"],'category'=>$row["category"],'parentid'=>$row["parentid"]);
}
echo json_encode($data);
?>