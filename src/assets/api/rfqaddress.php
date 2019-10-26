<?php
    require "init.php";
    $userId = $_POST["userId"];
    $data = array();
    $sql_query = "SELECT * FROM `address` where mapping_id =  $userId and `addr_type` = 'shipping' ";
    $result = mysqli_query($con2, $sql_query);
    $count = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $data[$count++] = array('addressId' => $row["id"], 'userId' => $row["mapping_id"],'email' => $row["contact_email"],'phoneNumber' => $row["contact_number"],'name' => $row["contact_name"],'addressType' => $row["addr_type"], 'address' => $row["addr1"] . " " . $row["addr2"] . " " . $row["city"] . " " . $row["district"] . " " . $row["state"] . " " . $row["country"] . " " . $row["pincode"],);
    }
    echo json_encode($data);
?>
