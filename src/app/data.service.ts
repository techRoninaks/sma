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

  getPlanDetailsFree(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);

    return this.http.post('http://localhost/sma2/src/assets/api/plandetailsFetchFree.php',httpParams);
  }
  getPlanDetailsBasic(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);

    return this.http.post('http://localhost/sma2/src/assets/api/plandetailsFetchBasic.php',httpParams);
  }
  getPlanDetailsPremium(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);

    return this.http.post('http://localhost/sma2/src/assets/api/plandetailsFetchPremium.php',httpParams);
  }
  getPlanDetailsPlus(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);

    return this.http.post('http://localhost/sma2/src/assets/api/plandetailsFetchPlus.php',httpParams);
  }
  addData(data: Object,name: any){
    // console.log(name);
    let httpParams= new HttpParams()
    .append("fullname", data['fullname'])
    .append("reg_address", data['reg_address'])
    .append("reg_email", data['reg_email'])
    .append("reg_mobile_no", data['reg_mobile_no'])
    .append("reg_age", data['reg_age'])
    .append("gender", name)
    .append("reg_password", data['reg_password']);

    return this.http.post('http://localhost/sma2/src/assets/api/registration.php',httpParams);
  }

  attemptLogin(data: Object){
    let httpParams= new HttpParams()
    .append("login_email", data['login_email'])
    .append("login_password", data['login_password']);

    return this.http.post('http://localhost/sma2/src/assets/api/login.php',httpParams);
  }

  checkMobile(data: string){
    let httpParams= new HttpParams()
    .append("fp_mobile_no", data);
    console.log(data);

    return this.http.post('http://localhost/sma2/src/assets/api/checkMobileNo.php',httpParams);
  }

  sendOtp(otp:any, mobileNo:any, message:any){
    let httpParams= new HttpParams()
    .append("otp",otp)
    .append("mobile",mobileNo)
    .append("message",message);
    return this.http.post('http://localhost/sma2/src/assets/api/sendOtp.php',httpParams);
  }
  setPassword(fp_mobile_no:any, new_password:any){
    let httpParams= new HttpParams()
    .append("fp_mobile_no",fp_mobile_no)
    .append("new_password",new_password);
    console.log(fp_mobile_no);
    console.log(new_password);
    return this.http.post('http://localhost/sma2/src/assets/api/changePassword.php',httpParams);
  }

  getvariantInfor(){
    return this.http.get('http://localhost/scoopmyart/src/assets/api/variantinforcheckout.php');
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
