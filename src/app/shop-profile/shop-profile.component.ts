import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
	selector: 'app-shop-profile',
	templateUrl: './shop-profile.component.html',
	styleUrls: ['./shop-profile.component.scss']
})
export class ShopProfileComponent implements OnInit {
	router: any;
	public token: any;
	shopData: any = "";
	sellerDataShop: any = "";
	array12: any = "";
	Object = Object;
	dynamicData: any ="";
	follow: any = "";
	unfollow: any = "";
	folResult: boolean;
	followInfo: any = "";
	tokenObj: object;

	revId: number;
	ratingReviewShop: any = [];
	filledStarRat: any = [];
	unFilledStarRat: any = [];
	reviewStar: any;
	i: number = 0;
	j: number = 0;


	constructor(private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

	ngOnInit() {
		
		this.route.queryParams.subscribe(params => {
			this.token = params['shop_id'];
			// console.log(this.token);
			this.tokenObj = { shop_id: this.token, user_id: "2" };
			// console.log(this.tokenObj);
			// this.token = params['userId'];
		});
		this.data.getRatingReviewShop(this.token).subscribe(
			data => {
				this.ratingReviewShop = data;
				console.log(this.ratingReviewShop);

				this.reviewStar = this.ratingReviewShop.rating;
				this.j = 0;
				for (this.i = 0; this.i < 5; this.i++) {
					if (this.i < this.reviewStar) {
						this.filledStarRat[this.i] = this.i;
					} else {
						this.unFilledStarRat[this.j++] = this.i;
					}
				}
			}
		);
		this.data.getShopData(this.token).subscribe(
			data => {
				this.shopData = data;
			},
			error => console.error(error)
		);
		this.data.getSellerDetailsShop(this.token).subscribe(
			data => {
				this.sellerDataShop = data;
			},
			error => console.error(error)
		);
		this.data.getProductList(this.token).subscribe(
			data => {
				this.array12 = data;
			},
			error => console.error(error)
		);
		this.data.getProductData(this.token).subscribe(
			data => {
				// console.log(data);
				this.dynamicData = data;
			},
			error => console.error(error)
		);
		this.data.getFollowInfoShop(this.tokenObj).subscribe(
			data => {
				// console.log(data);
				this.followInfo = data;
				var x = this.followInfo.response;
				// console.log(x);
				if (this.followInfo.response == "successful") {
					this.folResult = true;
					// this.follow();
				}
				else if (this.followInfo.response == "unsuccessful") {
					this.folResult = false;
				}
			},
			error => console.error(error)
		);
		
		console.log(this.ratingReviewShop);
	}
	followShop() {
		this.folResult = true;
		this.data.getFollowShopPage(this.tokenObj).subscribe();
	}
	unfollowShop() {
		this.folResult = false;
		this.data.getUnfollowShopPage(this.tokenObj).subscribe();
	}
	report(revId: any) {
		console.log(revId);
		console.log(typeof (revId));
		this.data.sendReportShop(this.tokenObj, revId).subscribe();
	}
	likeCount(revId: any) {
		console.log(revId);
		// console.log(typeof(revId));
		this.data.likeRevShop(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg") as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-23.png";
		var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-11.png";
	}
	dislikeCount(revId: any) {
		console.log(revId);
		// console.log(typeof(revId));
		this.data.dislikeRevShop(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg") as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-10.png";
		var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-24.png";
	}
}


