<?php
    require "init.php";
    $faqNum =$_POST["numberFaq"];

    // $shopId =$_POST["shopId"];
    $data = array();
    if($faqNum==0){
        $sql_query = "SELECT f.text,f.type_id from faq_site f join faq_site q on abs(f.type_id)=q.type_id limit 4";
        $result = mysqli_query($con2, $sql_query);
        $count=0;
        while($row=mysqli_fetch_assoc($result)){
            $data[$count++]=array('text'=>$row["text"],'typeId'=>$row["type_id"]);
        }
        $x=0;
        for($i=0;$i<=($count-1);$i=$i+2){
            // echo $i;
            $a[$x++]=array('question'=>$data[$i]['text'],'answer'=>$data[$i+1]['text']);
        }
    }else if($faqNum==1){
        $sql_query = "SELECT f.text,f.type_id from faq_site f join faq_site q on abs(f.type_id)=q.type_id";
        $result = mysqli_query($con2, $sql_query);
        $count=0;
        while($row=mysqli_fetch_assoc($result)){
            $data[$count++]=array('text'=>$row["text"],'typeId'=>$row["type_id"]);
        }
         $x=0;
        for($i=0;$i<=($count-1);$i=$i+2){
            // echo $i;
            $a[$x++]=array('question'=>$data[$i]['text'],'answer'=>$data[$i+1]['text']);
        }
    }
    echo json_encode($a);
?>