import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-userprofile-buyer',
  templateUrl: './userprofile-buyer.component.html',
  styleUrls: ['./userprofile-buyer.component.scss']
})
export class UserprofileBuyerComponent implements OnInit {

  filledStarRat: any = [];
  unFilledStarRat: any = [];
  public token: any;
  ratingReviewShop: any = [];
  reviewStar: any;
  i: number = 0;
  j: number = 0;
  followInfo: any = "";
  folResult: boolean;
  filledStar: any =[];
  unFilledStar: any =[];
  Object = Object;
  dynamicDataShopName: any = [];
  shopId: any ="";
  cardForm: FormGroup;
  constructor(private data: DataService,private router: Router,private route: ActivatedRoute,private formBuilderCard: FormBuilder) { 
    this.cardForm = this.formBuilderCard.group({
      cardno: ['', [Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
  }
  dynamicDataUsercard: any = "";
  dynamicDataShopCount: any = "";
  dynamicDataPendingPayCount: any = "";
  dynamicDataSavedCard:any ="";
  dynamicData:any ="";
  id:any;
  tokenObj: object;
  ngOnInit() {
    this.id="1";
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
              this.dynamicDataShopName=data;
              // this.ratingReviewShop = data;
				      // console.log(this.ratingReviewShop);
              this.reviewStar = this.dynamicDataShopName.rating;
              this.j = 0;
              for (this.i = 0; this.i < 5; this.i++) 
                {
                  if (this.i < this.reviewStar) {
                    this.filledStar[this.i] = this.i;
                  } else {
                    this.unFilledStar[this.j++] = this.i;
                  }
                }
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

  followShop(shopId) {
    alert(shopId);
    this.folResult = true;
    this.data.followShopPage(this.id,this.shopId).subscribe();
  }
  unfollowShop(shopId) {
    alert(shopId);
    this.folResult = false;
    this.data.unFollowShopPage(this.id,this.shopId).subscribe();
  }
  submitCardData(){

  }
  remove(id){
    document.getElementById("shop"+id).style.display="none";
    // var userId = this.getCookie("userId");
  }
}
