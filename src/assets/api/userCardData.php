<?php
require "init.php";
$data = array();
$id = $_POST["id"];

$sql_query = "SELECT u.phone1,u.email,u.Name,u.username,a.addr1,a.addr2,a.city,a.district,a.state,a.country,a.pincode from user u inner join address a on u.addr_id = a.mapping_id WHERE u.addr_id= $id";

$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
    $data = array('username'=>$row["username"],'name'=>$row["Name"],'phoneNo'=>$row["phone1"],'email'=>$row["email"],'address'=>$row["addr1"],'address2'=>$row["addr2"],'city'=>$row["city"],'district'=>$row["district"],'state'=>$row["state"],'country'=>$row["country"],'pincode'=>$row["pincode"]);
}
echo json_encode($data);
?>