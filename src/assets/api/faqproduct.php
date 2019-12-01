<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    $faqNum =$_POST["numberFaq"];
    $data = array();
    $sql_queryX = "SELECT f.text,f.type_id from faq f join faq q on abs(f.type_id)=q.type_id WHERE f.prodid=$prodId AND q.prodid =$prodId  ";
    $resultX = mysqli_query($con1 , $sql_queryX);
    $countX=0;
    // echo $sql_queryX;
    while($rowX=mysqli_fetch_assoc($resultX)){
        $x[$countX++]=array('text'=>$rowX["text"],'typeId'=>$rowX["type_id"]);
    }
    if (mysqli_num_rows ($resultX)!= 0 )
    {
        if($countX>4){
            $responseX = 1;
        }
        else if($countX<=4){
            $responseX = 0;
        }
        if($faqNum==0){
            $sql_query = "SELECT f.text,f.type_id from faq f join faq q on abs(f.type_id)=q.type_id WHERE f.prodid=$prodId AND q.prodid =$prodId limit 4 ";
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
                $a[$x++]=array('response'=>$responseX,'question'=>$data[$i]['text'],'answer'=>$data[$i+1]['text']);
            }
        }else if($faqNum==1){
            $sql_query = "SELECT f.text,f.type_id from faq f join faq q on abs(f.type_id)=q.type_id WHERE f.prodid=$prodId AND q.prodid =$prodId ";
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
                $a[$x++]=array('response'=>$responseX,'question'=>$data[$i]['text'],'answer'=>$data[$i+1]['text']);
            }
        }
    }
    else if(mysqli_num_rows ($resultX) == 0 )
    {
        $responseX = -1;
        $a[0]=array('response'=>$responseX);
    }


    echo json_encode($a);
?>