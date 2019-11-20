import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
var imageFront: any ="";
var imageFront2: any ="";
var imageFront3: any ="";
@Component({
  selector: 'app-userprofile-buyer',
  templateUrl: './userprofile-buyer.component.html',
  styleUrls: ['./userprofile-buyer.component.scss']
})
export class UserprofileBuyerComponent implements OnInit {
  public token: any;
  shopCount: any;
  fpmobile: any;
  userMobile: any;
  editMode: boolean = false;
  viewMode: boolean = true;
  stage_1_dot: boolean = true;
  stage_1_full: boolean = false;
  stage_2_dot: boolean = true;
  stage_2_full: boolean = false;
  stage_3_dot: boolean = true;
  stage_3_full: boolean = false;
  stage_4_dot: boolean = true;
  stage_4_full: boolean = false;
  stage_5_dot: boolean = true;
  stage_5_full: boolean = false;
  stage_6_dot: boolean = true;
  stage_6_full: boolean = false;
  otpVerified: boolean = false;
  otpVerified2: boolean = false;
  otpSent: boolean = false;
  i: number = 0;
  j: number = 0;
  k: number = 0;
  fpOTP : string="";
  followInfo: any = "";
  Btnlabel: String="";
  Object = Object;
  dynamicDataShopName: any = [];
  shopId: any ="";
  status: any =[];
  fpFormPassword: FormGroup;
  fpFormOtp2: FormGroup;
  fpFormMobile: FormGroup;
  fpFormOtp: FormGroup;
  addAddress: FormGroup;
  addComplaint: FormGroup;
  cardForm: FormGroup;
  cardFormCvv: FormGroup;
  registrationForm: FormGroup;
  constructor(private formBuilderPassword: FormBuilder,private formBuilderMobile: FormBuilder ,private formBuilderOtp2: FormBuilder, private formBuilderOtp: FormBuilder,private formBuilderComplaint:FormBuilder,private formBuilderAddress: FormBuilder,private formBuilderUser: FormBuilder,private formBuilderCvv: FormBuilder,private data: DataService,private router: Router,private route: ActivatedRoute,private formBuilderCard: FormBuilder,private cookieService: CookieService) { 
    this.cardForm = this.formBuilderCard.group({
      cardno: ['', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
    this.cardFormCvv = this.formBuilderCvv.group({
      cvv: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      date: ['', Validators.required],
    })
    this.registrationForm = this.formBuilderUser.group({
      fullname: ['', Validators.required],
      reg_address1:['', Validators.required],
      reg_city:['', Validators.required],
      reg_dist:['', Validators.required],
      reg_state:['', Validators.required],
      reg_country:['', Validators.required],
      reg_pin:['', Validators.required],
      reg_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
    this.addAddress=formBuilderAddress.group({
      country:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pin:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email:['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    })
    this.addComplaint = formBuilderComplaint.group({
      username:['',Validators.required],
      complaint_desc:['',Validators.required],
    })
    this.fpFormOtp = this.formBuilderOtp.group({
      fp_otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?([0-9]\d*)?$/)]]
    })
    this.fpFormPassword = this.formBuilderPassword.group({
      current_password:['',Validators.required],
      new_password:['',Validators.required],
      confirm_password:['',Validators.required],
    })
  }
  imageDataFront : object;
  imageDataFront2 : object;
  imageDataFront3 : object;
  dynamicDataUsercard: any = "";
  dynamicDataShopCount: any = "";
  dynamicDataPendingPayCount: any = "";
  dynamicDataSavedCard:any ="";
  dynamicDataOrderData: any="";
  dynamicNotification: any="";
  dynamicUserAddressData: any="";
  dynamicData:any ="";
  dynamicDataFollow:any ="";
  gotp:any;
  id: any;
  fp_confirm_password: any;
  fp_new_password: any;
  fp_mobile:any;
  current_password: any;
  userName: any;
  userId: any;
  orderCount: any;
  submitted :boolean;
  tokenObj: object;
  ngOnInit() {
    this.id = this.getCookie("userId");
    this.userName = this.getCookie("userName");

    this.data.getUsercardData(this.id).subscribe(
      data=>{
              this.dynamicDataUsercard=data;
              this.userMobile= data['phoneNo'];
            },
        error=> console.error(error)
      );
    this.data.getShopFollowingCount(this.id).subscribe(
      data=>{
              this.dynamicDataShopCount=data;
              this.shopCount = data['count'];
            },
        error=> console.error(error)
      );
      this.data.getPendingPayCount(this.id).subscribe(
      data=>{
              this.dynamicDataPendingPayCount=data;
            },
        error=> console.error(error)
      );
      this.data.getUserAddressData(this.id).subscribe(
        data=>{
                this.dynamicUserAddressData=data;
              },
          error=> console.error(error)
        );
      this.data.getOrderData(this.id).subscribe(
        data=>{
          this.i =0;
          this.dynamicDataOrderData=data;
          this.orderCount= data[this.i]['orderCount'];
          this.status = this.dynamicDataOrderData['orderStatus'];
          for(this.i; this.i < this.orderCount; this.i++)
          {
            if(this.status == "pending confirmation")
            {
              this.stage_1_dot = false;
              this.stage_1_full = true;
            }
            else if(this.status == "pending payment")
            {
              this.stage_1_dot = false;
              this.stage_1_full = true;
              this.stage_2_dot = false;
              this.stage_2_full = true;
            }
            else if(this.status == "processing")
            {
              this.stage_1_dot = false;
              this.stage_1_full = true;
              this.stage_2_dot = false;
              this.stage_2_full = true;
              this.stage_3_dot = false;
              this.stage_3_full = true;
            }
            else if(this.status == "shipped")
            {
              this.stage_1_dot = false;
              this.stage_1_full = true;
              this.stage_2_dot = false;
              this.stage_2_full = true;
              this.stage_3_dot = false;
              this.stage_3_full = true;
              this.stage_4_dot = false;
              this.stage_4_full = true;
            }
            else if(this.status == "delivered")
            {
              this.stage_1_dot = false;
              this.stage_1_full = true;
              this.stage_2_dot = false;
              this.stage_2_full = true;
              this.stage_3_dot = false;
              this.stage_3_full = true;
              this.stage_4_dot = false;
              this.stage_4_full = true;
              this.stage_5_dot = false;
              this.stage_5_full = true;
            }
            else if(this.status == "closed")
            {
              this.stage_1_dot = false;
              this.stage_1_full = true;
              this.stage_2_dot = false;
              this.stage_2_full = true;
              this.stage_3_dot = false;
              this.stage_3_full = true;
              this.stage_4_dot = false;
              this.stage_4_full = true;
              this.stage_5_dot = false;
              this.stage_5_full = true;
              this.stage_6_dot = false;
              this.stage_6_full = true;
            }
          }
        },
        error=> console.error(error)
      );
      this.data.getShopName(this.id).subscribe(
      data=>{
              this.dynamicDataShopName = data;
            },
        error=> console.error(error)
      );

      this.data.getSavedCardData(this.id).subscribe(
      data=>{
              this.dynamicDataSavedCard=data;
            },
        error=> console.error(error)
      );
      this.data.getNotifications(this.id).subscribe(
        data=>{
                this.dynamicNotification=data;
              },
          error=> console.error(error)
        );
  }
  addAddressData(){
    this.submitted = true;
    this.data.addUserAddressData(this.id,this.userName,this.addAddress.value).subscribe(
      data=>{
              if(data == "Success")
              {
                alert("Address added Successfully");
                window.location.reload();
              }
              else
               alert("Error");
            },
      error=> console.error(error)
    );
  }
  deleteAddress(addressId){
    this.data.deleteUserAddress(addressId).subscribe(
      data=>{
              if(data == "Success")
              {
                alert("Deleted Successfully");
                document.getElementById("address" +addressId).style.display="none";
              }
              else
               alert("Error");
            },
      error=> console.error(error)
    );
  }
  deleteCard(cardNo){
    this.data.deleteCardData(this.id,cardNo).subscribe(
      data=>{
              if(data == "Success")
              {
                alert("Deleted Successfully");
                document.getElementById("debitCard" +cardNo).style.display="none";
              }
              else
               alert("Error");
            },
      error=> console.error(error)
    );
  }
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  deleteCookie(cname) {
    this.cookieService.delete(cname);
  }
  clickfollowShop(shopId){
    this.Btnlabel = document.getElementById("unFollowButton"+shopId).innerText;
    if(this.Btnlabel == "Unfollow"){
      this.unfollowShop(shopId);
    }
    else{
      this.followShop(shopId);
    }
  }
  followShop(shopId) {
    this.data.followShopPage(this.id,shopId).subscribe(
      data=>{
              if(data == "Success")
              {
                document.getElementById("unFollowButton"+shopId).innerText = "Unfollow";
              }
            },
      error=> console.error(error)
    );
  }
  unfollowShop(shopId) {
    this.data.unFollowShopPage(this.id,shopId).subscribe(
      data=>{
              if(data == "Success")
              {
                document.getElementById("unFollowButton"+shopId).innerText = "Follow";
              }
            },
        error=> console.error(error)
    );
  }
  submitCardData(){
    this.submitted = true;
    if (this.cardForm.invalid || this.cardFormCvv.invalid) {
      alert('Enter Required Fields');
      return;
    }
    else{
      this.data.addCardData(this.cardForm.value,this.cardFormCvv.value,this.id,this.userName).subscribe(
        data=>{
          if(data == "Success")
          {
            alert("Card Added Successfully");
            window.location.reload();
          }
          else{
            alert("Error try again");
          }
        },
    error=> console.error(error)
        );
    }
  }
  frontUpload(){
    imageFront=document.getElementById('frontUpload').addEventListener('change', onFrontClick.bind(this));
  }
  frontUpload2(){
    imageFront2=document.getElementById('frontUpload2').addEventListener('change', onFrontClick2.bind(this));
  }
  frontUpload3(){
    imageFront3=document.getElementById('frontUpload3').addEventListener('change', onFrontClick3.bind(this));
  }
  edit(){
    this.viewMode = false;
    this.editMode = true;
  }
  save(){
    this.submitted =true;
    if(this.registrationForm.invalid){
      alert("Enter Details");
    }
    else if(this.otpVerified == false){
      alert("Verify Mobile to continue..!");
    }
    else{
      this.data.updateUserData(this.registrationForm.value,this.id).subscribe(
        data=>{
                if(data == "Success")
                {
                  alert('Update Successful');
                  this.viewMode = true;
                  this.editMode = false;
                }
                else
                {
                  alert('Error, try again');
                }
              },
          error=> console.error(error)
        );
      
    }
  }
  onSubmitSendOtp(){
    this.submitted = true;
    this.fpmobile = this.fpFormMobile.controls['fp_mobile_no'].value;
    if(this.fpmobile==""){
      alert("Enter Registered Mobile No:");
    }
    else{
      this.data.checkMobile(this.fpmobile).subscribe(
        data => { 
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
  newVerify(){
    this.fpmobile = this.registrationForm.controls['reg_mobile_no'].value;
    if(this.fpmobile==""){
      alert("Enter Mobile No:");
    }
    else{
      this.data.checkMobile(this.fpmobile).subscribe(
        data => { 
            alert('OTP Sent Successfully');
            this.otpSent = true;
            this.gotp = this.generateOTP();
            this.requestOtp(this.gotp, this.fpmobile);
        },
        error => console.error(error)
      );
    }
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
              this.otpSent = false;
            }
            else
            {
              alert('Incorrect OTP');
              this.fpFormOtp.controls['fp_otp'].setValue('');
            }
      }
    }
  onSubmitComplaint(){
    this.submitted = true;
    this.data.addComplaintData(this.addComplaint.value,this.id).subscribe(
      data=>{
              if(data == "Success")
              {
                alert("Complaint sent Successfully");
              }
              else
               alert("Error");
            },
      error=> console.error(error)
    );
    this.imageDataFront = { user_id:this.id ,image:imageFront}
    this.data.uploadImage1(this.imageDataFront).subscribe(
    );
    this.imageDataFront2 = { user_id:this.id ,image:imageFront2}
    this.data.uploadImage2(this.imageDataFront2).subscribe(
    );
    this.imageDataFront3 = { user_id:this.id ,image:imageFront3}
    this.data.uploadImage3(this.imageDataFront3).subscribe(
    );
  }
  changePassword(){
    this.submitted = true;
    this.current_password = this.fpFormPassword.controls['current_password'].value;
    this.fp_new_password = this.fpFormPassword.controls['new_password'].value;
    this.fp_confirm_password = this.fpFormPassword.controls['confirm_password'].value;
    if(this.fpFormPassword.invalid)
    {
      alert("Enter Required data..!");
    }
    else if(this.fp_new_password != this.fp_confirm_password){
      alert("New Passwords do not match,try again");
      this.fpFormPassword.controls['new_password'].setValue('');
      this.fpFormPassword.controls['confirm_password'].setValue('');
    }
    else{
      this.data.checkCurrentPassword(this.userMobile,this.current_password,this.fp_new_password).subscribe(
        data=>{
                if(data =="Success")
                {
                  alert("Password changed successfully");
                  $("#myModal1").modal('hide');
                }
                else if(data =="Error")
                {
                  alert("Error try again..!");
                }
                else if(data == "Not Found")
                {
                  alert("Current Password does not exist");
                  this.fpFormPassword.controls['current_password'].setValue('');
                }
        },
        error => console.error(error)
      );
    }
  }
}
function onFrontClick(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront = text;
      (<HTMLInputElement>document.getElementById("frontPreviewId")).style.display = "block";
      this.urlFront1 = imageFront;
  };
}
function onFrontClick2(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront2 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId2")).style.display = "block";
      this.urlFront2 = imageFront2;
  };
}
function onFrontClick3(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront3 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId3")).style.display = "block";
      this.urlFront3 = imageFront3;
  };
}