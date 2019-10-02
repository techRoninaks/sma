<?php
    require "init.php";
    $shopId =$_POST["shopId"];
    $data = array();
    $sql_query = "SELECT f.text,f.type_id from faq_shop f join faq_shop q on abs(f.type_id)=q.type_id WHERE f.shop_id=$shopId";
    $result = mysqli_query($con2 , $sql_query);
    $count=0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array('text'=>$row["text"],'typeId'=>$row["type_id"]);
    }
    // print_r($data);
    // echo $count;
    $x=0;
    for($i=0;$i<=($count-1);$i=$i+2){
        // echo $i;
        $a[$x++]=array('question'=>$data[$i]['text'],'answer'=>$data[$i+1]['text']);
    }
    echo json_encode($a);
