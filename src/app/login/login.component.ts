import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material'
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  fpFormMobile: FormGroup;
  fpFormOtp: FormGroup;
  submitted: boolean;

    constructor( private data: DataService,private formBuilderLogin: FormBuilder,private formBuilderMobile: FormBuilder,private formBuilderOtp: FormBuilder, private router: Router){ 
      this.loginForm = this.formBuilderLogin.group({
        login_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        login_password: ['',Validators.required],
        login_checkbox:['',Validators.required],
      })
      this.fpFormMobile = this.formBuilderMobile.group({
        fp_mobile_no:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      })
      this.fpFormOtp = this.formBuilderOtp.group({
        fp_otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      })
    }

    dynamicData: any ="";
    
    ngOnInit() {
        // this.data.attemptLogin(this.data).subscribe(data=>{
        //   this.dynamicData = data;
        // })
    }

    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    onSubmitLogin()
    {
      this.submitted =true;
      var response ;
      // alert('Form valid');
      if (this.loginForm.invalid) 
      {
        alert('Enter Required Fields');
        return;
      }
      else
      {  
        console.log(this.loginForm.value);
        this.data.attemptLogin(this.loginForm.value).subscribe(
          data=>{
                  this.loginForm.controls['login_email'].setValue('');
                  this.loginForm.controls['login_password'].setValue('');
                  if(data == "Success")
                  {
                    alert('Login Successfully');
                        this.router.navigate(['/Plandetails']);
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
      this.submitted =true;
      var response ;
      var otp="";

      if(this.fpFormMobile.valid)
      {
        var mobileNo = this.fpFormMobile.value;
        console.log(mobileNo);
        this.data.checkMobile(mobileNo).subscribe(
          data=>{
                  // this.fpFormMobile.controls['fp_mobile_no'].setValue('');
                  if(data == "Found")
                  {
                    alert('Mobile No Found');
                    otp = this.generateOTP();
                    this.requestOtp(otp,mobileNo);
                  }
                  else
                  {
                    alert('Mobile No not Found');
                  }
                },
            error=> console.error(error)
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
    requestOtp(otp,mobileNo){
      var message ="OTP VERIFICATION";
     this.data.sendOtp(otp,mobileNo,message).subscribe(
       data=>{
                // this.fpFormMobile.controls['fp_mobile_no'].setValue('');
                console.log(data);
                if(data == "0")
                {
                  alert('Something went wrong..')
                }
                // else
                // {
                //   this.validateOtp();
                // }
             },
             error=> console.error(error)
     );
    }
    verifySubmit(){
      this.submitted =true;
      if(this.fpFormOtp.valid)
      {
        this.data.verifyOtp(this.fpFormOtp.value).subscribe(
          data=>{
                  if(data == "Found")
                  {
                    // goto next pop up new password,confirm password
                  }
                  else
                  {
                    alert('OTP VERIFIED');
                  }
                },
            error=> console.error(error)
          );
      }
    }
}