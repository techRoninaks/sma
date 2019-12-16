<?php
    require "init.php";
    $shopId =$_POST["shopId"];
    $sellerId =$_POST["sellerId"];
    $shopNameId =$_POST["shopNameId"];
    $addr2ShopId =$_POST["addr2ShopId"];
    $cityShopId =$_POST["cityShopId"];
    $districtShopId =$_POST["districtShopId"];
    $stateShopId =$_POST["stateShopId"];
    $countryShopId =$_POST["countryShopId"];
    $pincodeShopId =$_POST["pincodeShopId"];
    $categ =$_POST["categ"];

    $sql_query1= "SELECT * FROM `seller` where id =  $sellerId  ";
    $result1 = mysqli_query($con2 , $sql_query1);
    $row2=mysqli_fetch_array($result1);
    $data=array('email'=>$row2["email"],'sellerName'=>$row2["seller_name"],'phone'=>$row2["phone1"]);

    $username=$data['sellerName'];
    $email=$data['email'];
    $phone=$data['phone'];


    $sql_query= "INSERT INTO `address`(`mapping_id`, `addr1`, `addr2`, `city`, `district`, `state`, `country`, `pincode`, `contact_email`, `contact_number`, `contact_name`, `addr_type`) VALUES ($shopId,'$shopNameId','$addr2ShopId','$cityShopId','$districtShopId','$stateShopId','$countryShopId',$pincodeShopId,'$email',$phone,'$username','shop')";
    $result = mysqli_query($con2 , $sql_query);
    // echo $sql_query;

    $sql="SELECT `id` FROM `address`  where `mapping_id`=$shopId  AND addr_type='shop' ORDER BY `id` DESC LIMIT 1";
    $res=mysqli_query($con2,$sql);
    $row=mysqli_fetch_assoc($res);
    // echo $sqlOrder;
    // var_dump($rowOrder);
    $data1=array('id'=>$row["id"]);
    
    $id=$data1["id"];
    


    $spiltMsg = explode(",", $categ);  
    $prodSize=sizeof($spiltMsg);
    // echo gettype($spiltMsg);
    // echo $spiltMsg[0];
    // echo $prodSize;
    $dataCnt=0;
    $countRev=0;

    while($prodSize>0){
        $dy=$spiltMsg[$dataCnt];
        $sql_queryRev ="SELECT `category_id` from `category` where `category` = '$dy'";
        // echo $sql_queryRev;
        $resultRev = mysqli_query($con1, $sql_queryRev);
        while($rowx=mysqli_fetch_assoc($resultRev)){
            $rev[$countRev++] = $rowx["category_id"];
        }
        $dataCnt++;
        $prodSize--;
    }
    $y=$rev;
        $id=implode("!~!",$y);
    // echo $id;


    $sql_query="UPDATE `shop_details` SET `category_id` ='$id' WHERE `id`=$shopId";
    $result = mysqli_query($con2, $sql_query);


    
    $sql_query= "UPDATE `shop_details` SET `addr_id`=$id where `id`=$shopId";
    $result2 = mysqli_query($con2 , $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result2; 
?>