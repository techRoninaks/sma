<?php
  require "init.php";
  $mapping_id = $_POST['mapping_id'];
  $contact_name = $_POST['contact_name'];
  $addr1 = $_POST['addr1'];
  $addr2 = $_POST['addr2'];
  $country = $_POST['country'];
  $state = $_POST['state'];
  $district = $_POST['district'];
  $city = $_POST['city'];
  $pincode = $_POST['pincode'];
  $contact_email = $_POST['contact_email'];
  $contact_number = $_POST['contact_number'];
  // $addr2 = "roninaks";
  // $addr1 = "roninaks";

            $result = array();
          $status = "";
          $sql_query = "INSERT INTO `address`( `mapping_id`, `addr1`, `addr2`, `city`, `district`, `state`, `country`, `pincode`, `contact_email`, `contact_number`, `contact_name`, `addr_type`) VALUES ($mapping_id,'$addr1','$addr2','$city','$district','$state','$country',$pincode,'$contact_email',$contact_number,'$contact_name','shipping')";
          // $sql_query = "INSERT INTO `address` (mapping_id,contact_name,addr1,addr2,country,state,city,pincode,contact_email,contact_number) VALUES ('$contact_name''$addr1','$addr2','$country','$state','$city','$pincode','$contact_email','$contact_number')";
          $result = mysqli_query($con2, $sql_query);
          echo $sql_query;
          echo $result;
          if($result){
            echo "success";
          }
          else{
            echo "error";
          }
?>


