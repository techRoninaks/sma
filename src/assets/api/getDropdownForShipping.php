<?php
require "init.php";
$shipping_alias = $_POST['shipping_alias'];
$data = array();
$count = 0;

switch($shipping_alias){
    case "All over India":

        break;
    case "All over State":
        $sql_query = "SELECT DISTINCT(state) FROM `location` ";  
        $result = mysqli_query($con2, $sql_query);
        while($row = mysqli_fetch_assoc($result)){
            $data[$count++] = $row['state'];
        }     
        break;
    case "All over District":
        $sql_query = "SELECT DISTINCT(district) FROM `location` ";  
        $result = mysqli_query($con2, $sql_query);
        while($row = mysqli_fetch_assoc($result)){
            $data[$count++] = $row['district'];
        }     
        break;
    case "All over City":
        $sql_query = "SELECT DISTINCT(division_name) FROM `location` ";  
        $result = mysqli_query($con2, $sql_query);
        while($row = mysqli_fetch_assoc($result)){
            $data[$count++] = $row['division_name'];
        }     
        break;
    case "All over Post Office":
        $sql_query = "SELECT DISTINCT(office_name) FROM `location` ";  
        $result = mysqli_query($con2, $sql_query);
        while($row = mysqli_fetch_assoc($result)){
            $data[$count++] = $row['office_name'];
        }     
        break;
    default:break;
}


// $sql_query = "SELECT * FROM `location`  WHERE `shippingoption` LIKE '%$value%'";
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>