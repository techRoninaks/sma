import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }


  getvariantInfo(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/variantinfocheckout.php');
  }
  getaddress(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/addresscheckout.php');
  }
  getaddressType(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/addresstypecheckout.php');
  }
  getbulkDiscount(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/bulkdiscountcheckout.php');
  }
  getcustomerOrder(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/customerordercheckout.php');
  }
  getorderMessage(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/ordermessagecheckout.php');
  }
  getorderstatus(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/orderstatuscheckout.php');
  }
  getpurchaseOrder(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/purchaseordercheckout.php');
  }
  getproduct(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/productcheckout.php');
  }
  getproductstatus(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/prodstatuscheckout.php');
  }
  getproductshipprice(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/prodshippricecheckout.php');
  }
  getoffer(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/offercheckout.php');
  }
  getsellercart(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/sellercart.php');
  }
  getcart(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/cart.php');
  }


  
  getUser(){

    return this.http.get('assets/api/bulkdiscountcheckout.php');
  }

}
