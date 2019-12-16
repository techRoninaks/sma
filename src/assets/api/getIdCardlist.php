<?php
require "init.php";
$sql_query = "SELECT * FROM `id_type` ";
$result = mysqli_query($con2, $sql_query);
$count =0;
while($row=mysqli_fetch_assoc($result))
{
        $data[$count++] = array('id_card_type'=>$row["type"]);
}
echo json_encode($data);
mysqli_close($con1);
mysqli_close($con2);
?>