<?php
    require "init.php";
    // $userName = $_POST['userName'];
    $notes = $_POST['note'];
    $userId = $_POST['userId'];
    $sellerId = $_POST['sellerId'];

    $sql_query = " INSERT INTO `delivery_discrepancy` (`des-number`,coid,notes) VALUES (0,'$userId','$notes')";
    $result = mysqli_query($con2, $sql_query);

    $sql_query1 = "SELECT `Discrepancy-Id` FROM `delivery_discrepancy` WHERE `coid`= $userId ";
    $result1 = mysqli_query($con2, $sql_query1);
    $row1 = mysqli_fetch_assoc($result1);
    $discripancyid = $row1['Discrepancy-Id'];
//
    $sqlThread="SELECT `id` FROM `thread` WHERE (`user1` = $userId AND `usertype1` = 'buyer' AND `user2` = $sellerId AND `usertype2` = 'seller') OR (`user2` = $userId AND `usertype2` = 'buyer' AND `user1` = $sellerId AND `usertype1` = 'seller')";
    $resThread=mysqli_query($con2,$sqlThread);
    $rowThread=mysqli_fetch_assoc($resThread);

    if (mysqli_num_rows ($resThread)!= 0 )
    {
        $idThread=$rowThread["id"];
    }
    else if(mysqli_num_rows ($resThread) == 0 )
    {
        
        $sqlT="INSERT INTO `thread` (`user1`,`user2`,`usertype1`,`usertype2`) VALUES ( $userId, $sellerId ,'buyer', 'seller')";
        $resT=mysqli_query($con2,$sqlT);

        $sqlThread2="SELECT `id` FROM `thread` WHERE (`user1` = $userId AND `usertype1` = 'buyer' AND `user2` = $sellerId AND `usertype2` = 'seller') OR (`user2` = $userId AND `usertype2` = 'buyer' AND `user1` = $sellerId AND `usertype1` = 'seller')";
        $resThread2=mysqli_query($con2,$sqlThread2);
        $rowThread2=mysqli_fetch_assoc($resThread2);
        $idThread=$rowThread2["id"];
    }

    
    $sqlMessage="INSERT INTO `message`(`threadid`, `message`, `senderid`, `sender_type`,`message_type`,`discripancyid`) VALUES ($idThread,'$notes',$userId,'buyer','complaint',$discripancyid)";
    $resMessage=mysqli_query($con2,$sqlMessage);
//
    if(! $result || !$resMessage)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
?>