import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

var imageRfqValue: any = "";

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
	dynamicData: any = "";
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
	ir: number = 0;
	filledStar: any = [];
	unFilledStar: any = [];
	jr: number = 0;
	shopRating: any;
	priv: number;
	selName: any = "";
	followC: any=[] ;
	mostSelling: any = [];
	shipOption: number;
	ratingData: any = [];
	bar1: any;
	bar2: any;
	bar3: any;
	bar4: any;
	bar5: any;
	userId: any;
	reviewDateDiffShop: any = [];
	tokenPrice: object;
	rfqInput: any = [];
	rfqAddress: any = [];
	defRfqTag: any=0;
	prod: any=[];
	idP: any;
	tokenProd:object;
	imageUploaded:any=0;
	sellerId:any;
	constructor(private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute, private cookieService: CookieService) { }

	ngOnInit() {

		// this.setCookie("userId", 2);
		this.userId = this.getCookie("userId");

		// this.setCookie("sellerId", 1);
		this.sellerId = this.getCookie("sellerId");



		this.route.queryParams.subscribe(params => {
			this.token = params['shop_id'];
			// console.log(this.token);
			this.tokenObj = { shop_id: this.token, user_id: this.userId };
			this.tokenProd = { shop_id: this.token, prod_number: 0};
			// console.log(this.tokenObj);
			// this.token = params['userId'];
		});


        if(this.sellerId != null || this.sellerId !=0){
			// this.router.navigate(['/managepage'], { queryParams: { shop_id: this.token } });
			(<HTMLInputElement><any>document.getElementById("sellerBtn")).style.display="block";
        }



		this.data.getRatingReviewShop(this.token).subscribe(
			data => {
				this.ratingReviewShop = data;
				// console.log(this.ratingReviewShop);

				// var x = Object.keys(this.ratingReviewShop).length;
				// console.log(x);
				// for (var y = 0; y < x; y++) {
				this.reviewStar = this.ratingReviewShop.rating;
				this.j = 0;
				for (this.i = 0; this.i < 5; this.i++) {
					if (this.i < this.reviewStar) {
						this.filledStarRat[this.i] = this.i;
					} else {
						this.unFilledStarRat[this.j++] = this.i;
					}
				}
				// }
			}
		);
		this.data.getDateDiffShop(this.token).subscribe(
			data => {
				this.reviewDateDiffShop = data;
			},
			error => console.error(error)
		);
		this.data.getShopRevRatings(this.token).subscribe(
			data => {
				this.ratingData = data;
				var totalRatings = this.ratingData.totRat;

				var rat1 = this.ratingData.rat1;

				var rat2 = this.ratingData.rat2;

				var rat3 = this.ratingData.rat3;

				var rat4 = this.ratingData.rat4;

				var rat5 = this.ratingData.rat5;

				this.bar1 = (rat1 * 100) / totalRatings;

				this.bar2 = (rat2 * 100) / totalRatings;

				this.bar3 = (rat3 * 100) / totalRatings;

				this.bar4 = (rat4 * 100) / totalRatings;

				this.bar5 = (rat5 * 100) / totalRatings;
			}
		);

		imageRfqValue = document.getElementById('shopRfq').addEventListener('change', this.onRfqClick.bind(this));


		this.data.getShopData(this.token).subscribe(
			data => {
				this.shopData = data;
				this.priv = this.shopData.privateAccount;
				this.shopRating = this.shopData.ratingShop;
				this.shipOption = this.shopData.shippingOptionId;
				for (this.ir = 0; this.ir < 5; this.ir++) {
					if (this.ir < this.shopRating) {
						this.filledStar[this.ir] = this.ir;
					} else {
						this.unFilledStar[this.jr++] = this.ir;
					}
				}
				if (this.shipOption == 1) {
					(<HTMLInputElement><any>document.getElementById("ship")).disabled = false;
					(<HTMLInputElement><any>document.getElementById("ship")).checked = true;
					// if (this.shipOption == 2) {
					// 	(<HTMLInputElement><any>document.getElementById("cod")).disabled = false;
					// 	if (this.shipOption == 3) {
					// 		(<HTMLInputElement><any>document.getElementById("pck")).disabled = false;
					// 	}
					// }
				}
				else if (this.shipOption == 2) {
					(<HTMLInputElement><any>document.getElementById("cod")).disabled = false;
					(<HTMLInputElement><any>document.getElementById("cod")).checked = true;
					// if (this.shipOption == 3) {
					// 	(<HTMLInputElement><any>document.getElementById("pck")).disabled = false;
					// }

				}
				else if (this.shipOption == 3) {
					(<HTMLInputElement><any>document.getElementById("pck")).disabled = false;
					(<HTMLInputElement><any>document.getElementById("pck")).checked = true;

				}

			},
			error => console.error(error)
		);
		this.data.getSellerDetailsShop(this.token).subscribe(
			data => {
				this.sellerDataShop = data;
				if (this.priv == 0) {
					this.selName = "By " + this.sellerDataShop.sellerName;

				}
				else {
					this.selName = "";
				}
			},
			error => console.error(error)
		);
		this.data.getProductList(this.tokenProd).subscribe(
			data => {
				this.array12 = data;
			},
			error => console.error(error)
		);
		this.data.getProductData(this.token).subscribe(
			data => {
				this.dynamicData = data;
			},
			error => console.error(error)
		);
		this.data.getFollowInfoShop(this.tokenObj).subscribe(
			data => {
				this.followInfo = data;
				var x = this.followInfo.response;
				if (this.followInfo.response == "successful") {
					this.folResult = true;
				}
				else if (this.followInfo.response == "unsuccessful") {
					this.folResult = false;
				}
			},
			error => console.error(error)
		);
		this.data.getFolCount(this.token).subscribe(
			data => {
				this.followC = data;
			},
			error => console.error(error)
		);
		this.data.getMostSelling(this.token).subscribe(
			data => {
				this.mostSelling = data;
			},
			error => console.error(error)
		);
		this.data.shopViewIncrement(this.token).subscribe();
		// console.log(this.ratingReviewShop);

		this.data.getRfqInputs(this.token).subscribe(
			data => {
				this.rfqInput = data;

			}
		);

		this.data.getRfqAddress(this.userId).subscribe(
			data => {
				this.rfqAddress = data;

			}
		);
	}
	showMoreProducts(){
		this.tokenProd = { shop_id: this.token, prod_number: 1};
		this.data.getProductList(this.tokenProd).subscribe(
			data => {
				this.array12 = data;
			},
			error => console.error(error)
		);
		(<HTMLInputElement><any>document.getElementById("prodMore")).style.display = "none";

	}

	addTagProduct(x: any) {
		var y = this.defRfqTag;
		this.prod[y++] = x;
		this.defRfqTag = y;
		// console.log(this.prod);
	}
	delProduct(id: any) {
		var n = this.Object.keys(this.prod).length;
		var chiP = id.split("!");
		this.idP = chiP[0];
		var chiIndex = chiP[1];
		// console.log(this.idP);
		// console.log(chiIndex);


		// document.getElementById(this.idP).style.display = "none";
		var removed = this.prod.splice(chiIndex, 1);
		// this.prod[chiIndex] = x;
		// if (chiIndex < n) 
		// { 
		//     n = n - 1; 
		//     for (var j:any =chiIndex; j<n; j++) 
		// 	this.prod[j] = this.prod[j+1]; 
		// } 
		// this.prod.length = n;
		console.log(removed);
		console.log(this.prod);
		this.defRfqTag = this.prod.length;


	}
	// Cookie Section BEGN
	setCookie(cname, value) {
		this.cookieService.set(cname, value);
	}
	getCookie(cname) {
		return this.cookieService.get(cname);
	}
	deleteCookie(cname) {
		this.cookieService.delete(cname);
	}

	followShop() {
		this.folResult = true;
		this.data.getFollowShopPage(this.tokenObj).subscribe();
		// this.followC.folCount = this.followC.folCount + 1;
		var y:number= parseInt(this.followC.folCount)  ;
		y=y+1;
		this.followC.folCount=y;
	
	}

	rfqSubmit() {
		// alert("loaded");
		// this.rfqEnabled = 1;
		var shopName = (<HTMLInputElement><any>document.getElementById("rfqShop")).value;
		var shopLocation = (<HTMLInputElement><any>document.getElementById("rfqLocations")).value;
		var note = (<HTMLInputElement><any>document.getElementById("rfqNote")).value;
		var productRef = this.prod;
		var image =imageRfqValue;
		this.tokenPrice = {seller_id:this.shopData.sellerId , image:image,shop_id: this.token, user_id: this.userId, imageUploaded:this.imageUploaded, shop_name: shopName, shop_location: shopLocation, note: note, product_ref: productRef };

		this.data.sendRfqShop(this.tokenPrice).subscribe();

	}

	onRfqClick(event) {
		this.imageUploaded=1;
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			imageRfqValue = text;
			console.log(imageRfqValue);
		};
	}

	unfollowShop() {
		this.folResult = false;
		this.data.getUnfollowShopPage(this.tokenObj).subscribe();
		this.followC.folCount = parseInt(this.followC.folCount) - parseInt('1');
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
	reviewRatings(x: any) {
		this.reviewStar = this.ratingReviewShop[x].rating;
		console.log(this.reviewStar);

		this.j = 0;
		for (this.i = 0; this.i < 5; this.i++) {
			if (this.i < this.reviewStar) {
				this.filledStarRat[this.i] = this.i;
			} else {
				this.unFilledStarRat[this.j++] = this.i;
			}
		}
	}
	filterFunction() {
		var input, filter, ul, li, a, i, txtValue;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		ul = document.getElementById("myUL");
		li = ul.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}

		var rfqSearchInput = (<HTMLInputElement><any>document.getElementById("myInput")).value.length;
		if (rfqSearchInput >= 3) {
			(<HTMLInputElement><any>document.getElementById("myUL")).style.display = "block";
		}
		else {
			(<HTMLInputElement><any>document.getElementById("myUL")).style.display = "none";

		}
	}
	rfqDropdown() {
		document.getElementById("rfqDropdown").classList.toggle("show");
	}
}


