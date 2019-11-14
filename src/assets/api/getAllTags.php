<?php
require "init.php";
$id = $_POST['id'];
$prodid = $_POST['prodid'];
$count =0;
$data = array();
$cell = "";
if($prodid == "none"){
    $sql_query = "SELECT DISTINCT(`tags`) FROM `product` WHERE sub_catgry_id LIKE '%$id%' ";
    $result = mysqli_query($con1, $sql_query);

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
}
else{
    $sql_query = "SELECT tags FROM `product` WHERE prodid = $prodid  ";
    $result = mysqli_query($con1, $sql_query);

    $row=mysqli_fetch_assoc($result);
    $tags = $row['tags'];
    $tags = explode("," ,$tags);
    foreach($tags as $value){
        $data[] = array('id'=>($count++),'name'=>$value); 
    }
    // {
    //     if (strpos($row["tags"], ',') !== false) {
    //         $cell = explode(",",$row["tags"]);
    //         foreach($cell as $value){
    //             $data[] = array('id'=>($count++),'name'=>$value);  
    //         }
    //     }
    //     else{
    //         $data[] = array('id'=>($count++),'name'=>$row["tags"]);
    //     }  
    // }
}
echo json_encode($data);
?>