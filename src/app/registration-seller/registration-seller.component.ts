import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

var imageFront: any ="";
var imageBack: any ="";
declare var Razorpay: any;
@Component({
  selector: 'app-registration-seller',
  templateUrl: './registration-seller.component.html',
  styleUrls: ['./registration-seller.component.scss']
})
export class RegistrationSellerComponent implements OnInit {
  Object = Object;
  registrationForm: FormGroup;
  sellerRegForm: FormGroup;
  bankDetailsForm: FormGroup;
  registrationFormStage1: FormGroup;
  fpFormMobile: FormGroup;
  fpFormOtp: FormGroup;
  termsForm: FormGroup;
  submitted: boolean;
  submittedBank: boolean;
  fpmobile : string=""; 
  fpOTP : string="";
  g_seller_id: any="";
  gotp: any ="" ;
  mobileNo: any= "";
  fp_mobile: any ="" ;
  sentOTP: boolean = false;
  Otp: boolean = true;

  otpVerified: boolean = false;

  constructor(private data: DataService,private formBuilderBank: FormBuilder,private formBuilder: FormBuilder,private formBuilderMobile: FormBuilder,private formBuilderOtp: FormBuilder,private formBuilderTerms: FormBuilder,private router: Router,private cookieService: CookieService) { 
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      reg_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_password: ['',Validators.required],
      reg_conf_password: ['',Validators.required],
      reg_checkbox:['',Validators.required],
    })
    this.sellerRegForm = this.formBuilder.group({
      shopname:['',Validators.required],
      shopaddress:['',Validators.required],
      maincategory:['',Validators.required],
    })
    this.registrationFormStage1 = this.formBuilder.group({
      shop_name:['',Validators.required],
      shop_address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pin:['',Validators.required],
      main_category:['',Validators.required],
      maincategory1:['',Validators.required],
      maincategory2:['',Validators.required],
    })
    this.fpFormMobile = this.formBuilderMobile.group({
      fp_mobile_no:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    })
    this.fpFormOtp = this.formBuilderOtp.group({
      fp_otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?([0-9]\d*)?$/)]]
    })
    this.termsForm=formBuilderTerms.group({
      t_checkbox:['',Validators.required]
    })
    this.bankDetailsForm=formBuilderBank.group({
      holder_name:['',Validators.required],
      bank_name:['',Validators.required],
      accnt_type:['',Validators.required],
      branch:['',Validators.required],
      accnt_no:['',[Validators.required,Validators.minLength(9),Validators.maxLength(18),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      conf_accnt_no:['',[Validators.required,Validators.minLength(9),Validators.maxLength(18),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      ifsc:['',[Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/)]],
    })
  }
  dynamicDataSeller: any = "";
  dynamicDataCat: any = "";
  dynamicDataId:any ="";
  dynamicDataLoc: any ="";
  dynamicDataFree: any = "";
  dynamicDataBasic: any = "";
  dynamicDataPremium: any = "";
  dynamicDataPlus: any = "";
  dynamicDataCity: any = "";
  dynamicDataPin: any = "";
  dynamicDataPinDetails: any = "";
  gst_no: any ="";
  price: any ="";
  discount: any ="";
  TotalPrice: any ="";
  pwd: any = "";
  cpwd: any ="";
  choosedPlan: boolean = false;
  prelim_stage: boolean = true;
  stage_1: boolean = false;
  stage_2: boolean = false;
  stage_3: boolean = false;
  stage_4: boolean = false;
  stage_5: boolean = false;
  stage_6: boolean = false;
  seller_mobile: any="";
  seller_id: any="";
  seller_mail: any ="";
  seller_name:any ="";
  pincode: any="";
  id_no: any="";
  seller_dob :any="";
  id_type : any="";
  ship_city : any="";
  country : any="";
  district : any="";
  state : any="";
  city : any="";
  accnt_holder_name : any="";
  bank_name : any="";
  accnt_type : any="";
  branch : any="";
  accnt_no : any="";
  ifsc : any="";
  accntno : any="";
  conf_accntno : any ="";
  conf_accnt_no : any="";
  sellerData3 : object;
  sellerData4 : object;
  imageDataFront : object;
  imageDataBack : object;
  seller_stage : any="";
  urlFront = "assets/image/";
  urlBack = "assets/image/";
  ngOnInit() {
    this.seller_stage = this.getCookie('sellerStage');
    this.seller_id = this.getCookie('sellerId');
    if(this.seller_stage == 1)
    {
      this.seller_id = this.getCookie('sellerId');
      this.seller_name = this.getCookie("sellerName");
      this.sellerDataStage1(this.seller_id);
      this.categorylist();
      this.stage_1 = true;
      this.prelim_stage = false;
    }
    else if(this.seller_stage == 2)
    {
      this.seller_id = this.getCookie('sellerId');
      this.seller_name = this.getCookie("sellerName");
      this.sellerDataStage1(this.seller_id);
      this.idCardlist();
      this.stage_2 = true;
      this.prelim_stage = false;
    }
    else if(this.seller_stage == 3)
    {
      this.pincode = this.getCookie('sellerPin');
      this.seller_id = this.getCookie('sellerId');
      this.seller_name = this.getCookie("sellerName");
      this.getLocationList();
      this.stage_3 = true;
      this.prelim_stage = false;
    }
    else if(this.seller_stage == 4)
    {
      this.seller_id = this.getCookie('sellerId');
      this.seller_name = this.getCookie("sellerName");
      this.stage_4 = true;
      this.prelim_stage = false;
    }
    else if(this.seller_stage == 5)
    {
      this.seller_id = this.getCookie('sellerId');
      this.seller_name = this.getCookie("sellerName");
      this.stage_5= true;
      this.prelim_stage = false;
    }
    this.data.getPlanDetailsFree(this.data).subscribe(
      data=>{
              this.dynamicDataFree=data;
            },
        error=> console.error(error)
      );
    this.data.getPlanDetailsBasic(this.data).subscribe(
      data=>{
              this.dynamicDataBasic=data;
            },
        error=> console.error(error)
      );
    this.data.getPlanDetailsPremium(this.data).subscribe(
      data=>{
              this.dynamicDataPremium=data;
            },
        error=> console.error(error)
      );
    this.data.getPlanDetailsPlus(this.data).subscribe(
      data=>{
              this.dynamicDataPlus=data;
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
  selectedState(state){
    this.data.getcity(state).subscribe(
      data=>{
        this.dynamicDataCity=data;
      },
        error=> console.error(error)
    );
  }
  selectedCity(city){
    this.data.getPincode(city).subscribe(
      data=>{
        this.dynamicDataPin=data;
      },
        error=> console.error(error)
    );
  }
  selectedPin(pin){
    this.data.getPincodeDetails(pin).subscribe(
      data=>{
        this.dynamicDataPinDetails=data;
      },
        error=> console.error(error)
    );
  }
  mobileFetch(){
    this.seller_mobile = this.registrationForm.controls['reg_mobile_no'].value;
    (<HTMLInputElement><any>document.getElementById("fp_mobile_no")).value=this.seller_mobile;
  }
  nextStage(){
    this.g_seller_id = this.getCookie("sellerId");
    this.data.updateStage4(this.g_seller_id).subscribe();
    this.stage_4 = false;
    this.stage_5 = true; 
  }
  welcome(){
    if(this.choosedPlan == true)
    {
      this.g_seller_id = this.getCookie("sellerId");
      this.data.updateStage5(this.g_seller_id).subscribe();
      this.stage_5 = false;
      this.stage_6 = true;
    }
    else{
      alert("Please Choose a plan..!");
    }
  }
  sellerSignIn(){
    this.data.updateStage6(this.g_seller_id).subscribe();
    this.setCookie("sellerId",this.seller_id);
    this.seller_name = this.getCookie('sellerName');
    document.getElementById("headerLogin").innerText= this.seller_name;
    this.router.navigate(['/dashboard']);
  }
  onSubmit(){
    this.submitted =true;
    this.pwd =this.registrationForm.controls['reg_password'].value;
    this.cpwd =this.registrationForm.controls['reg_conf_password'].value;
    if (this.registrationForm.invalid) {
      alert('Enter Required Fields');
      return;
    }
    // else if(this.otpVerified == false){
    //   alert("Please Verify Mobile to Continue Registration Process...!")
    // }
    else if( this.pwd != this.cpwd ){
      alert('Password mismatch');
    }
    else
    {
      this.data.addSellerDataStage1(this.registrationForm.value).subscribe(
        data=>{
                if(data['status'] == "Success")
                {
                  alert('Registration Stage-1 Successful');
                  this.seller_mail =data['email'];
                  this.data.sendVerifyMail(this.seller_mail).subscribe(
                    data=>{
                      
                    },
                    error=>console.error(error)
                  );
                  this.stage_1=true;
                  this.prelim_stage=false;
                  this.seller_id = data['seller_id'];
                  this.g_seller_id = this.seller_id;
                  this.sellerDataStage1(this.seller_id);
                  this.categorylist();
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
  sellerDataStage1(sellerId){
    this.data.getSellerData(sellerId).subscribe(
      data=>{
              this.dynamicDataSeller=data;
            },
        error=> console.error(error)
      );
  }
  categorylist(){
    this.data.getCategorylist().subscribe(
      data=>{
        this.dynamicDataCat=data;
      },
      error=> console.error(error)
    );
  }
  onSubmitStage2(){
    this.submitted =true;
    if (this.registrationFormStage1.invalid) {
      alert('Enter Required Fields');
      return;
    }
    else
    {
      this.gst_no = (<HTMLInputElement>document.getElementById("gst-no")).value;
      this.data.addSellerDataStage2(this.registrationFormStage1.value,this.seller_id,this.gst_no).subscribe(
        data=>{
                if(data['status'] == "Success")
                {
                  alert('Registration Stage-2 Successful');
                  this.stage_1=false;
                  this.stage_2=true;
                  this.idCardlist();
                  this.pincode = data['pincode'];
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
  onSubmitStage3(){
    this.id_no = (<HTMLInputElement>document.getElementById("id-no")).value;
    this.seller_dob = (<HTMLInputElement>document.getElementById("seller-dob")).value;
    this.id_type = (<HTMLSelectElement>document.getElementById("id-type")).value;
    
    this.sellerData3 = { id_no: this.id_no, seller_dob: this.seller_dob, id_type: this.id_type,seller_id:this.seller_id};
    this.data.addSellerDataStage3(this.sellerData3).subscribe(
      data=>{
              if(data == "Success")
              {
                alert('Registration Stage-3 Successful');
                this.stage_2=false;
                this.stage_3=true;
                this.getLocationList();
              }
              else
              {
                alert('Error, try again');
              }
            },
        error=> console.error(error)
      );
     
    this.imageDataFront = { seller_id:this.g_seller_id ,image:imageFront}
    this.data.uploadFront(this.imageDataFront).subscribe(
    );
    this.imageDataBack = { seller_id:this.g_seller_id ,image:imageBack}
    this.data.uploadBack(this.imageDataBack).subscribe(
    );
  }
  frontUpload(){
    imageFront=document.getElementById('frontUpload').addEventListener('change', onFrontClick.bind(this));
    
  }
  backUpload(){
    imageBack=document.getElementById('backUpload').addEventListener('change', onBackClick.bind(this));
  }
  onSubmitStage4(){
    this.submittedBank = true;
    this.accntno = this.bankDetailsForm.controls['accnt_no'].value;
    this.conf_accntno = this.bankDetailsForm.controls['conf_accnt_no'].value;
    if(this.accntno != this.conf_accntno)
    {
      alert("Account Number mismatch, try again...!")
    }
    else if(this.bankDetailsForm.invalid)
    {
      alert("Enter required fiels");
    }
    else
    {
      this.ship_city = (<HTMLInputElement>document.getElementById("ship-city")).value;
      var checkedValue = (<HTMLInputElement>document.querySelector('.shipping-mode:checked')).value;
      var checkedValue2 = (<HTMLInputElement>document.querySelector('.shipping-place:checked')).value;
      // this.country = (<HTMLSelectElement>document.getElementById("country")).value;
      // this.state = (<HTMLSelectElement>document.getElementById("state")).value;
      // this.district = (<HTMLSelectElement>document.getElementById("district")).value;
      this.city = (<HTMLSelectElement>document.getElementById("city")).value;
      this.accnt_holder_name = (<HTMLSelectElement>document.getElementById("accnt-holder-name")).value;
      this.bank_name = (<HTMLSelectElement>document.getElementById("bank-name")).value;
      this.accnt_type = (<HTMLSelectElement>document.getElementById("accnt-type")).value;
      this.branch = (<HTMLSelectElement>document.getElementById("branch")).value;
      this.accnt_no = (<HTMLSelectElement>document.getElementById("accnt-no")).value;
      this.ifsc = (<HTMLSelectElement>document.getElementById("ifsc")).value;
      this.conf_accnt_no = (<HTMLSelectElement>document.getElementById("conf-accnt-no")).value;
      this.sellerData4 = { ship_city: this.ship_city, checkedValue: checkedValue ,checkedValue2:checkedValue2,city:this.city,accnt_holder_name:this.accnt_holder_name,bank_name:this.bank_name,accnt_type:this.accnt_type,branch:this.branch,accnt_no:this.accnt_no,ifsc:this.ifsc,seller_id: this.seller_id};
      this.data.addSellerDataStage4(this.sellerData4).subscribe(
      data=>{
              if(data['status'] == "Success")
              {
                alert('Registration Stage-4 Successful');
                this.stage_3=false;
                this.stage_4=true;
                this.seller_name = data['seller_name'];
                this.seller_id = data['seller_id'];
                this.setCookie("sellerName",this.seller_name);
                this.setCookie("sellerId",this.seller_id);
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
  idCardlist(){
    this.data.getIdCardlist().subscribe(
      data=>{
        this.dynamicDataId=data;
      },
      error=> console.error(error)
    );
  }
  getLocationList(){
    this.data.getlocationlist(this.pincode).subscribe(
      data=>{
        this.dynamicDataLoc=data;
      },
      error=> console.error(error)
    );
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
            this.gotp = this.generateOTP();
            this.requestOtp(this.gotp, this.fpmobile);
            this.sentOTP = true;
            this.Otp = false;
        },
        error => console.error(error)
      );
    }
  }
  onSubmitSendOtp(){
    this.submitted = true;
    var response;
    if (this.fpFormMobile.valid) 
    {
      this.fpmobile = this.fpFormMobile.controls['fp_mobile_no'].value;
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
  checkoutFree(){
    this.seller_id = this.getCookie("sellerId");
    this.data.updateSellerPlanFree(this.seller_id).subscribe(
      data=>{
              if(data == "Success")
              {
                alert('Successfully updated plan details');
                this.choosedPlan = true;
              }
              else
              {
                alert('Error, try again');
              }
            },
        error=> console.error(error)
      );
  }
  checkoutBasic(){
    this.price = this.dynamicDataBasic.planPrice;
    this.discount = this.dynamicDataBasic.planDiscount;
    this.TotalPrice = this.price - this.discount;
    this.seller_name = this.dynamicDataSeller.owner_name;
    this.seller_mobile = this.dynamicDataSeller.contact;
    this.seller_mail = this.dynamicDataSeller.email;
    this.seller_id = this.getCookie("sellerId");
    var options = {
      "key": "rzp_test_dveDexCQKoGszl",
      "amount": Math.round(this.TotalPrice * 100), // 2000 paise = INR 20
      "currency": "INR",
      "name": "ScoopMyArt",
      "description": this.dynamicDataBasic.planDescription,
      "image": "favicon.ico", "handler": response => {
        alert("Booking successful. Thank you!");
        this.data.updateSellerPlanBasic(this.seller_id).subscribe(
          data=>{
                  if(data == "Success")
                  {
                    alert('Successfully updated plan details');
                    this.choosedPlan = true;
                  }
                  else
                  {
                    alert('Error, try again');
                  }
                },
            error=> console.error(error)
          );
      },
      "prefill": {
        "name": this.seller_name,
        "email": this.seller_mail,
        "contact": this.seller_mobile,
      },
      "notes": {},
      "theme": {
        "color": "#133E4B"
      },
      "modal": {
        "ondismiss": function () { }
      }
    };
    var rzp1 = new Razorpay(options); rzp1.open();
  }
  checkoutPremium(){
    this.price = this.dynamicDataPremium.planPrice;
    this.discount = this.dynamicDataPremium.planDiscount;
    this.TotalPrice = this.price - this.discount;
    this.seller_name = this.dynamicDataSeller.owner_name;
    this.seller_mobile = this.dynamicDataSeller.contact;
    this.seller_mail = this.dynamicDataSeller.email;
    this.seller_id = this.getCookie("sellerId");
    var options = {
      "key": "rzp_test_dveDexCQKoGszl",
      "amount": Math.round(this.TotalPrice * 100), // 2000 paise = INR 20
      "currency": "INR",
      "name": "ScoopMyArt",
      "description": this.dynamicDataPremium.planDescription,
      "image": "favicon.ico", "handler": response => {
        alert("Booking successful. Thank you!");
        this.data.updateSellerPlanPremium(this.seller_id).subscribe(
          data=>{
                  if(data == "Success")
                  {
                    alert('Successfully updated plan details');
                    this.choosedPlan = true;
                  }
                  else
                  {
                    alert('Error, try again');
                  }
                },
            error=> console.error(error)
          );
      },
      "prefill": {
        "name": this.seller_name,
        "email": this.seller_mail,
        "contact": this.seller_mobile,
      },
      "notes": {},
      "theme": {
        "color": "#133E4B"
      },
      "modal": {
        "ondismiss": function () { }
      }
    };
    var rzp1 = new Razorpay(options); rzp1.open();
  }
  checkoutPlus(){
    this.price = this.dynamicDataPlus.planPrice;
    this.discount = this.dynamicDataPlus.planDiscount;
    this.TotalPrice = this.price - this.discount;
    this.seller_name = this.dynamicDataSeller.owner_name;
    this.seller_mobile = this.dynamicDataSeller.contact;
    this.seller_mail = this.dynamicDataSeller.email;
    this.seller_id = this.getCookie("sellerId");
    var options = {
      "key": "rzp_test_dveDexCQKoGszl",
      "amount": Math.round(this.TotalPrice * 100), // 2000 paise = INR 20
      "currency": "INR",
      "name": "ScoopMyArt",
      "description": this.dynamicDataPlus.planDescription,
      "image": "favicon.ico", "handler": response => {
        alert("Booking successful. Thank you!");
        this.data.updateSellerPlanPlus(this.seller_id).subscribe(
          data=>{
                  if(data == "Success")
                  {
                    alert('Successfully updated plan details');
                    this.choosedPlan = true;
                  }
                  else
                  {
                    alert('Error, try again');
                  }
                },
            error=> console.error(error)
          );
      },
      "prefill": {
        "name": this.seller_name,
        "email": this.seller_mail,
        "contact": this.seller_mobile,
      },
      "notes": {},
      "theme": {
        "color": "#133E4B"
      },
      "modal": {
        "ondismiss": function () { }
      }
    };
    var rzp1 = new Razorpay(options); rzp1.open();
  }
}
 function onFrontClick(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId")).style.display = "block";
      this.urlFront = imageFront;
  };
}
function onBackClick(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event)=>{
        var text :any = reader.result;
        imageBack = text;
        (<HTMLInputElement>document.getElementById("backPreviewId")).style.display = "block";
        this.urlBack = imageBack;
    };
}
