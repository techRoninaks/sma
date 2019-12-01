<?php
    require "init.php";
    $prodid = $_POST['id'];
    $data = array();
    $count = 0;
    $faqA="";
    $faqQ="";
    $faqIds="";
    $sql_query = "SELECT DISTINCT (abs(f.type_id)) from faq f WHERE f.prodid = $prodid";
    // echo $sql_query;
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $faqIds = $faqIds.$row['(abs(f.type_id))'].",";
    }
    $faqIds = rtrim($faqIds,",");
    // echo $faqIds;
    $faqIds = explode(",", $faqIds);
    foreach($faqIds as $val){
        $sql_query = "SELECT * from faq f WHERE abs(f.type_id) = $val";
        $result = mysqli_query($con1, $sql_query);
        while($row=mysqli_fetch_assoc($result)){
            if($row['type_id']<0){
                $faqQ  = $row['text'];
                $count++;
            }
            if($row['type_id']>0){
                $faqA = $row['text'];
                $count++;
            }
        }
        $data[]= array("faqQ"=>$faqQ,"faqA"=>$faqA);
    }
   


    echo json_encode($data);
        //echo "hello";
    
?>  