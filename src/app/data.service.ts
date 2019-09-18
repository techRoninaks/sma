import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }
  
  getProductData(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/datagetter.php',httpParams);
  }
  getVariantInfo(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/variant.php',httpParams);
  }
  getSellerDetails(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/sellerdetails.php',httpParams);
  }
  getVariantCount(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/varcount.php',httpParams);
  }
  getVariantNumber(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/numvar.php',httpParams);
  }
  getFollowInfo(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post('http://localhost:81/sma/src/assets/api/folunfol.php',httpParams);
  }
  getFollowShop(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post('http://localhost:81/sma/src/assets/api/follow.php',httpParams);
  }
  getUnfollowShop(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post('http://localhost:81/sma/src/assets/api/follow.php',httpParams);
  }

  getPageData(page: string){
    let httpParams = new HttpParams()
    .append("pageName", page);
    return this.http.post('http://localhost/SMA/src/assets/api/getPage.php', httpParams);
  }
  addData(data: Object){
    let httpParams= new HttpParams()
    .append("fullname", data['fullname'])
    .append("reg_address", data['reg_address'])
    .append("reg_email", data['reg_email'])
    .append("reg_mobile_no", data['reg_mobile_no'])
    .append("reg_age", data['reg_age'])
    .append("gender", data['gender'])
    .append("reg_password", data['reg_password']);

    return this.http.post('http://localhost/sma/src/assets/api/registration.php',httpParams);
  }

  attemptLogin(data: Object){
    console.log(data);
    let httpParams= new HttpParams()
    .append("login_email", data['login_email'])
    .append("login_password", data['login_password']);

    return this.http.post('http://localhost/sma/src/assets/api/login.php',httpParams);
  }

  checkMobile(data: Object){
    console.log(data);
    let httpParams= new HttpParams()
    .append("fp_mobile_no", data['fp_mobile_no']);

    return this.http.post('http://localhost/sma/src/assets/api/checkMobileNo.php',httpParams);
  }

  sendOtp(mobileObj:Object,messageObj:Object,otpObj:Object){
    console.log(mobileObj);
    console.log(otpObj);
    console.log(messageObj);
    let httpParams= new HttpParams()
    .append("mobileNo",mobileObj['mobileNo'])
    .append("otp",otpObj['otp'])
    .append("message",messageObj['message']);
    
    return this.http.post('http://localhost/sma/src/assets/api/sendOtp.php',httpParams);
  }

  verifyOtp(data: Object){
    let httpParams= new HttpParams()
    // .append();
    return this.http.post('http://localhost/sma/src/assets/api/verifyOtp.php',httpParams);
  }

  getvariantInfor(){
    return this.http.get('http://localhost/sma3/src/assets/api/variantinforcheckout.php');
  }
  getaddress(){
    return this.http.get('http://localhost/sma3/src/assets/api/addresscheckout.php');
  }
  getaddressType(){
    return this.http.get('http://localhost/sma3/src/assets/api/addresstypecheckout.php');
  }
  getbulkDiscount(){
    return this.http.get('http://localhost/sma3/src/assets/api/bulkdiscountcheckout.php');
  }
  getcustomerOrder(){
    return this.http.get('http://localhost/sma3/src/assets/api/customerordercheckout.php');
  }
  getorderMessage(){
    return this.http.get('http://localhost/sma3/src/assets/api/ordermessagecheckout.php');
  }
  getorderstatus(){
    return this.http.get('http://localhost/sma3/src/assets/api/orderstatuscheckout.php');
  }
  getpurchaseOrder(){
    return this.http.get('http://localhost/sma3/src/assets/api/purchaseordercheckout.php');
  }
  getproduct(id: any){
    let httpParams= new HttpParams()
    .append("prodIds",id);
    return this.http.post('http://localhost/sma3/src/assets/api/productcheckout.php',httpParams);
  }
  getproductstatus(){
    return this.http.get('http://localhost/sma3/src/assets/api/prodstatuscheckout.php');
  }
  getproductshipprice(){
    return this.http.get('http://localhost/sma3/src/assets/api/prodshippricecheckout.php');
  }
  getoffer(){
    return this.http.get('http://localhost/sma3/src/assets/api/offercheckout.php');
  }
  getsellercart(){
    return this.http.get('http://localhost/sma3/src/assets/api/sellercart.php');
  }
  getcart(userId){
    let httpParams = new HttpParams()
    .append("userId",userId);
    return this.http.post('http://localhost/sma3/src/assets/api/cart.php',httpParams);
  }
  deleteCartProductfn(id: any, userId: any){
    let httpParams = new HttpParams()
    .append("id",id)
    .append("userId",userId);
    return this.http.post('http://localhost/sma3/src/assets/api/deleteCartProduct.php',httpParams);
  }


  
  getUser(){

    return this.http.get('assets/api/bulkdiscountcheckout.php');
  }

  // deleteCart(id: number) {
  //     const i = this.DataService.findIndex(d => )
  // }
}
