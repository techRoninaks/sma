<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    $data = array();
    $sql_query = "SELECT f.text,f.type_id from faq f join faq q on abs(f.type_id)=q.type_id WHERE f.prodid=$prodId ";
    $result = mysqli_query($con1 , $sql_query);
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
