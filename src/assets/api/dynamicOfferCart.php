<?
require "init.php";
$prodId = $_POST["prodid"];
// $percentage = $_POST["percentage"];
$sqlDisc = "SELECT * FROM `offer` where prodid =  $prodId  ";    
        $resDisc=mysqli_query($con1,$sqlDisc);
        // var_dump($resDisc);
        // echo $sqlDisc;
        $rowDisc=mysqli_fetch_array($resDisc);
        $discountInfo=array('percentage' => $rowDisc["percentage"]);
        mysqli_close($con1);
        mysqli_close($con2);
echo json_encode($discountInfo);
?>