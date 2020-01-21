<?php
require "init.php";

$sql_query = "SELECT * FROM `category`  WHERE `parentid`= 0 LIMIT 8";
$result = mysqli_query($con1, $sql_query);
$count = 0;
$data = array();
$data1 = array();
$data2 = array();

while($row=mysqli_fetch_assoc($result))
{
    $categoryName = $row["category"];
    $categoryid = $row["category_id"];
    $sql_query1 = "SELECT * FROM `category`  WHERE `parentid`= $categoryid";
    $result1 = mysqli_query($con1, $sql_query1);

    while($row1=mysqli_fetch_assoc($result1)){
        // $data1[]= array('cate'=>$row1['category'],'cate_id'=>$row1['category_id']);
        $subcategoryName = $row1["category"];
        $subcategoryid = $row1["category_id"];
        $sql_query2 = "SELECT * FROM `category`  WHERE `parentid`= $subcategoryid";
        $result2 = mysqli_query($con1, $sql_query2);
        while($row2=mysqli_fetch_assoc($result2)){
            $data2[]= array('cate'=>$row2['category'],'cate_id'=>$row2['category_id']);
        }
        $data1[] = array('cate'=>$row1['category'],'cate_id'=>$row1['category_id'],'sublist'=>$data2);
        $data2 = array();
    }

    $data[] = array('main'=>$categoryName,'main_id'=>$categoryid,'list'=>$data1);
    $data1 = array();
}

mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>