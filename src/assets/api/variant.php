<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $sql_query = "SELECT * FROM `variant_info` where prodid =  $prodId  ";
    $result = mysqli_query($con1, $sql_query);
    $count = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $data[$count++] = array('prodId' => $row["prodid"], 'name' => $row["name"], 'variantId' => $row["variantid"], 'value' => $row["value"] . " " . $row["price"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>
