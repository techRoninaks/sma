<?php
    require "init.php";
    $Buyerid = $_POST['Buyerid'];
    $sellerid = $_POST['Sellerid'];
    $buyer = $_POST['buyer'];
    $seller = $_POST['seller'];

    $sql_query0 = "SELECT `id` FROM `thread` WHERE user1 = '$Buyerid' AND user2 = '$sellerid' AND usertype1 = 'buyer' AND usertype2 = 'seller'";
    $result0 = mysqli_query($con2,$sql_query0);
    $prethreadid = mysqli_fetch_array($result0);
    $t_id = $prethreadid["id"];

    if($prethreadid)
    {
        $sql_query0 = "SELECT `message` FROM `message` WHERE `threadid` = $t_id AND `message` LIKE 'rfq_id%'";
        $result0 = mysqli_query($con2,$sql_query0);
        $res = mysqli_fetch_array($result0);
        $msg = $res["message"];
        echo json_encode(array("threadid"=>$t_id,"message"=>$msg));
    }
    else if(!$res)
    {
        echo json_encode(array("threadid"=>$t_id));
    }

    if(!$prethreadid){
        $sql_query1 ="INSERT INTO `thread` (`user1`, `user2`, `usertype1`, `usertype2`) VALUES ($Buyerid,$sellerid,'$buyer','$seller')";
        $result1 = mysqli_query($con2, $sql_query1);

        $sql_query2 = "SELECT `id` FROM `thread` WHERE user1 = $Buyerid AND user2 = $sellerid AND usertype1 = 'buyer' AND usertype2 = 'seller'";
        $result2 = mysqli_query($con2, $sql_query2);
        $threadid=mysqli_fetch_array($result2);
        $t_id = $threadid["id"];

        $sql_query0 = "SELECT `message` FROM `message` WHERE `threadid` = $t_id AND `message` LIKE 'rfq_id%'";
        $result0 = mysqli_query($con2,$sql_query0);
        $res = mysqli_fetch_array($result0);
        $msg = $res["message"];

        if(!$res)
        {
            echo json_encode(array("threadid"=>$t_id));
        }
        else if(!$result1)
        {
            $status="Error";
            echo json_encode($status);
        }
        else
        {
            echo json_encode(array("threadid"=>$t_id,"message"=>$msg));
        }
    // else
    // {
    //     $sql_query2 = "SELECT `id` FROM `thread` WHERE user1 = $Buyerid AND user2 = $sellerid AND usertype1 = 'buyer' AND usertype2 = 'seller'";
    //     $result2 = mysqli_query($con2, $sql_query2);
    //     $threadid=mysqli_fetch_array($result2);
    //     $t_id = $threadid["id"];
    //     echo json_encode($t_id);
    // }
    }  
?>