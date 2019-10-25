import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-userprofile-buyer',
  templateUrl: './userprofile-buyer.component.html',
  styleUrls: ['./userprofile-buyer.component.scss']
})
export class UserprofileBuyerComponent implements OnInit {

  filledStarRat: any = [];
  unFilledStarRat: any = [];
  arrayrating: any = [];
  arrayfilledStar: any = [];
  arrayunFilledStar: any = [];
  public token: any;
  reviewStar: any;
  shopCount: any;
  editMode: boolean = false;
  viewMode: boolean = true;
  i: number = 0;
  j: number = 0;
  k: number = 0;
  followInfo: any = "";
  Btnlabel: String="";
  filledStar: any =[];
  unFilledStar: any =[];
  Object = Object;
  dynamicDataShopName: any = [];
  shopId: any ="";
  cardForm: FormGroup;
  registrationForm: FormGroup;
  constructor(private formBuilderUser: FormBuilder,private data: DataService,private router: Router,private route: ActivatedRoute,private formBuilderCard: FormBuilder,private cookieService: CookieService) { 
    this.cardForm = this.formBuilderCard.group({
      cardno: ['', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
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
  }
  dynamicDataUsercard: any = "";
  dynamicDataShopCount: any = "";
  dynamicDataPendingPayCount: any = "";
  dynamicDataSavedCard:any ="";
  dynamicData:any ="";
  dynamicDataFollow:any ="";
  id: any;
  userId: any;
  submitted :boolean;
  tokenObj: object;
  ngOnInit() {
    this.id = this.getCookie("userId");
    // this.token="1";

    // this.route.queryParams.subscribe(params => {
		// 	this.token = params['shop_id']; 
		// 	this.tokenObj = { shop_id: this.token, user_id: "1" };
		// });

    this.data.getUsercardData(this.id).subscribe(
      data=>{
              this.dynamicDataUsercard=data;
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
      this.data.getShopName(this.id).subscribe(
      data=>{
              this.dynamicDataShopName = data;
              for(this.i; this.i < this.shopCount; this.i++){
                this.arrayrating[this.i] = data[this.i]['rating'];
                // console.log(this.arrayrating);
              }
              for(this.k; this.k < this.shopCount; this.k++)
              {
                this.j = 0;
                this.reviewStar = this.arrayrating[this.k];
                for (this.i = 0; this.i < 5; this.i++) 
                {
                  if (this.i < this.reviewStar) {
                    this.filledStar[this.i] = this.i;
                    // console.log(this.filledStar);
                  } else {
                    this.unFilledStar[this.j++] = this.i;
                    // console.log(this.unFilledStar);
                  }
                }
                this.arrayfilledStar[this.k]= this.filledStar;
                this.arrayunFilledStar[this.k]= this.unFilledStar;
              }
              // console.log(this.arrayfilledStar);
              // console.log(this.arrayunFilledStar);
            },
        error=> console.error(error)
      );

      this.data.getSavedCardData(this.id).subscribe(
      data=>{
              this.dynamicDataSavedCard=data;
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
}
