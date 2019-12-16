<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query1 = "SELECT `category_id` FROM `shop_details` where `id`= $shopId";
    $result1 = mysqli_query($con2, $sql_query1);
    $roq1 = mysqli_fetch_array($result1);
    $data=array('cat'=>$roq1['category_id']); 

    $catTotal=$data['cat'];
    $cat =explode("!~!", $catTotal);
    $catLen =sizeof($cat);
    $dataCnt=0;
    $countRev=0;

    while($catLen!=0){
        $dy=$cat[$dataCnt];
        $sql_queryRev ="SELECT `category` from `category` where `category_id` = $dy";
        // echo $sql_queryRev;
        $resultRev = mysqli_query($con1, $sql_queryRev);
        while($row=mysqli_fetch_assoc($resultRev)){
            $rev[$countRev++] = array('category' => $row["category"]);
        }
        $dataCnt++;
        $catLen--;
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($rev);

?>