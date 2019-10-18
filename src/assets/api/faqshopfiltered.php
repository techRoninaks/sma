<?php
    require "init.php";
    $faqNum =$_POST["numberFaq"];
    $filter =$_POST["filterFaq"];
    $shopId =$_POST["shopId"];

    $data = array();

    if($faqNum==1){
        
        $sql_query1="SELECT f.text,f.type_id from faq_shop f join faq_shop q on abs(f.type_id)=q.type_id WHERE f.shop_id=$shopId AND f.text LIKE '%$filter%' ";
        $result1 = mysqli_query($con2, $sql_query1);
        // echo $sql_query1."<br>";
        $count1=0;
        while($row1=mysqli_fetch_assoc($result1)){
            $data1[$count1++]=abs($row1["type_id"]+0);
        }
        // echo json_encode($data1)."<br>";


        $dataSz=sizeof($data1);
        $dataCnt=0;
        $countRev=0;
        $x=0;
        $count=0;

        while($dataSz!=0){
            $typeId=$data1[$dataCnt];
            // echo $typeId."<br>";

            $sql_query = "SELECT f.text,f.type_id from faq_shop f join faq_shop q on abs(f.type_id)=q.type_id WHERE abs(f.type_id) =$typeId AND abs(q.type_id)=$typeId ";
            $result = mysqli_query($con2, $sql_query);
            // echo $sql_query."<br>";

            while($row=mysqli_fetch_assoc($result)){
                $data[$count++]=array('text'=>$row["text"],'typeId'=>$row["type_id"]);
            }
            // echo $data."<br>";

            for($i=0;$i<=($count-1);$i=$i+2){
                // echo "hello"."<br>";
                // echo $i;

                $a[$x++]=array('question'=>$data[$i]['text'],'answer'=>$data[$i+1]['text']);
            }
            // echo $a;
            // echo $dataSz;
            $dataCnt++;
            $dataSz--;

        }
    }
    echo json_encode($a);
?>