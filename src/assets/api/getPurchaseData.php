<?php

    require "init.php";

    $sellerId = $_POST["sellerId"];

    $sql_pr_view = "SELECT SUM(p.product_view_count) as prod_view FROM roninaks_smapr.product p, roninaks_smausr.shop_details sl WHERE p.shop_id = sl.id and sl.seller_id = '$sellerId'";
    $result_pr_view = mysqli_query($con1,$sql_pr_view);
    $pr_views = mysqli_fetch_array($result_pr_view); 
    // echo $sql_pr_view;

    $sql_pur_view = "SELECT COUNT(*) as pending_count from purchase_order where order_status like '%pending_confirmation%' and sellerid = '$sellerId'";
    $result_pur_view = mysqli_query($con2,$sql_pur_view);
    $pur_view = mysqli_fetch_array($result_pur_view);
    // echo $sql_pur_view;

    $sql_pro_view = "SELECT COUNT(*) as process_count from purchase_order where order_status like '%processing%' and sellerid = '$sellerId'";
    $result_pro_view = mysqli_query($con2,$sql_pro_view);
    $pro_view = mysqli_fetch_array($result_pro_view);
    // echo $sql_pro_view;

    $sql_tot_sales = "SELECT ROUND(SUM(total_amnt),2) as tot_sales from purchase_order WHERE sellerid = '$sellerId'";
    $result_tot_sales = mysqli_query($con2,$sql_tot_sales);
    $tot_sales = mysqli_fetch_array($result_tot_sales);

    $sql_activ = "SELECT COUNT(*) AS active_prod FROM roninaks_smapr.product p, roninaks_smausr.shop_details sl WHERE p.shop_id = sl.id and sl.seller_id = '$sellerId' and p.active_status = 'active'";
    $result_activ = mysqli_query($con1,$sql_activ);
    $active_prod = mysqli_fetch_array($result_activ);
    // echo $sql_activ;

    $data = array("prodView"=>$pr_views["prod_view"],
    "totSales"=>$tot_sales["tot_sales"],
    "actProd"=>$active_prod["active_prod"],
    "pendingCount"=>$pur_view["pending_count"],
    "processCount"=>$pro_view["process_count"]);

    echo json_encode($data);
?>