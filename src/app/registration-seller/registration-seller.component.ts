import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-registration-seller',
  templateUrl: './registration-seller.component.html',
  styleUrls: ['./registration-seller.component.scss']
})
export class RegistrationSellerComponent implements OnInit {
  registrationForm: FormGroup;
  sellerRegForm: FormGroup;
  registrationFormStage1: FormGroup;
  submitted: boolean;
  constructor(private data: DataService,private formBuilder: FormBuilder,private router: Router,private cookieService: CookieService) { 
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
    })
  }
  dynamicDataSeller: any = "";
  dynamicDataCat: any = "";
  dynamicDataId:any ="";
  dynamicDataLoc: any ="";
  pwd: any = "";
  cpwd: any ="";
  prelim_stage: boolean = true;
  stage_1: boolean = false;
  stage_2: boolean = false;
  stage_3: boolean = false;
  stage_4: boolean = false;
  stage_5: boolean = false;
  stage_6: boolean = false;
  seller_id: any="";
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
  conf_accnt_no : any="";
  Object = Object;
  sellerData3 : object;
  sellerData4 : object;

  ngOnInit() {
    
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
  onSubmit(){
    this.submitted =true;
    this.pwd =this.registrationForm.controls['reg_password'].value;
    this.cpwd =this.registrationForm.controls['reg_conf_password'].value;
    if (this.registrationForm.invalid) {
      alert('Enter Required Fields');
      return;
    }
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
                  this.stage_1=true;
                  this.prelim_stage=false;
                  this.seller_id = data['seller_id'];
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
      this.data.addSellerDataStage2(this.registrationFormStage1.value,this.seller_id).subscribe(
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
  }
  onSubmitStage4(){
    this.ship_city = (<HTMLInputElement>document.getElementById("ship-city")).value;
    var checkedValue = (<HTMLInputElement>document.querySelector('.shipping-mode:checked')).value;
    var checkedValue2 = (<HTMLInputElement>document.querySelector('.shipping-place:checked')).value;
    this.country = (<HTMLSelectElement>document.getElementById("country")).value;
    this.state = (<HTMLSelectElement>document.getElementById("state")).value;
    this.district = (<HTMLSelectElement>document.getElementById("district")).value;
    this.city = (<HTMLSelectElement>document.getElementById("city")).value;
    this.accnt_holder_name = (<HTMLSelectElement>document.getElementById("accnt-holder-name")).value;
    this.bank_name = (<HTMLSelectElement>document.getElementById("bank-name")).value;
    this.accnt_type = (<HTMLSelectElement>document.getElementById("accnt-type")).value;
    this.branch = (<HTMLSelectElement>document.getElementById("branch")).value;
    this.accnt_no = (<HTMLSelectElement>document.getElementById("accnt-no")).value;
    this.ifsc = (<HTMLSelectElement>document.getElementById("ifsc")).value;
    this.conf_accnt_no = (<HTMLSelectElement>document.getElementById("conf-accnt-no")).value;
    
    this.sellerData4 = { ship_city: this.ship_city, checkedValue: checkedValue ,checkedValue2:checkedValue2,country:this.country,state:this.state,district:this.district,city:this.city,accnt_holder_name:this.accnt_holder_name,bank_name:this.bank_name,accnt_type:this.accnt_type,branch:this.branch,accnt_no:this.accnt_no,ifsc:this.ifsc,seller_id: this.seller_id};
    this.data.addSellerDataStage4(this.sellerData4).subscribe(
      data=>{
              if(data == "Success")
              {
                alert('Registration Stage-4 Successful');
                this.stage_3=false;
                this.stage_4=true;
              }
              else
              {
                alert('Error, try again');
              }
            },
        error=> console.error(error)
      );
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
  sellerSignIn(){
    this.setCookie("sellerId",this.seller_id);
    this.router.navigate(['/dashboard']);
  }
}
