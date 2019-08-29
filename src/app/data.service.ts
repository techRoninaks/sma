import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getProductData(data: Object){
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
}
