<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();

    //get current date
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);

    //get from prod
    $sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price` FROM `product` WHERE `prodid` = $prodId";
    $result1 = mysqli_query($con1, $sql_query1);
    $row1 = mysqli_fetch_assoc($result1);
    
    //calc date
    $totalTime = $row1["avg_confrmn_time"] + $row1["avg_response_time"] + $row1["avg_prcessing_time"] + $row1["avg_shpping_time"];
    $totalTime = ($totalTime / 24);
    $date = $tDateValue["tDate"];
    $date = date_create("$date");
    $items = round(strval($totalTime));
    $x = "{$items} days";
    date_add($date, date_interval_create_from_date_string($x));
    $deliveryDate = date_format($date, "Y-m-d");


    $basePrice = $row1["base_price"];

    //get discount
    $sqlDisc = "SELECT * FROM `offer` where prodid =  $prodId  ";
    $resDisc = mysqli_query($con1, $sqlDisc);
    $rowDisc = mysqli_fetch_array($resDisc);
    $discountInfo = array('percentage' => $rowDisc["percentage"]);
    $disc = $discountInfo["percentage"];

    //total price calc
    // $basePriceTotal = $basePrice * $productQuantity;
    $amount = $basePrice * ($disc / 100);

    echo json_encode($data = array('tPrice' => $amount, 'dDate' => $deliveryDate));
?>