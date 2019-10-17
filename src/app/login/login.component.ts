import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material'
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

var gapi;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  fpFormMobile: FormGroup;
  fpFormOtp: FormGroup;
  fpFormPassword: FormGroup;
  submitted: boolean;
  otpData : object;

  fpmobile : string=""; 
  fpOTP : string="";

  gotp: any ="" ;
  mobileNo: any= "";
  fp_mobile: any ="" ;
  fp_new_password: any ="" ;
  username: any ="";
  location: any ="";
  cookie_uname: String;
  cookie_user_id: String;
  city: String;
  seller_name: String;
  cookie_seller_id: String;
  dynamicDataLocation :any ="";

    constructor( private data: DataService,private formBuilderLogin: FormBuilder,private formBuilderMobile: FormBuilder,private formBuilderOtp: FormBuilder,private formBuilderPassword: FormBuilder, private router: Router,private cookieService: CookieService){ 
      this.loginForm = this.formBuilderLogin.group({
        login_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        login_password: ['',Validators.required],
      })
      this.fpFormMobile = this.formBuilderMobile.group({
        fp_mobile_no:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      })
      this.fpFormOtp = this.formBuilderOtp.group({
        fp_otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?([0-9]\d*)?$/)]]
      })
      this.fpFormPassword = this.formBuilderPassword.group({
        new_password:['',Validators.required],
        confirm_password:['',Validators.required],
      })
    }

    dynamicData: any ="";
    otpVerified: boolean = false;
    otpNotVerified: boolean = true;
    timeout: boolean = false;
    
    ngOnInit() {
      FB.XFBML.parse();
      this.googleSignIn();
      // signin2.render();
    }
    callg(){
       var element: HTMLElement = document.getElementsByClassName("abcRioButton abcRioButtonLightBlue")[0] as HTMLElement;
       element.click();
    }
    callfb(){
      var element: HTMLElement = document.getElementsByClassName("fb-login-button fb_iframe_widget")[0] as HTMLElement;
       element.click();
    } 

    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      this.router.navigate(['/plandetails']);
    }

    googleSignIn(){
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signin2().then(function () {
        console.log('User signed in');
      });
    }

    // Cookie Section
    setCookie(cname, value) {
      this.cookieService.set(cname, value);
    }
    getCookie(cname) {
      return this.cookieService.get(cname);
    }
    deleteCookie(cname) {
      this.cookieService.delete(cname);
    }

    onSubmitLogin()
    {
      this.submitted =true;
      var response ;
      if (this.loginForm.invalid) 
      {
        alert('Enter Required Fields');
        return;
      }
      else
      {  
        this.data.attemptLogin(this.loginForm.value).subscribe(
          data=>{
                  
                  console.log(data);
                  if(data['status'] =="Success1")
                  {
                    alert('Login Successfully');
                    this.cookie_uname = data['username'];
                    this.cookie_user_id = data['userid'];
                    this.city =data['city'];
                    this.setCookie("userName",this.cookie_uname);
                    this.setCookie("userId",this.cookie_user_id);
                    document.getElementById("headerLogin").innerText = this.cookie_uname as string;
                    document.getElementById("loginButton").innerText ="Log Out";
                    document.getElementById("locationlabel").innerText = this.city as string;
                    this.router.navigate(['/']);
                  }
                  else if(data['status'] =="Success2")
                  {
                    this.cookie_seller_id = data['sellerId'];
                    this.seller_name =data['seller_name'];
                    this.city =data['city'];
                    this.setCookie("sellerId",this.cookie_seller_id);
                    document.getElementById("headerLogin").innerText = this.seller_name as string;
                    document.getElementById("loginButton").innerText ="Log Out";
                    document.getElementById("locationlabel").innerText = this.city as string;
                    this.router.navigate(['/dashboard']);
                  }
                  else
                  {
                    alert('Username or Password Mismatch');
                  }
                },
            error=> console.error(error)
          );
      }
    }
    onSubmitSendOtp(){
      this.submitted = true;
      var response;
      if (this.fpFormMobile.valid) 
      {
        
        this.fpmobile = this.fpFormMobile.controls['fp_mobile_no'].value;
        // alert(typeof(this.fpmobile));
        this.data.checkMobile(this.fpmobile).subscribe(
          data => {
            // this.fpFormMobile.controls['fp_mobile_no'].setValue('');
            if (data == "Found") {
              alert('OTP Sent Successfully');
              this.gotp = this.generateOTP();
              this.requestOtp(this.gotp, this.fpmobile);

            }
            else {
              alert('Mobile Number is not Registered');
            }
          },
          error => console.error(error)
        );
      }
    }
    onSubmit(){
      this.submitted =true;
      var response ;
    }
    generateOTP() {
      var digits = '0123456789';
      var OTP = '';
      for (let i = 0; i < 6; i++ ) {
          OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    
    requestOtp(gotp, mobileNo) {
    var msg :any = "Your verification code is: "+gotp;
  
    this.data.sendOtp(gotp, mobileNo, msg).subscribe(
      data => {
        // this.fpFormMobile.controls['fp_mobile_no'].setValue('');
        console.log(data);
        if (data == "0") {
          alert('Something went wrong..')
        }
      },
      error => console.error(error)
    );
    }

  verifyOTP(){
    this.fpOTP = this.fpFormOtp.controls['fp_otp'].value;
    
    if(this.fpOTP == "")
    {
      alert('OTP cannot be null');
    }
    else
    {
          if(this.fpOTP == this.gotp)
          {
            alert('OTP verified');
            this.otpVerified = true;
            this.otpNotVerified = false;
          }
          else
          {
            alert('Incorrect OTP');
            this.fpFormOtp.controls['fp_otp'].setValue('');
          }
    }
  }
  changePassword(){
    this.fp_mobile = this.fpFormMobile.controls['fp_mobile_no'].value;
    this.fp_new_password = this.fpFormPassword.controls['new_password'].value;
    this.data.setPassword(this.fp_mobile,this.fp_new_password).subscribe(
      data => 
        {
          if(data =="ChangedPassword")
          {
            alert('Password Changed Successfully');
            $("#myModal").modal('hide');
            this.router.navigate(['/login']);
          }
          else
          {
            alert('Error Try Again');
            $("#myModal").modal('hide');
            this.router.navigate(['/login']);
          }
        },
      error => console.error(error)
    );
  }

}
