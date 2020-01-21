<?php
    require "init.php";
    $threadid = $_POST['threadid'] ;
    $rfqid = $_POST['rfqid'];
    $sql_query = "SELECT * FROM `rfqmsg` where `rfq_tagid` = $rfqid";
    $result = mysqli_query($con2, $sql_query);
    $data = array();
    while($row=mysqli_fetch_array($result)){
        $data = array(
            'msg_id'=>$row["msg_id"],
            'msg_threadid'=>$row["msg_threadid"],
            'msg_message'=>$row["msg_message"],
            'msg_senderid'=>$row["msg_senderid"],
            'msg_sender_type'=>$row["msg_sender_type"],
            'msg_sender_timestamp'=>$row["msg_sender_timestamp"],
            'msg_receiver_timestamp'=>$row["msg_receiver_timestamp"],
            'msg_message_type'=>$row["msg_message_type"],
            'msg_read_time_stamp'=>$row["msg_read_time_stamp"],
            'rfq_tagid'=>$row["rfq_tagid"],
            'rfq_ref_prodid'=>$row["rfq_ref_prodid"],
            'rfq_user_id'=>$row["rfq_user_id"],
            'rfq_orderid'=>$row["rfq_orderid"],
            'rfq_product_name'=>$row["rfq_product_name"],
            'rfq_hasimage'=>$row["rfq_hasimage"],
            'rfq_note'=>$row["rfq_note"],
            'po_orderid'=>$row["po_orderid"],
            'po_sellerid'=>$row["po_sellerid"],
            'po_is_rfq'=>$row["po_is_rfq"],
            'sd_seller_id'=>$row["sd_seller_id"],
            'sd_shopname'=>$row["sd_shopname"],
            'sd_shop_location'=>$row["sd_shop_location"]);
    }
        
    echo json_encode($data);
        //echo "hello";
    
?>