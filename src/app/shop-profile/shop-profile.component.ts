import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';

var imageRfqValue: any = "";
var imageRfqValue0: any = "";
var imageRfqValue1: any = "";
var imageRfqValue2: any = "";
var imageRUCount: number =0;

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
	revIdValue:any =[];
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
	imageVALRFQ:any="";
	imageVALRFQ0: any = "";
	imageVALRFQ1: any = "";
	imageVALRFQ2: any = "";
	likeDislikes: any = [];
	jr: number = 0;
	shopRating: any;
	priv: number;
	selName: any = "";
	followC: any=[] ;
	mostSelling: any = [];
	shipOption: any="";
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
	imageRU0:any;
	imageRU1:any;
	imageRU2:any;
	imageUploadedRfq: any;
	imageUploadedRfq0: number = 0;
	imageUploadedRfq1: number = 0;
	imageUploadedRfq2: number = 0;
	sellerId:any;
	ratingShopCount:number;
	constructor(private rout: Router,private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute, private cookieService: CookieService) { }

	ngOnInit() {

		// this.setCookie("userId", 2);
		this.userId = this.getCookie("userId");

		// this.setCookie("sellerId", 1);
		this.sellerId = this.getCookie("sellerId");
		// console.log(this.sellerId);


		this.route.queryParams.subscribe(params => {
			this.token = params['shop_id'];
			if (this.token == null || this.token == "")
			 {
				alert("No such shop exists, Redirecting to Homepage");
				this.rout.navigate(['/']);
			}
			// console.log(this.token);
			// console.log(this.tokenObj);
			// this.token = params['userId'];
		});

		this.data.getShopData(this.token).subscribe(
			data => {
				this.shopData = data;
				if (this.shopData.response == 0) {
					alert("No such shop exists, Redirecting to Homepage");
					this.rout.navigate(['/']);
				}

				this.tokenObj = { shop_id: this.token, user_id: this.userId };
				this.tokenProd = { shop_id: this.token, prod_number: 0};

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
				var ship = this.shipOption.split(",");
				var countShip =Object.keys(ship).length;
				while (countShip >=0){
					// console.log(countShip);
					// console.log(ship[countShip]);
					if (ship[countShip] == 1) {
						(<HTMLInputElement><any>document.getElementById("ship")).disabled = false;
						(<HTMLInputElement><any>document.getElementById("ship")).checked = true;
					}
					if (ship[countShip] == 2) {
						(<HTMLInputElement><any>document.getElementById("hD")).disabled = false;
						(<HTMLInputElement><any>document.getElementById("hD")).checked = true;
					}
					if (ship[countShip] == 3) {
						(<HTMLInputElement><any>document.getElementById("pck")).disabled = false;
						(<HTMLInputElement><any>document.getElementById("pck")).checked = true;
					}
					countShip--;
				}
				if(this.sellerId == this.shopData.sellerId){
					// this.router.navigate(['/managepage'], { queryParams: { shop_id: this.token } });
					console.log('selelrid='+this.sellerId);
					(<HTMLInputElement><any>document.getElementById("sellerBtn")).style.display="block";
				}
				else{
					console.log("2");
					(<HTMLInputElement><any>document.getElementById("sellerBtn")).style.display="none";
				}
				this.data.getRatingReviewShop(this.token).subscribe(
					data => {
						this.ratingReviewShop = data;
						// console.log(this.ratingReviewShop);
		
						this.ratingShopCount = Object.keys(this.ratingReviewShop).length;
						
						// console.log(x);
						for (var y = 0; y < this.ratingShopCount; y++) {
							this.revIdValue[y]=this.ratingReviewShop[y].reviewId;
						}
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
		
				this.imageUploadedRfq0 = 0;
				this.imageUploadedRfq1 = 0;
				this.imageUploadedRfq2 = 0;
				this.imageRU0 = 0;
				this.imageRU1 = 0;
				this.imageRU2 = 0;
				this.imageUploadedRfq =0;
				document.getElementById('shopRfq').addEventListener('change', this.onRfqClick.bind(this));
		
		
				
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
				// this.data.getProductData(this.token).subscribe(
				// 	data => {
				// 		this.dynamicData = data;
				// 	},
				// 	error => console.error(error)
				// );
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
				this.data.getLikesDislikesShop(this.tokenObj).subscribe(
					data => {
						// console.log(data);
						this.likeDislikes = data;
						var likeDisCount: number = Object.keys(this.likeDislikes).length;
						var x = 0;
						var q = 0;
						
						// console.log(this.ratingShopCount);
						while (q<this.ratingShopCount){
							x=0;
							while (x < likeDisCount) {
								if(this.revIdValue[q]==this.likeDislikes[x]['reviewId']){
									var y: number = this.likeDislikes[x]['reviewId'];
									var z: number = this.likeDislikes[x]['likeDislike'];
									// console.log("x="+x+",q="+q+",y="+y+",z="+z);
									if (z == 1) {
										var ele = (<HTMLImageElement><any>document.getElementById("likeImg_" + y));
										// console.log(ele.src);
										// console.log("likeImg_" + y);
										ele.src = "assets/icons/resources (IL)-23.png";
										// console.log(ele.src);
										// (<HTMLImageElement><any>document.getElementById("likeImg_"+y)).src="assets/icons/resources (IL)-23.png";
				
									}
									else if (z == 0) {
										var ele1 = (<HTMLImageElement><any>document.getElementById("dislikeImg_" + y));
										ele1.src = "assets/icons/resources (IL)-24.png";
										// (<HTMLImageElement><any>document.getElementById("dislikeImg_"+y)).src="assets/icons/resources (IL)-24.png";
									}
								}
								// console.log("x"+x);
								// console.log("shop revId"+this.revIdValue[q]);
								// console.log("user revId"+this.likeDislikes[x]['reviewId']);
								x++;
							}
							// console.log("q"+q);
							// console.log("shop revId outer"+this.revIdValue[q]);
							q++;
						}
					},
					error => console.error(error)
				);
			},
			error => console.error(error)
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
		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1 ){
			this.folResult = true;
			this.data.getFollowShopPage(this.tokenObj).subscribe();
			// this.followC.folCount = this.followC.folCount + 1;
			var y:number= parseInt(this.followC.folCount)  ;
			y=y+1;
			this.followC.folCount=y;		}
		else{
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');
		}

	
	}

	// onRfqClick(event) {
	// 	this.imageUploaded=1;
	// 	// 		console.log(event.target.files[0]);
	// 	var reader = new FileReader();
	// 	reader.readAsDataURL(event.target.files[0]);
	// 	// reader.onLoad = onLoadCallback;
	// 	reader.onload = (event) => {
	// 		var text: any = reader.result;
	// 		imageRfqValue = text;
	// 		// console.log(imageRfqValue);
	// 		this.imageVALRFQ =text;

	// 	};
	// }
	onRfqClick(event) {
		if (this.imageUploadedRfq1 == 1) {
			this.imageUploadedRfq2 = 1;
			this.imageUploadedRfq1 = 0;
			this.imageUploadedRfq0 = 0;
			this.imageRU2 = 1;
		}
		if (this.imageUploadedRfq0 == 1) {
			this.imageUploadedRfq1 = 1;
			this.imageUploadedRfq0 = 0;
			this.imageRU1 = 1;
		}
		this.imageUploadedRfq0 = 1;
		this.imageRU0 = 1;
		this.imageUploadedRfq = 1;
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (event) => {
			var text: any = reader.result;
			// imageRfqValue = text;
			// console.log(imageRfqValue);
			// this.imageVALRFQ = text;
			if (this.imageUploadedRfq2 == 1) {
				imageRfqValue2 = text;
				this.imageVALRFQ2 = text;
				imageRUCount = 3;
			}
			else if (this.imageUploadedRfq1 == 1) {
				imageRfqValue1 = text;
				this.imageVALRFQ1 = text;
				imageRUCount = 2;
			}
			else if (this.imageUploadedRfq0 == 1) {
				imageRfqValue0 = text;
				this.imageVALRFQ0 = text;
				imageRUCount = 1;
			}
		};
	}
	
	// rfqSubmit() {
	// 	// alert("loaded");
	// 	// this.rfqEnabled = 1;
		// var shopName = (<HTMLInputElement><any>document.getElementById("rfqShop")).value;
		// var shopLocation = (<HTMLInputElement><any>document.getElementById("rfqLocations")).value;
		// var note = (<HTMLInputElement><any>document.getElementById("rfqNote")).value;
		// var productRef = this.prod;
	// 	var image =imageRfqValue;
	// 	this.tokenPrice = {seller_id:this.shopData.sellerId , image:image,shop_id: this.token, user_id: this.userId, imageUploaded:this.imageUploaded, shop_name: shopName, shop_location: shopLocation, note: note, product_ref: productRef };

		// this.data.sendRfqShop(this.tokenPrice).subscribe();

	// }
	rfqSubmit() {
		// alert("loaded");
		var shopName = (<HTMLInputElement><any>document.getElementById("rfqShop")).value;
		var shopLocation = (<HTMLInputElement><any>document.getElementById("rfqLocations")).value;
		var note = (<HTMLInputElement><any>document.getElementById("rfqNote")).value;
		var productRef = this.prod;
		// var image = imageRfqValue;
		var image0 = imageRfqValue0;
		var image1 = imageRfqValue1;
		var image2 = imageRfqValue2;
		// var image=0;
		this.tokenPrice = {imageRU0: this.imageRU0, imageRU1: this.imageRU1, imageRU2: this.imageRU2,imageRUCount: imageRUCount,image0: image0, image1: image1, image2: image2,seller_id:this.shopData.sellerId ,shop_id: this.token, user_id: this.userId, imageUploadedRfq:this.imageUploadedRfq, shop_name: shopName, shop_location: shopLocation, note: note, product_ref: productRef };
		// image: image,
		this.data.sendRfqShop(this.tokenPrice).subscribe();
		$("#rfqPopup").modal('hide');
	}
	unfollowShop() {
		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1 ){
			this.folResult = false;
			this.data.getUnfollowShopPage(this.tokenObj).subscribe();
			this.followC.folCount = parseInt(this.followC.folCount) - parseInt('1');
		}
		else{
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');
		}

	}
	report(revId: any) {
		console.log(revId);
		console.log(typeof (revId));
		this.data.sendReportShop(this.tokenObj, revId).subscribe();
	}
	// likeCount(revId: any) {
	// 	console.log(revId);
	// 	// console.log(typeof(revId));
	// 	this.data.likeRevShop(this.tokenObj, revId).subscribe();
	// 	var ele = document.getElementById("likeImg") as HTMLImageElement;
	// 	ele.src = "assets/icons/resources (IL)-23.png";
	// 	var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
	// 	ele1.src = "assets/icons/resources (IL)-11.png";
	// }
	// dislikeCount(revId: any) {
	// 	console.log(revId);
	// 	// console.log(typeof(revId));
	// 	this.data.dislikeRevShop(this.tokenObj, revId).subscribe();
	// 	var ele = document.getElementById("likeImg") as HTMLImageElement;
	// 	ele.src = "assets/icons/resources (IL)-10.png";
	// 	var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
	// 	ele1.src = "assets/icons/resources (IL)-24.png";
	// }
	likeCount(revId: any) {
		// console.log(revId);
		// console.log(typeof(revId));
		var x = (<HTMLImageElement><any>document.getElementById("likeImg_" + revId)).src;
		var y = (<HTMLImageElement><any>document.getElementById("dislikeImg_" + revId)).src;

		this.data.likeRevShop(this.tokenObj, revId).subscribe();

		var ele = document.getElementById("likeImg_" + revId) as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-23.png";
		var ele1 = document.getElementById("dislikeImg_" + revId) as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-11.png";



		var resx = x.split("/");
		var resXVal = resx[5];

		var resy = y.split("/");
		var resYVal = resy[5];

		// console.log(resXVal + " asdsadgfa " + resYVal);
		if (resXVal === "resources%20(IL)-23.png") {
			// console.log(resXVal+"li1");

		}
		else if (resYVal === "resources%20(IL)-24.png") {
			// console.log(resYVal+"li2");
			var ele4 = document.getElementById("dislikeCount_" + revId);
			var count4 = parseInt(ele4.innerText);
			count4 -= 1;
			ele4.innerText = count4.toString();

			var ele3 = document.getElementById("likeCount_" + revId);
			var count = parseInt(ele3.innerText);
			count += 1;
			ele3.innerText = count.toString();
		}
		else if (resXVal === "resources%20(IL)-10.png") {
			// console.log(resXVal+"li3");
			var ele3 = document.getElementById("likeCount_" + revId);
			var count = parseInt(ele3.innerText);
			count += 1;
			ele3.innerText = count.toString();
		}
		// var ele3 = document.getElementById("likeCount_"+revId);
		// var count = parseInt(ele3.innerText);
		// count +=1;
		// ele3.innerText = count.toString();
		// alert(ele3.innerText);
	}
	dislikeCount(revId: any) {
		// console.log(revId);
		// console.log(typeof(revId));
		var x = (<HTMLImageElement><any>document.getElementById("likeImg_" + revId)).src;
		var y = (<HTMLImageElement><any>document.getElementById("dislikeImg_" + revId)).src;

		this.data.dislikeRevShop(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg_" + revId) as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-10.png";
		var ele1 = document.getElementById("dislikeImg_" + revId) as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-24.png";


		var resx = x.split("/");
		var resXVal = resx[5];

		var resy = y.split("/");
		var resYVal = resy[5];

		if (resXVal === "resources%20(IL)-23.png") {
			// console.log(resXVal+"dis1");
			var ele4 = document.getElementById("dislikeCount_" + revId);
			var count4 = parseInt(ele4.innerText);
			count4 += 1;
			ele4.innerText = count4.toString();

			var ele3 = document.getElementById("likeCount_" + revId);
			var count = parseInt(ele3.innerText);
			count -= 1;
			ele3.innerText = count.toString();
		}
		else if (resYVal === "resources%20(IL)-24.png") {
			// console.log(resYVal+"dis2");

		}
		else if (resYVal === "resources%20(IL)-11.png") {
			// console.log(resYVal+"dis3");

			var ele3 = document.getElementById("dislikeCount_" + revId);
			var count = parseInt(ele3.innerText);
			count += 1;
			ele3.innerText = count.toString();
		}
		// var ele3 = document.getElementById("dislikeCount_"+revId);
		// var count = parseInt(ele3.innerText);
		// count +=1;
		// ele3.innerText = count.toString();
		// alert(ele3.innerText);		

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
	sendRfq(){
		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1 ){
			$("#rfqPopup").modal('show');
		}
		else{
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');
		}

	}
}


