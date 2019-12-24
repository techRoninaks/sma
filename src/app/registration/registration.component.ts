import { Component, OnInit } from '@angular/core';
import { isString } from 'util';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {Router, RouterLink} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted: boolean;
  sentOTP: boolean = false;
  Otp: boolean = true;
  fpFormMobile: FormGroup;
  fpFormOtp: FormGroup;
  fpmobile : string=""; 
  fpOTP : string="";
  otpVerified: boolean = false;
  gotp: any ="" ;
  mobileNo: any= "";
  fp_mobile: any ="" ;
  user_mobile: any="";

  constructor(private cookieService: CookieService, private data: DataService,private formBuilder: FormBuilder,private router: Router,private formBuilderMobile: FormBuilder,private formBuilderOtp: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      reg_address1:['', Validators.required],
      reg_address2:['', Validators.required],
      reg_city:['', Validators.required],
      reg_dist:['', Validators.required],
      reg_state:['', Validators.required],
      reg_country:['', Validators.required],
      reg_pin:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_age: ['',[Validators.required,Validators.pattern(/^\+?[1-9]\d*$/),Validators.min(18)]],
      reg_password: ['',Validators.required],
      reg_conf_password: ['',Validators.required],
      gender:['',Validators.required],
      reg_checkbox:['',Validators.required],
    })
    this.fpFormMobile = this.formBuilderMobile.group({
      fp_mobile_no:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    })
    this.fpFormOtp = this.formBuilderOtp.group({
      fp_otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?([0-9]\d*)?$/)]]
    })
   }
  dynamicData: any = "";
  pwd: any = "";
  cpwd: any ="";

  ngOnInit() {
    var user = this.getCookie('userId');
    if(user){
      this.router.navigate(['/']);
    }
  }
  // Cookie Section
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  deleteCookie(cname) {
    this.cookieService.delete(cname);
  }
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  onSubmit(){
    this.submitted =true;
    this.pwd =this.registrationForm.controls['reg_password'].value;
    this.cpwd =this.registrationForm.controls['reg_conf_password'].value;
    var response ;
    // alert('in submit');
    if (this.registrationForm.invalid) {
      alert('Enter Required Fields');
      return;
    }
    else if(this.otpVerified == false){
      alert("Please Verify Mobile to Continue Registration Process...!")
    }
    else if( this.pwd != this.cpwd ){
      alert('Password mismatch');
    }
    else
    {
      // alert(this.selectedLevel.name);
      this.data.addData(this.registrationForm.value,this.selectedLevel.name).subscribe(
        data=>{
                if(data['status'] == "Success")
                {
                  alert('Registration Successful');
                  this.setCookie("isLoggedIn",1);
                  this.setCookie("userCity",this.registrationForm.controls['reg_city'].value);
                  this.setCookie("userPin",this.registrationForm.controls['reg_pin'].value);
                  this.setCookie("pin",this.registrationForm.controls['reg_pin'].value);
                  this.setCookie("userName",this.registrationForm.controls['fullname'].value);
                  this.setCookie("userId",data['id']);
                  this.router.navigate(['/']);
                  window.location.reload();
              }
                else
                {
                  alert('Error, try again');
                  this.router.navigate(['/signup']);
                }
              },
          error=> console.error(error)
        );
    }
  }
  
  selectedLevel;
  data1:Array<Object> = [
      {id: 0, name: "MALE"},
      {id: 1, name: "FEMALE"},
      {id: 2, name: "OTHER"}
  ];
  mobileFetch(){
    this.user_mobile = this.registrationForm.controls['reg_mobile_no'].value;
    (<HTMLInputElement><any>document.getElementById("fp_mobile_no")).value=this.user_mobile;
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
            alert('OTP Sent Successfully');
            this.gotp = this.generateOTP();
            this.requestOtp(this.gotp, this.fpmobile);
        },
        error => console.error(error)
      );
    }
  }
  newVerify(){
    this.fpmobile = this.registrationForm.controls['reg_mobile_no'].value;
    if(this.fpmobile==""){
      alert("Enter Mobile No:");
    }
    else{
      (<HTMLInputElement><any>document.getElementById("otpSender")).innerText = "Resend Otp";
      this.data.checkMobile(this.fpmobile).subscribe(
        data => { 
            alert('OTP Sent Successfully');
            this.gotp = this.generateOTP();
            this.requestOtp(this.gotp, this.fpmobile);
            this.sentOTP = true;
            // this.Otp = false;
        },
        error => console.error(error)
      );
    }
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
  generateOTP() {
    var digits = '0123456789';
    var OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
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
            this.sentOTP = false;
            $("#myModal").modal('hide');
          }
          else
          {
            alert('Incorrect OTP');
            this.fpFormOtp.controls['fp_otp'].setValue('');
          }
    }
  }
}