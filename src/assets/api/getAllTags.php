<?php
require "init.php";
$sql_query = "SELECT DISTINCT(`tags`) FROM `product` ";
$result = mysqli_query($con1, $sql_query);
$count =0;
$data = array();
$cell = "";
while($row=mysqli_fetch_assoc($result))
{
    if (strpos($row["tags"], ',') !== false) {
        $cell = explode(",",$row["tags"]);
        foreach($cell as $value){
            $data[] = array('id'=>($count++),'name'=>$value);  
        }
    }
    else{
        $data[] = array('id'=>($count++),'name'=>$row["tags"]);
    }  
}
echo json_encode($data);
?>