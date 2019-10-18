<?php
require "init.php";
$success = "unsuccessful";
$sql = "SELECT * FROM `purchaseorder` WHERE 1";
$result = mysqli_query($con2, $sql);
$count = 0;
$data = array();
while($row=mysqli_fetch_assoc($result)){
   $success = "successful";
   $data[$count++] = array('id'=>$row["id"],'username'=>$row["username"],
   'uname'=>$row["uname"],'email'=>$row["email"],'phone1'=>$row["phone1"],
   'order_status'=>$row["order_status"],'prodid'=>$row["prodid"],'name'=>$row["name"],'short_desc'=>$row["short_desc"],'is_rated'=>$row["is_rated"]);
}
$result = array("success"=>$success, "result"=>$data);
echo json_encode($result);
?>