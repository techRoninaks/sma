<?php

    require "init.php";
    $sellerId = $_POST["sellerId"];

    $sql = "SELECT sl.shopname, sl.rating_count, sl.review_count, sl.shop_view_count, sl.follower_count, DATEDIFF(sl.plan_exp_date, sl.plan_join_date) as plan_exp,sl.returning_customers_count FROM shop_details sl where seller_id = '$sellerId'";
    $result = mysqli_query($con2,$sql);
    $row = mysqli_fetch_array($result);

    $data = array("rating"=>$row["rating_count"],
    "review"=>$row["review_count"],
    "shopView"=>$row["shop_view_count"],
    "followers"=>$row["follower_count"],
    "retCustomers"=>$row["returning_customers_count"],
    "planExp"=>$row["plan_exp"],
    "shopName"=>$row["shopname"]);

    echo json_encode($data);
?>