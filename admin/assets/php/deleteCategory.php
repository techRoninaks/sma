<!-- <if(!$result){
        echo "0";
    }  -->
<?php
require 'init.php';
$id = $_POST['id'];
header("Content-Type: application/json; charset=UTF-8");
$response = array();
$data = array();
$sql_query1 =  "SELECT parentid FROM category WHERE category_id = $id";
$result1 = mysqli_query($conn,$sql_query1);
$pid = mysqli_fetch_assoc($result1);
$pid_val = $pid["parentid"];
$sql_query2 = "UPDATE category SET parentid = $pid_val WHERE parentid = $id";
$result2 = mysqli_query($conn,$sql_query2);
$sql_query3 = "DELETE FROM category WHERE category_id = $id";
$result3 = mysqli_query($conn,$sql_query3);
if(!$result3){
echo "0";
}
?>
