<?php
require "init.php";
$sql_query = "SELECT * FROM `label` ";
$result = mysqli_query($con1, $sql_query);
$count =0;
$data = array();
while($row=mysqli_fetch_assoc($result))
{
    $data[$count++] = array('id'=>$row["id"],'label_text'=>$row["label_text"],'priority'=>$row["priority"]);
}
echo json_encode($data);
?>