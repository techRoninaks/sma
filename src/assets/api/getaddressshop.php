<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query1 = "SELECT * FROM `address` where `mapping_id` =  $shopId and `addr_type`='shop' ORDER BY `id` DESC LIMIT 1";
    $result1 = mysqli_query($con2, $sql_query1);
    $roq1 = mysqli_fetch_array($result1);
    $data=array('id'=>$roq1['id'],'mapping_id'=>$roq1['mapping_id'],'addr1'=>$roq1['addr1'],'addr2'=>$roq1['addr2'],'city'=>$roq1['city'],'district'=>$roq1['district'],'state'=>$roq1['state'],'country'=>$roq1['country'],'addressType'=>$roq1['addr_type'],'pincode'=>$roq1['pincode'],'contactEmail'=>$roq1['contact_email'],'contactNumber'=>$roq1['contact_number'],'contactName'=>$roq1['contact_name']); 

    echo json_encode($data);

?>