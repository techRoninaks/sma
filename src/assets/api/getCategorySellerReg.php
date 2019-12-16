
<?php
    require "init.php";

    $sql = "SELECT * FROM `category` WHERE parentid =0 LIMIT 0 , 30";
    $result = mysqli_query($con2 , $sql);
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array('category_id'=>$row["category_id"],'category'=>$row["category"],'parentid'=>$row["parentid"],'shop_id'=>$row["shop_id"],'show_in_home'=>$row["show_in_home"]);
    }
    $result = array("success"=>$success,"result"=>$data);
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>