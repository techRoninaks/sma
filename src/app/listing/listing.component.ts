
import { Component, OnInit, HostListener, ElementRef, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Condition } from 'selenium-webdriver';
var imageRfqValue: any = "";
var imageRfqValue0: any = "";
var imageRfqValue1: any = "";
var imageRfqValue2: any = "";
var imageValue0: any = "";
var imageValue1: any = "";
var imageValue2: any = "";
var imageValue3: any = "";
var imageValue4: any = "";
var imageValue5: any = "";
var imageValue6: any = "";
var imageValue7: any = "";
var imageValue8: any = "";
var imageValue9: any = "";
var imageUCount: number = 0;
var imageRUCount: number =0;

export interface User {
	name: string;
}

var slideIndex = 1;
declare var Razorpay: any;

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
	submitted: boolean;
	shipping_id: any;
	router: any;
	flag: number;
	ratingCount: number;
	public token: any;
	current: any;
	variantData: any = [];
	sellerDetails: any = [];
	variantCount: any = [];
	variantNum: any = [];
	spec: any = [];
	follow: any = "";
	unfollow: any = "";
	folResult: boolean;
	followInfo: any = "";
	i: number = 0;
	filledStar: any = [];
	unFilledStar: any = [];
	j: number = 0;
	productRating: any;
	reviewStar: any = [];
	maxOQuant: any;
	minOQuant: any;
	discountLabel: any = [];
	ratingReview: any = [];
	// filledStarRat: any [][] = new Array();
	// unFilledStarRat: any [][] = new Array() ;
	filledStarRat: any = [];
	unFilledStarRat: any = [];
	filledStarRatArray: any = [];
	unFilledStarRatArray: any = [];
	success = false;
	reviewDateDiff: any = "";
	faqProduct: any = [];
	ratingData: any = [];
	activeStatusProd: any;
	dPSeller: any = [];
	priv: any;
	selName: string;
	giftOpn: any;
	addMsgOrNot: any;
	addImageOrNot: any;
	sellerIdentity: any;
	varName: any;
	rfqInput: any = [];
	userId: any;
	rfqAddress: any = [];
	prod: any = [];
	idP: any;
	priceDate: any = [];
	messageTitle: any = [];
	titleGift: any;
	noteGift: any;
	addressGift: string;
	dynamicDataProName: any = "";
	prodId: any;
	filteredOptions: any;
	imageVAL0: any = "";
	imageVAL1: any = "";
	imageVAL2: any = "";
	imageVAL3: any = "";
	imageVAL4: any = "";
	imageVAL5: any = "";
	imageVAL6: any = "";
	imageVAL7: any = "";
	imageVAL8: any = "";
	imageVAL9: any = "";
	imageVALRFQ0: any = "";
	imageVALRFQ1: any = "";
	imageVALRFQ2: any = "";
	dynamicDataUser: any = "";
	dynamicDataVariant: any = "";
	dynamicDataVariants: any = "";
	// dynamicDataCartDate: any = "";
	dynamicDatatotalPrice: any = "";
	dynamicDataContactName: any = "";
	dynamicDataSecondAddress: any = "";
	dynamicNewAddr: any = "";
	dynamicDataCheckOutPrice: any = "";
	dynamicDataPurchaseReqCheckout: any = "";
	dynamicMsgTitle: any = "";
	TotalPrice: any;
	variantValue: any;
	todayD: any;
	revIdValue: any = [];
	Name: any;
	email: any;
	phone1: any;
	imageU0: any;
	imageU1: any;
	imageU2: any;
	imageU3: any;
	imageU4: any;
	imageU5: any;
	imageU6: any;
	imageU7: any;
	imageU9: any;
	imageU8: any;
	imageUploaded: any;
	imageUploaded0: any;
	imageUploaded1: any;
	imageUploaded2: any;
	imageUploaded3: any;
	imageUploaded4: any;
	imageUploaded5: any;
	imageUploaded6: any;
	imageUploaded7: any;
	imageUploaded8: any;
	imageUploaded9: any;
	imageRU0:any;
	imageRU1:any;
	imageRU2:any;
	imageUploadedRfq: any;
	imageUploadedRfq0: number = 0;
	imageUploadedRfq1: number = 0;
	imageUploadedRfq2: number = 0;
	variant: object;
	tokenFaq: object;
	uploadImageCount: any = [];
	orderid: any = "";
	noUser: number;
	dynamicDataCustomerOrder: any = "";
	tokenFaqSubmit: object;
	dateChoosen: any;
	hasRfqBit: number;
	hasGiftBit: number;
	hasDatePickerBit: number;
	datePickerDefaultCheckOut: any;
	activeStatusCheckOut: any;

	constructor(private rout: Router, private data: DataService, private formBuilder: FormBuilder, private elementRef: ElementRef, private route: ActivatedRoute, private cookieService: CookieService) {
		this.checkoutForm = this.formBuilder.group({
			fullname: ['', Validators.required],
			reg_address1: ['', Validators.required],
			reg_address2: ['', Validators.required],
			reg_city: ['', Validators.required],
			reg_dist: ['', Validators.required],
			reg_state: ['', Validators.required],
			reg_country: ['', Validators.required],
			reg_pin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
			reg_email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
			reg_mobile_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
		})
	}
	dynamicData: any = "";
	dynamicDataAddress: any = "";
	imageSrc: string;
	Object = Object;
	tokenObj: object;
	shopToken: any;
	formAddress: object;
	fgOrderDetails: FormGroup;
	tokenPrice: object;
	checkoutForm: FormGroup;
	dynamicdata: any = "";
	varient: any = "";
	stage1: boolean = false;
	ratingShopCount: number;
	largeSrc: any;
	// largeSrc: any = "assets/images/Screenshot_20190712-201603.png";
	// largeSrc: any="assets/images/product/{{dynamicData.prodId}}/{{dynamicData.prodId}}_0.jpg";
	public counter: number;
	revId: number;
	id: any;
	undel: any = "UNDELIVERABLE TO ";
	undelValue: any = 0;
	bar1: any;
	bar2: any;
	bar3: any;
	bar4: any;
	tokenPriceGetter: object;
	bar5: any;
	datePickerDefault: number;
	shopIdentity: any;
	rfqEnabled: any = 0;
	giftEnable: any = 0;
	defRfqTag: any = 1;
	myControl: any;
	faqCount: any;
	addToCartValue: any = "ADD TO CART";
	// orderId: any = "";
	prodImageCount: any = [];
	imagesCount: any = [];
	pincodeValue: number;
	tok: object;
	undelData: any = [];
	pinToken: object;
	shipLocId: number;
	quant: any;
	bPrice: number;
	likeDislikes: any = [];
	orderConfValue: number = 0;
	instantBuyValue: number = 0;

	varTypes: any ;
	onVac:any;
	baseTotalPrice: any;
	ngOnInit() {
		// this.setCookie("userId", 2);
		this.userId = this.getCookie("userId");
		// console.log(this.userId);
		// this.setCookie("userPin",682501);
		this.pincodeValue = parseInt(this.getCookie("userPin"));

		(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "block";
		(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "none";
		this.datePickerDefault = 1;
		(<HTMLInputElement><any>document.getElementById("sh")).checked = true;
		(<HTMLInputElement><any>document.getElementById("showAvailable")).style.display = "none";
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		this.todayD = mm + '/' + dd + '/' + yyyy;
		// console.log(todayD);
		this.route.queryParams.subscribe(params => {


			this.token = params['prod_id'];
			this.shopToken = params['shop_id'];
			if (this.token == null || this.shopToken == null)
			 {
				alert("No such product exists, Redirecting to Homepage");
				this.rout.navigate(['/']);
			}
			this.tokenFaq = { prod_id: this.token, number_faq: 0 };
			this.tok = { prod_id: this.token, shop_id: this.shopToken };
			// console.log(this.token);
			this.tokenObj = { prod_id: this.token, user_id: this.userId };
			// console.log(this.tokenObj);
			// this.token = params['userId'];
		});




		this.data.getProductData(this.tok).subscribe(
			data => {
				// console.log(data);
				this.dynamicData = data;
				// console.log(this.dynamicData.response)
				if (this.dynamicData.response == 0) {
					alert("No such product exists, Redirecting to Homepage");
					this.rout.navigate(['/']);
				}
				this.onVac = this.dynamicData.vac;

				this.activeStatusProd = this.dynamicData.activeStatus;
				if (this.activeStatusProd == "inactive") {

					var sID = parseInt(this.getCookie("sellerId"));
					if (sID == this.dynamicData.sellerId) {
						document.getElementById("buyNowId").style.display = "none";
						document.getElementById("reqNowId").style.display = "none";
						document.getElementById("addToCart").style.display = "none";
						document.getElementById("rfqButtonId").style.display = "none";
						document.getElementById("giftButton").style.display = "none";
					}
					else {
						alert("Inactive Product, Redirecting to Homepage");
						this.rout.navigate(['/']);
					}
				}
				else{
					if(this.onVac == "1"){
						setTimeout(function(){ 
							document.getElementById("giftButton").style.display = "none";
							document.getElementById("buyNowId").style.display = "none";
							document.getElementById("reqNowId").style.display = "none";
							document.getElementById("addToCart").style.display = "none";
							document.getElementById("rfqButtonId").style.display = "none";
							document.getElementById("vacId").style.display = "ruby";
						}, 100);
					}
					else if(this.onVac == "0"){
						//no change
					}


				}
				


				var str = this.dynamicData.specification;
				var res = str.split("!~!");
				this.spec = res;
				this.minOQuant = this.dynamicData.minOrderQuant;
				this.maxOQuant = this.dynamicData.maxOrderQuant;
				this.quant = parseInt(this.dynamicData.qtyAvailable);
				this.counter = this.dynamicData.minOrderQuant;
				this.uploadImageCount = this.dynamicData.maxImageCount;
				this.addMsgOrNot = this.dynamicData.addMsgField;
				this.addImageOrNot = this.dynamicData.canUploadImage;
				this.shipLocId = this.dynamicData.shipLocationId;
				this.hasRfqBit = parseInt(this.dynamicData.hasRfq);
				this.hasGiftBit = parseInt(this.dynamicData.hasGift);
				this.hasDatePickerBit = parseInt(this.dynamicData.canOrderByDate);
				this.bPrice = this.dynamicData.basePrice;
				this.orderConfValue = this.dynamicData.hasOrderConfirm;
				this.instantBuyValue = this.dynamicData.hasInstantBuy;
				this.tokenPriceGetter = { prod_id: this.token, pin: this.pincodeValue, prod_quantity: this.minOQuant, del_option: "shipping" };
				this.baseTotalPrice = this.minOQuant * this.bPrice;
				//rfq 1st prod
				this.prod[0] = this.dynamicData.name;
				this.largeSrc = "assets/images/product/" + this.dynamicData.prodId + "/" + this.dynamicData.prodId + "_0.jpg";

				if (this.quant <= 5) {
					(<HTMLInputElement><any>document.getElementById("showAvailable")).style.display = "block";
				}
				if (this.hasRfqBit == 0) {
					(<HTMLInputElement><any>document.getElementById("rfqButtonId")).style.display = "none";
				}
				if (this.hasGiftBit == 0) {
					(<HTMLInputElement><any>document.getElementById("giftButton")).style.display = "none";
				}
				if (this.hasDatePickerBit == 0) {
					(<HTMLInputElement><any>document.getElementById("datePickClass")).style.display = "none";
				}
				//orderconf flag check
				if (this.orderConfValue == 1) {
					(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "none";
					(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "block";
					(<HTMLInputElement><any>document.getElementById("datePickClass")).style.display = "none";
				}
				else if (this.orderConfValue == 0) {
					(<HTMLInputElement><any>document.getElementById("idConf")).style.display = "none";
				}
				if (this.instantBuyValue == 0) {
					(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
				}
				// console.log(res);
				this.productRating = this.dynamicData.rating;
				for (this.i = 0; this.i < 5; this.i++) {
					if (this.i < this.productRating) {
						this.filledStar[this.i] = this.i;
					} else {
						this.unFilledStar[this.j++] = this.i;
					}
				}

				// 632458

				this.pinToken = { pin: this.pincodeValue, prod_id: this.token, ship_id: this.shipLocId };
				// undeliverable location checker
				this.data.checkUndeliverable(this.pinToken).subscribe(
					data => {
						this.undelData = data;
						if (this.undelData.count == 1) {
							// alert("count="+this.undelData.count);
							$("#undeliverableModal").modal('hide');
							this.undel = "DELIVERABLE TO ";
							this.undelValue = 1;
						}
						else if (this.undelData.count == 0) {
							// alert("count="+this.undelData.count);
							$("#undeliverableModal").modal('show');
						}
					}
				);



				this.giftOpn = this.dynamicData.hasGift;
				if (this.giftOpn == 0) {
					(<HTMLInputElement><any>document.getElementById("giftButton")).style.display = "none";
				}
				else if (this.giftOpn == 1) {
					(<HTMLInputElement><any>document.getElementById("giftButton")).style.display = "block";
				}

				if (this.addMsgOrNot == 0) {
					(<HTMLInputElement><any>document.getElementById("msgShowOrNot")).style.display = "none";
				}
				else if (this.addMsgOrNot == 1) {
					(<HTMLInputElement><any>document.getElementById("msgShowOrNot")).style.display = "block";
				}

				if (this.addImageOrNot == 0) {
					(<HTMLInputElement><any>document.getElementById("imageShowOrNot")).style.display = "none";
				}
				else if (this.addImageOrNot == 1) {
					(<HTMLInputElement><any>document.getElementById("imageShowOrNot")).style.display = "block";
				}
				this.data.getPriceDate(this.tokenPriceGetter).subscribe(
					data => {
						// console.log(data);
						this.priceDate = data;
		
					},
					error => console.error(error)
				);


			},
			error => console.error(error)
		);

		//UPLOAD IMAGE
		// for(var imageCU:any=0;imageCU<this.uploadImageCount;imageCU++){
		this.imageUploaded0 = 0;
		this.imageUploaded1 = 0;
		this.imageUploaded2 = 0;
		this.imageUploaded3 = 0;
		this.imageUploaded4 = 0;
		this.imageUploaded5 = 0;
		this.imageUploaded6 = 0;
		this.imageUploaded7 = 0;
		this.imageUploaded8 = 0;
		this.imageUploaded9 = 0;
		this.imageU0 = 0;
		this.imageU1 = 0;
		this.imageU2 = 0;
		this.imageU3 = 0;
		this.imageU4 = 0;
		this.imageU5 = 0;
		this.imageU6 = 0;
		this.imageU7 = 0;
		this.imageU8 = 0;
		this.imageU9 = 0;
		this.imageUploaded = 0;

		document.getElementById('productImage').addEventListener('change', this.onClick.bind(this));

		this.imageUploadedRfq0 = 0;
		this.imageUploadedRfq1 = 0;
		this.imageUploadedRfq2 = 0;
		this.imageRU0 = 0;
		this.imageRU1 = 0;
		this.imageRU2 = 0;
		this.imageUploadedRfq =0;
		// imageRfqValue = document.getElementById('shopRfq').addEventListener('change', this.onRfqClick.bind(this));
		document.getElementById('shopRfq').addEventListener('change', this.onRfqClick.bind(this));
		// console.log(this.imageValue);
		// }
		this.data.getFollowInfo(this.tokenObj).subscribe(
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
		this.data.getVariantInfo(this.token).subscribe(
			data => {
				// console.log(data);
				this.variantData = data;
			},
			error => console.error(error)
		);


		//product image count
		this.data.readFileProdImage(this.token).subscribe(
			data => {
				this.prodImageCount = data;
				var iCount = this.prodImageCount.countPI;
				for (var x: any = 0; x < iCount; x++) {
					this.imagesCount[x] = x;
				}
				// console.log(this.imagesCount);
			},
			error => console.error(error)
		);


	
		this.data.getVariantCount(this.token).subscribe(
			data => {
				// console.log(data);
				this.variantCount = data;
				// console.log(Object.keys(this.variantCount).length);
				this.varTypes = Object.keys(this.variantCount).length;
			},
			error => console.error(error)
		);
		this.data.getVariantNumber(this.token).subscribe(
			data => {
				// console.log(data);
				this.variantNum = data;
			},
			error => console.error(error)
		);
		this.data.getSellerDetails(this.token).subscribe(
			data => {
				// console.log(data);
				this.sellerDetails = data;
				this.priv = this.sellerDetails.privateAccount;
				this.shopIdentity = this.sellerDetails.shopId;
				this.sellerIdentity = this.sellerDetails.sellerId;
				// console.log(this.sellerDetails.sellerId);
				// console.log(this.sellerDetails.shopId);
				if (this.priv == 0) {
					this.selName = "" + this.sellerDetails.sellerName;

				}
				else {
					this.selName = "";
				}
			},
			error => console.error(error)
		);



		this.data.getDiscountLabel(this.token).subscribe(
			data => {
				// console.log(this.token);
				this.discountLabel = data;
			},
			error => console.error(error)
		);
		this.data.getRatingReview(this.token).subscribe(
			data => {
				this.ratingReview = data;

				this.ratingCount = Object.keys(this.ratingReview).length;

				// console.log(x);
				for (var y = 0; y < this.ratingCount; y++) {
					this.revIdValue[y] = this.ratingReview[y].reviewId;
				}
				// var y = Object.keys(this.ratingReview).length;
				// console.log(y);

				// for (var t = 0; t < y; t++) {
				// 	console.log(this.ratingReview[t].rating);
				// 	this.reviewStar[t] = this.ratingReview[t].rating;
				// 	console.log(this.reviewStar[t]);
				// 	console.log(t);
				// 	this.j = 0;
				// 	for (this.i = 0; this.i < 5; this.i++) {
				// 		if (this.i < this.reviewStar[t]) {
				// 			this.filledStarRat[this.i] = this.i;
				// 		} else {
				// 			this.unFilledStarRat[this.j++] = this.i;
				// 		}
				// 	}
				// 	this.filledStarRatArray[t] = this.filledStarRat;
				// 	this.unFilledStarRatArray[t] = this.unFilledStarRat;
				// 	console.log(this.filledStarRatArray[t]);
				// 	console.log(this.unFilledStarRatArray[t]);
				// }


			},
			error => console.error(error)
		);
		this.data.getDateDiff(this.token).subscribe(
			data => {
				this.reviewDateDiff = data;
			},
			error => console.error(error)
		);
		this.data.getFaqProduct(this.tokenFaq).subscribe(
			data => {
				this.faqProduct = data;
				this.faqCount = this.faqProduct[0].response;
				if (this.faqCount == 0) {
					(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";
				}
				else if (this.faqCount == 1) {
					(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "block";
				}
				else if (this.faqCount == -1) {
					// console.log(this.faqCount);
					(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";
					(<HTMLInputElement><any>document.getElementById("noFaqId")).style.display = "block";
					this.faqProduct="";
				}

			}
		);


		this.data.getLikesDislikes(this.tokenObj).subscribe(
			data => {
				// console.log(data);
				this.likeDislikes = data;
				var likeDisCount: number = Object.keys(this.likeDislikes).length;
				var x = 0;
				var q = 0;

				// console.log(this.ratingCount);
				while (q < this.ratingCount) {
					x = 0;
					while (x < likeDisCount) {
						if (this.revIdValue[q] == this.likeDislikes[x]['reviewId']) {
							var y: number = this.likeDislikes[x]['reviewId'];
							var z: number = this.likeDislikes[x]['likeDislike'];
							// console.log("x="+x+",q="+q+",y="+y+",z="+z);

							if (z == 1) {
								var ele = (<HTMLImageElement><any>document.getElementById("likeImg_" + y));
								// console.log(ele.src);
								// console.log("likeImg_" + y);
								ele.src = "assets/icons/resources (IL)-23.png";
								// console.log(ele.src);
							}
							else if (z == 0) {
								var ele1 = (<HTMLImageElement><any>document.getElementById("dislikeImg_" + y));
								ele1.src = "assets/icons/resources (IL)-24.png";
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

		this.data.prodViewIncrement(this.token).subscribe();

		this.data.getRfqInputs(this.shopToken).subscribe(
			data => {
				this.rfqInput = data;

			}
		);

		this.data.getDirectPickupSellerDetails(this.shopToken).subscribe(
			data => {
				this.dPSeller = data;
			}
		);

		this.data.getRfqAddress(this.userId).subscribe(
			data => {
				this.rfqAddress = data;

			}
		);
		this.data.getMessageTitle(this.token).subscribe(
			data => {
				this.messageTitle = data;

			}
		);
		// this.data.sendMessage(this.token).subscribe();

		this.data.getProductRevRatings(this.token).subscribe(
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


		// this.showSlides(slideIndex);






	}

	//checkout formGroup
	displayFn(user?: User): string | undefined {
		return user ? user.name : undefined;
	}

	//checkout pop showformgrp
	showFormGrp() {
		document.getElementById('formGroup').style.display = "block";
	}
	//checkout showSavedAddr
	showSavedAddr() {
		document.getElementById('savedAddr').style.display = "block";
	}
	formSave() {
		this.submitted = true;
		if (this.checkoutForm.invalid) {
			// alert("Enter Details");
		}
		else {
			var contact_name = (<HTMLInputElement><any>document.getElementById("contactName-Form")).value;
			var addr1 = (<HTMLInputElement><any>document.getElementById("addr1-Form")).value;
			var addr2 = (<HTMLInputElement><any>document.getElementById("addr2-Form")).value;
			var country = (<HTMLInputElement><any>document.getElementById("country-Form")).value;
			var city = (<HTMLInputElement><any>document.getElementById("city-Form")).value;
			var district = (<HTMLInputElement><any>document.getElementById("District-Form")).value;
			var contact_email = (<HTMLInputElement><any>document.getElementById("contact-Email-Form")).value;
			var state = (<HTMLInputElement><any>document.getElementById("state-Form")).value;
			var pincode = (<HTMLInputElement><any>document.getElementById("pincode-Form")).value;
			var contact_number = (<HTMLInputElement><any>document.getElementById("contact-Number-Form")).value;

			this.formAddress = { contact_name: contact_name, addr1: addr1, addr2: addr2, country: country, city: city, district: district, contact_email: contact_email, state: state, pincode: pincode, contact_number: contact_number };

			this.data.getsaveNewAddress(this.formAddress, this.orderid).subscribe();
			// this.id = "2";
			this.data.getNewAddr(this.orderid).subscribe(
				data => {
					this.dynamicNewAddr = data;
					// console.log(this.dynamicNewAddr);
				},
				error => console.error(error)
			);
			document.getElementById('formGroup').style.display = "none";
		}
	}

	setCookie(cname, value) {
		this.cookieService.set(cname, value);
	}
	getCookie(cname) {
		return this.cookieService.get(cname);
	}

	//checkout giftoption
	giftoption() {
		// Cookie Section BEGN

		//setting cookies , remove on commit
		//get data from cookies
		var giftTitle = this.getCookie("giftTitle");
		var giftNote = this.getCookie("giftNote");
		var giftAdd = this.getCookie("giftAddress");

		var addre1 = giftTitle.split("!~!");
		var addre2 = giftNote.split("!~!");
		var addr3 = giftAdd.split("!~!");
		var addr4 = giftAdd.split("!~!");
		var addr5 = giftAdd.split("!~!");
		var addr6 = giftAdd.split("!~!");
		var addr7 = giftAdd.split("!~!");
		var addr8 = giftAdd.split("!~!");
		var addr9 = giftAdd.split("!~!");

		// document.getElementById("Gift-Note-Sect1").innerText = (giftTitle + "  " + giftNote  + "  "+ addr1[0] + " " + addr2[1] +" "+ addr3[2] + " " + addr4[3] +" "+ addr5[4] +" "+  addr6[5]+ " " + addr7[6]);

		document.getElementById("giftTitleId").innerText = (addre1[0]);
		document.getElementById("giftNoteId").innerText = (addre2[1]);
		document.getElementById("giftHouseNameId").innerText = (addr3[2]);
		document.getElementById("giftStreetAddrId").innerText = (addr4[3]);
		document.getElementById("giftCityId").innerText = (addr5[4]);
		document.getElementById("giftDistrictId").innerText = (addr6[5]);
		document.getElementById("giftStateId").innerText = (addr7[6]);
		document.getElementById("giftCountryId").innerText = (addr8[7]);
		document.getElementById("giftPincodeId").innerText = (addr9[8]);

		var giftOptionState = (<HTMLInputElement><any>document.getElementById("giftOption")).checked;
		// console.log(giftOptionState);


		if (giftOptionState) {
			// giftOptionCard = 1;
			document.getElementById('showGiftCard').style.display = "block";
		}
		else {
			document.getElementById('showGiftCard').style.display = "none";
		}
		// giftOptionCard = 0;


		var contact_name = (<HTMLInputElement><any>document.getElementById("contactName-Form")).value;
		var addr1 = (<HTMLInputElement><any>document.getElementById("giftHouseNameId")).value;
		var addr2 = (<HTMLInputElement><any>document.getElementById("giftStreetAddrId")).value;
		var country = (<HTMLInputElement><any>document.getElementById("giftCountryId")).value;
		var city = (<HTMLInputElement><any>document.getElementById("giftCityId")).value;
		var district = (<HTMLInputElement><any>document.getElementById("giftDistrictId")).value;
		var contact_email = (<HTMLInputElement><any>document.getElementById("contact-Email-Form")).value;
		var state = (<HTMLInputElement><any>document.getElementById("giftStateId")).value;
		var pincode = (<HTMLInputElement><any>document.getElementById("giftPincodeId")).value;
		var contact_number = (<HTMLInputElement><any>document.getElementById("contact-Number-Form")).value;

		this.formAddress = { contact_name: contact_name, addr1: addr1, addr2: addr2, country: country, city: city, district: district, contact_email: contact_email, state: state, pincode: pincode, contact_number: contact_number };

		// this.data.saveAddressGiftNote(this.formAddress, this.orderid, this.userId ).subscribe();
		// this.id = "2";
		this.data.getNewAddr(this.orderid).subscribe(
			data => {
				this.dynamicNewAddr = data;
				// console.log(this.dynamicNewAddr);
			},
			error => console.error(error)
		);
	}

	// address change
	btnDeliverAddress1() {
		document.getElementById('Main-Address').innerHTML = document.getElementById('Deliver-Addr1').innerHTML;
	}

	btnDeliverAddress2() {
		document.getElementById('Main-Address').innerHTML = document.getElementById('Deliver-Addr2').innerHTML;
	}


	rfqDropdown() {
		document.getElementById("rfqDropdown").classList.toggle("show");
	}
	// checkout final
	checkout() {
		var shippingtType;
		// this.shipping_id = (<HTMLInputElement>document.querySelector('DeliveryOption')).value;
		if ((<HTMLInputElement><any>document.getElementById("shipping")).checked) {
			shippingtType = "1";
		}
		else if ((<HTMLInputElement><any>document.getElementById("homedelivery")).checked) {
			shippingtType = "2";
		}
		else if ((<HTMLInputElement><any>document.getElementById("pickup")).checked) {
			shippingtType = "3";
		}
		else {
			alert("Select a delivery type");
			return;
		}
		// this.data.getcheckoutFinal(this.formAddress).subscribe();

		// this.id = "3";
		this.data.getcheckoutFinal(this.getCookie("userId"), shippingtType).subscribe();
		var options = {
			"key": "rzp_test_dveDexCQKoGszl",
			"amount": Math.round(this.TotalPrice * 100), // 2000 paise = INR 20
			"currency": "INR",
			"name": "ScoopMyArt",
			"description": this.dynamicDataProName.name,
			"image": "favicon.ico", "handler": response => {
				alert("Booking successful. Thank you!");
				console.log(response);
				var dataTrans = {txnid:response.razorpay_payment_id,orderId: this.orderid, prodname:this.dynamicData['name']};
				this.data.updateTransaction(dataTrans).subscribe(data=>{

				})
			},
			"prefill": {
				"name": this.Name,
				"email": this.email,
				"contact": this.phone1,
			},
			"notes": {},
			"theme": {
				"color": "#133E4B"
			},
			"modal": {
				"ondismiss": function () { }
			}
		};
		// console.log(Math.round(this.TotalPrice));
		// console.log(options);
		var rzp1 = new Razorpay(options); rzp1.open();
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


	count_inc() {
		this.priceChangeGetter();
		if (this.counter < this.maxOQuant) {
			this.counter++;
			var xy: HTMLElement = document.getElementById("count") as HTMLElement;
			// this.fgOrderDetails.controls['quantity'].setValue(this.counter);
		}
	}
	count_dec() {
		this.priceChangeGetter();
		if (this.counter > this.minOQuant) {
			this.counter--;
			var xy = document.getElementById("count") as HTMLElement;
			// this.fgOrderDetails.controls['quantity'].setValue(this.counter);
		}

	}
	myFunction(imgs) {
		var ele = document.getElementById(imgs) as HTMLImageElement;
		this.largeSrc = ele.src;
	}
	openModal() {
		document.getElementById("myModal").style.display = "block";
	}
	closeModal() {
		document.getElementById("myModal").style.display = "none";
	}
	plusSlides(n) {
		this.showSlides(slideIndex += n);
	}
	currentSlide(n) {
		this.showSlides(slideIndex = n);
	}


	faqMore() {
		this.tokenFaq = { prod_id: this.token, number_faq: 1 };
		this.data.getFaqProduct(this.tokenFaq).subscribe(
			data => {
				this.faqProduct = data;
			}
		);
		(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";

	}
	filterFaq() {
		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("searchFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("searchFaq")).value.length;
		if (faqSearchInputLength >= 3) {
			this.tokenFaq = { prod_id: this.token, number_faq: 1, filterFaq: faqSearchInput };
			this.data.getFaqProductFiltered(this.tokenFaq).subscribe(
				data => {
					this.faqProduct = data;
				}
			);
			(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";
		}
		else if(faqSearchInputLength <3){
			this.tokenFaq = { prod_id: this.token, number_faq: 0 };
			this.data.getFaqProduct(this.tokenFaq).subscribe(
				data => {
					this.faqProduct = data;
				}
			);
		}
	}
	submitFaq() {
		alert("Question submitted");

		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("submitFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("submitFaq")).value.length;
		if (faqSearchInputLength >= 5) {
			this.tokenFaqSubmit = { prod_id: this.token, submitFaq: faqSearchInput };
			this.data.getFaqProductSubmit(this.tokenFaqSubmit).subscribe();
		}
		(<HTMLInputElement><any>document.getElementById("submitFaq")).value = "";
	}



	showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
		var dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
		if (n > slides.length) { slideIndex = 1 }
		if (n < 1) { slideIndex = slides.length }
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	}
	readMore() {
		// var res = str.split(" ");
		document.getElementById("lDesc").style.overflow = "visible";
		document.getElementById("seeMore").style.display = "none";
	}
	followShop() {
		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1) {
			this.folResult = true;
			this.data.getFollowShop(this.tokenObj).subscribe();
		}
		else {
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');

		}

	}
	unfollowShop() {
		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1) {
			this.folResult = false;
			this.data.getUnfollowShop(this.tokenObj).subscribe();
		}
		else {
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');

		}
	}
	report(revId: any) {
		// console.log(revId);
		// console.log(typeof (revId));
		this.data.sendReport(this.tokenObj, revId).subscribe();

	}
	likeCount(revId: any) {
		// console.log(revId);
		// console.log(typeof(revId));

		var x = (<HTMLImageElement><any>document.getElementById("likeImg_" + revId)).src;
		var y = (<HTMLImageElement><any>document.getElementById("dislikeImg_" + revId)).src;

		this.data.likeRev(this.tokenObj, revId).subscribe();

		var ele = document.getElementById("likeImg_" + revId) as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-23.png";
		var ele1 = document.getElementById("dislikeImg_" + revId) as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-11.png";



		var resx = x.split("/");
		var resXVal = resx[5];

		var resy = y.split("/");
		var resYVal = resy[5];

		console.log(resXVal + " asdsadgfa " + resYVal);
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

		this.data.dislikeRev(this.tokenObj, revId).subscribe();
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

	reqDate() {
		var x = (<HTMLInputElement><any>document.getElementById("datePickerId")).value.length;
		// console.log(x);
		if (x != 0) {
			var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
			if(desiredDate<this.todayD){
				console.log("false");
			}
			if (this.activeStatusProd == "inactive") {
				(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "block";
			} else {
				this.datePickerDefault = 0;
				(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "block";
				alert("Delivery on this date requires seller confirmation before buying!");
			}
		}
		else {
			if (this.activeStatusProd == "inactive") {
				(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "block";
			} else {
				this.datePickerDefault = 1;
				(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "block";
				(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "none";
				alert("Request Order changed to Buy now");
			}
		}
	}
	// Cookie Section BEGN
	deleteCookie(cname) {
		this.cookieService.delete(cname);
	}
	gift() {
		var title = (<HTMLInputElement><any>document.getElementById("fText")).value;
		var note = (<HTMLInputElement><any>document.getElementById("fNote")).value;
		// var address = (<HTMLInputElement><any>document.getElementById("fAddress")).value;
		var shopNameId = (<HTMLInputElement><any>document.getElementById('shopNameId')).value;
		var addr2ShopId = (<HTMLInputElement><any>document.getElementById('addr2ShopId')).value;
		var cityShopId = (<HTMLInputElement><any>document.getElementById('cityShopId')).value;
		var districtShopId = (<HTMLInputElement><any>document.getElementById('districtShopId')).value;
		var stateShopId = (<HTMLInputElement><any>document.getElementById('stateShopId')).value;
		var countryShopId = (<HTMLInputElement><any>document.getElementById('countryShopId')).value;
		var pincodeShopId = (<HTMLInputElement><any>document.getElementById('pincodeShopId')).value;
		var address = shopNameId + "!~!" + addr2ShopId + "!~!" + cityShopId + "!~!" + districtShopId + "!~!" + stateShopId + "!~!" + countryShopId + "!~!" + pincodeShopId
		this.giftEnable = 1;
		this.titleGift = title;
		this.addressGift = address;
		this.noteGift = note;


		// console.log(title);
		// console.log(note);
		// console.log(address);
		this.setCookie("giftTitle", title);
		this.setCookie("giftNote", note);
		this.setCookie("giftAddress", address);
		// console.log(this.cookieService.get("giftTitle")+"cookie");
		// console.log(this.cookieService.get("giftNote")+"cookie");
		// console.log(this.cookieService.get("giftAddress")+"cookie");

		var giftTitle = this.getCookie("giftTitle");
		var giftNote = this.getCookie("giftNote");
		var giftAdd = this.getCookie("giftAddress");

		var addr1 = giftTitle.split("!~!");
		var addr2 = giftNote.split("!~!");
		var addr3 = giftAdd.split("!~!");
		var addr4 = giftAdd.split("!~!");
		var addr5 = giftAdd.split("!~!");
		var addr6 = giftAdd.split("!~!");
		var addr7 = giftAdd.split("!~!");
		var addr8 = giftAdd.split("!~!");
		var addr9 = giftAdd.split("!~!");

		(<HTMLInputElement><any>document.getElementById('giftTitleId')).value = addr1[0];
		(<HTMLInputElement><any>document.getElementById('giftNoteId')).value = addr2[0];
		(<HTMLInputElement><any>document.getElementById('giftHouseNameId')).value = addr3[0];
		(<HTMLInputElement><any>document.getElementById('giftStreetAddrId')).value = addr4[1];
		(<HTMLInputElement><any>document.getElementById('giftCityId')).value = addr5[2];
		(<HTMLInputElement><any>document.getElementById('giftDistrictId')).value = addr6[3];
		(<HTMLInputElement><any>document.getElementById('giftStateId')).value = addr7[4];
		(<HTMLInputElement><any>document.getElementById('giftCountryId')).value = addr8[5];
		(<HTMLInputElement><any>document.getElementById('giftPincodeId')).value = addr9[6];


		// document.getElementById("giftTitleId").innerText = (addr1[0]);
		// document.getElementById("giftNoteId").innerText = (addr2[1]);
		// document.getElementById("giftHouseNameId").innerText = (addr3[2]);
		// document.getElementById("giftStreetAddrId").innerText = (addr4[3]);
		// document.getElementById("giftCityId").innerText = (addr5[4]);
		// document.getElementById("giftStateId").innerText = (addr6[5]);
		// document.getElementById("giftCountryId").innerText = (addr7[6]);
		// document.getElementById("giftPincodeId").innerText = (addr8[7]);

		// document.getElementById("Gift-Note-Sect1").innerText = (giftTitle + "  " + giftNote  + "  "+ addr1[0] + " " + addr2[1] +" "+ addr3[2] + " " + addr4[3] +" "+ addr5[4] +" "+  addr6[5]+ " " + addr7[6]);
		(<HTMLInputElement><any>document.getElementById("giftOption")).checked = true;
		document.getElementById('showGiftCard').style.display = "block";

	}


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

	rfqSubmit() {
		// alert("loaded");
		this.rfqEnabled = 1;
		var shopName = (<HTMLInputElement><any>document.getElementById("rfqShop")).value;
		var shopLocation = (<HTMLInputElement><any>document.getElementById("rfqLocations")).value;
		var note = (<HTMLInputElement><any>document.getElementById("rfqNote")).value;
		var productRef = this.prod;
		// var image = imageRfqValue;
		var image0 = imageRfqValue0;
		var image1 = imageRfqValue1;
		var image2 = imageRfqValue2;
		// var image=0;
		console.log(this.sellerDetails.sellerId);
		console.log(this.sellerDetails.shopId);
		this.tokenPrice = {  imageRUCount: imageRUCount,image0: image0, image1: image1, image2: image2,seller_identity: this.sellerDetails.sellerId, imageRU0: this.imageRU0, imageRU1: this.imageRU1, imageRU2: this.imageRU2, shop_id: this.sellerDetails.shopId,  prod_id: this.token, user_id: this.userId, imageUploadedRfq: this.imageUploadedRfq, shop_name: shopName, shop_location: shopLocation, note: note, product_ref: productRef };
		// image: image,
		this.data.sendRfq(this.tokenPrice).subscribe();
		$("#rfqPopup").modal('hide');
	}


	undeliverable() {
		var pincodeU = (<HTMLInputElement><any>document.getElementById("undPincode")).checked;
		var categoryU = (<HTMLInputElement><any>document.getElementById("undCategory")).checked;
		var continueU = (<HTMLInputElement><any>document.getElementById("undContinue")).checked;
		if (pincodeU == true) {

		}
		if (categoryU == true) {
			// var self = this;
			// self.router.navigate(['/categorylisting']);
			$("#undeliverableModal").modal('hide');
			this.rout.navigate(['/category'], { queryParams: { cat_id: this.dynamicData.categoryId } });
			// [routerLink]="['/category']" [queryParams]="{shop_id:token}"
			// this.ngZone.run(() => this.router.navigateByUrl('/categorylisting'));
		}
		if (continueU == true || this.undelValue == 1) {
			$("#undeliverableModal").modal('hide');
		}
	}
	addTagProduct(x: any) {
		var y = this.defRfqTag;
		var z = this.defRfqTag;
		var flag = 1;
		while (z >= 0) {
			if (x == this.prod[z]) {
				flag = 0;
				// console.log(z);
			}
			z--;
		}
		if (flag == 1) {
			this.prod[y++] = x;
			this.defRfqTag = y;
		}

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
		// console.log(removed);
		console.log(this.prod);
		this.defRfqTag = this.prod.length;


	}


	onClick(event) {
		if (this.imageUploaded8 == 1) {
			this.imageUploaded9 = 1;
			this.imageUploaded8 = 0;
			this.imageUploaded7 = 0;
			this.imageUploaded6 = 0;
			this.imageUploaded5 = 0;
			this.imageUploaded4 = 0;
			this.imageUploaded3 = 0;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU9 = 1;
		}
		if (this.imageUploaded7 == 1) {
			this.imageUploaded8 = 1;
			this.imageUploaded7 = 0;
			this.imageUploaded6 = 0;
			this.imageUploaded5 = 0;
			this.imageUploaded4 = 0;
			this.imageUploaded3 = 0;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU8 = 1;
		}
		if (this.imageUploaded6 == 1) {
			this.imageUploaded7 = 1;
			this.imageUploaded6 = 0;
			this.imageUploaded5 = 0;
			this.imageUploaded4 = 0;
			this.imageUploaded3 = 0;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU7 = 1;
		}
		if (this.imageUploaded5 == 1) {
			this.imageUploaded6 = 1;
			this.imageUploaded5 = 0;
			this.imageUploaded4 = 0;
			this.imageUploaded3 = 0;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU6 = 1;
		}
		if (this.imageUploaded4 == 1) {
			this.imageUploaded5 = 1;
			this.imageUploaded4 = 0;
			this.imageUploaded3 = 0;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU5 = 1;
		}
		if (this.imageUploaded3 == 1) {
			this.imageUploaded4 = 1;
			this.imageUploaded3 = 0;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU4 = 1;
		}
		if (this.imageUploaded2 == 1) {
			this.imageUploaded3 = 1;
			this.imageUploaded2 = 0;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU3 = 1;
		}
		if (this.imageUploaded1 == 1) {
			this.imageUploaded2 = 1;
			this.imageUploaded1 = 0;
			this.imageUploaded0 = 0;
			this.imageU2 = 1;
		}
		if (this.imageUploaded0 == 1) {
			this.imageUploaded1 = 1;
			this.imageUploaded0 = 0;
			this.imageU1 = 1;
		}
		this.imageUploaded0 = 1;
		this.imageUploaded = 1;
		this.imageU0 = 1;

		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			// imageValue = text;
			// this.imageVAL0 =text;
			// console.log(imageValue);
			if (this.imageUploaded9 == 1) {
				imageValue9 = text;
				this.imageVAL9 = text;
				imageUCount = 10;
				// imageU9 = 1;
			}
			else if (this.imageUploaded8 == 1) {
				imageValue8 = text;
				this.imageVAL8 = text;
				imageUCount = 9;
				// imageU8 = 1;
			}
			else if (this.imageUploaded7 == 1) {
				imageValue7 = text;
				this.imageVAL7 = text;
				imageUCount = 8;
				// imageU7 = 1;
			}
			else if (this.imageUploaded6 == 1) {
				imageValue6 = text;
				this.imageVAL6 = text;
				imageUCount = 7;
				// imageU6 = 1;
			}
			else if (this.imageUploaded5 == 1) {
				imageValue5 = text;
				this.imageVAL5 = text;
				imageUCount = 6;
				// imageU5 = 1;
			}
			else if (this.imageUploaded4 == 1) {
				imageValue4 = text;
				this.imageVAL4 = text;
				imageUCount = 5;
				// imageU4 = 1;
			}
			else if (this.imageUploaded3 == 1) {
				imageValue3 = text;
				this.imageVAL3 = text;
				imageUCount = 4;
				// imageU3 = 1;
			}
			else if (this.imageUploaded2 == 1) {
				imageValue2 = text;
				this.imageVAL2 = text;
				imageUCount = 3;
				// imageU2 = 1;
			}
			else if (this.imageUploaded1 == 1) {
				imageValue1 = text;
				this.imageVAL1 = text;
				imageUCount = 2;
				// imageU1 = 1;
			}
			else if (this.imageUploaded0 == 1) {
				imageValue0 = text;
				this.imageVAL0 = text;
				imageUCount = 1;
				// imageU0 = 1;
			}


		};
		// this.imageValue = reader.readAsDataURL(event.target.files[0]);
		// 		setTimeout(function(){ 
		// // 			console.log("xyz" + imageValue);
		// 		}, 3000);


	}
	pickupchecker() {
		$("#pickupModal").modal('hide');
	}
	pickupDetails() {
		// this.flag=1;
		$("#pickupModal").modal('show');
	};
	submitPrice(x: any) {
		this.pincodeValue = parseInt(this.getCookie("userPin"));
		// var pickupCheck = (<HTMLInputElement><any>document.getElementById('pU')).checked;
		// this.flag=1;
		// if (pickupCheck == true) {
		// 	this.flag=0;
		// 	$("#pickupModal").modal('show');
		// 	// $("#buyNowPopup").modal('hide');
		// 	setTimeout(function(){ 
		// 		// this.flag=1;
		// 		// alert(this.flag); 
		// 	}, 3000);
		// }

		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1 && this.undelValue == 1) {
			if (x == 'buyNow') {
				var msgCount: any = this.Object.keys(this.messageTitle).length;
				// console.log(msgCount);
				var msg: any = [];
				for (var i: any = 0; i < msgCount; i++) {
					msg[i] = (<HTMLInputElement><any>document.getElementById("productMessage_" + i)).value;
					// console.log(msg[i]);
				}
				var z: any = [];
				z = msg;
				// console.log(z);
				// var message = (<HTMLInputElement><any>document.getElementById("productMessage")).value;
				var message = z;

				var productVariantValue: any =[];
				console.log(this.varTypes);
				var varVal=0;
				var varCount =0;
				var res :any = [];
				var val :any = [] ;
				while(varVal<this.varTypes){
					res = (<HTMLInputElement><any>document.getElementById(varVal+"_variantValue")).value;
					val =  res.split(",");
					productVariantValue[varVal] =val[0];
					varCount = varVal;
					varVal++;
					// console.log(productVariantValue+"....................");
				}
				this.varName = productVariantValue;

				console.log(productVariantValue)

				var productQuantity = (<HTMLInputElement><any>document.getElementById('productQuantity')).value;
				// 			var imageUploaded = (<HTMLInputElement><any>document.getElementById('productImage')).value;
				var desiredDate = "none";
				var ship = (<HTMLInputElement><any>document.getElementById('sh')).checked;
				var cod = (<HTMLInputElement><any>document.getElementById('hD')).checked;
				var pickup = (<HTMLInputElement><any>document.getElementById('pU')).checked;
				var pin = parseInt(this.getCookie("userPin"));
				// console.log("pin"+pin);
				// console.log("pinV"+this.pincodeValue);
				// var res = productVariant.split(" ");
				var image0 = imageValue0;
				var image1 = imageValue1;
				var image2 = imageValue2;
				var image3 = imageValue3;
				var image4 = imageValue4;
				var image5 = imageValue5;
				var image6 = imageValue6;
				var image7 = imageValue7;
				var image8 = imageValue8;
				var image9 = imageValue9;

				// console.log(image);
				// alert("working");



				if (ship == true) {
					var deliveryOption = "shipping";
				}
				else if (cod == true) {
					var deliveryOption = "hd";
				}
				else if (pickup == true) {
					var deliveryOption = "pickup";
				}
				// shop_id: this.shopIdentity
				this.tokenPrice = { pin: pin, image0: image0, image1: image1, image2: image2, image3: image3, image4: image4, image5: image5, image6: image6, image7: image7, image8: image8, image9: image9, imageU0: this.imageU0, imageU1: this.imageU1, imageU2: this.imageU2, imageU3: this.imageU3, imageU4: this.imageU4, imageU5: this.imageU5, imageU6: this.imageU6, imageU7: this.imageU7, imageU8: this.imageU8, imageU9: this.imageU9, imageUCount: imageUCount, seller_identity: this.sellerIdentity, shop_id: this.dynamicData.shopId, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: this.imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };
				// image:image ,
				this.data.sendOrderDetails(this.tokenPrice).subscribe();

				//sonu

				this.data.getOrderDetailsCheckout(this.userId).subscribe(data => {
					this.orderid = data["orderid"];
					// console.log(this.orderid);
					this.data.getaddress(this.userId).subscribe(
						data => {
							this.dynamicDataAddress = data;
						},
						error => console.error(error)
					);
					this.data.getprodCheckout(this.token).subscribe(
						data => {
							this.dynamicDataProName = data;
						},
						error => console.error(error)
					);
					this.data.getuserCheckout(this.userId).subscribe(
						data => {
							this.dynamicDataUser = data;
							this.Name = this.dynamicDataUser.Name;
							this.email = this.dynamicDataUser.email;
							this.phone1 = this.dynamicDataUser.phone1;
						},
						error => console.error(error)
					);
					this.data.getCustomerOrderCheckout(this.orderid).subscribe(
						data => {
							this.dynamicDataCustomerOrder = data;
							this.TotalPrice = this.dynamicDataCustomerOrder.totalPrice;
						},
						error => console.error(error)
					);
					// console.log(this.variantValue);
					this.variantValue = { prodid: this.token, userid: this.userId }
					this.data.getvariantInfor(this.variantValue).subscribe(
						data => {
							this.dynamicDataVariant = data;
							// this.dynamicDataVariants = data;
						},
						error => console.error(error)
					);

					this.data.getAddressChange(this.userId).subscribe(
						data => {
							this.dynamicDataSecondAddress = data;
							// console.log(this.dynamicDataSecondAddress);
						},
						error => console.error(error)
					);

					this.data.getMsgTitleProCheckout(this.orderid).subscribe(
						data => {
							this.dynamicMsgTitle = data;
							// console.log(this.dynamicMsgTitle);
						},
						error => console.error(error)
					);

					this.data.readFileProdImage(this.token).subscribe(
						data => {
							this.prodImageCount = data;
							var iCount = this.prodImageCount.countPI;
							for (var x: any = 0; x < iCount; x++) {
								this.imagesCount[x] = x;
							}
							// console.log(this.imagesCount);
						},
						error => console.error(error)
					);
				});


			}
			else if (x == 'requestOrder') {

				document.getElementById('checkOutId').style.display = "none";
				document.getElementById('reqId').style.display = "block";


				var msgCount: any = this.Object.keys(this.messageTitle).length;
				// console.log(msgCount);
				var msg: any = [];
				for (var i: any = 0; i < msgCount; i++) {
					msg[i] = (<HTMLInputElement><any>document.getElementById("productMessage_" + i)).value;
					// console.log(msg[i]);
				}
				var z: any = [];
				// z=JSON.stringify(msg);
				z = msg;
				// console.log(z);
				// var message = (<HTMLInputElement><any>document.getElementById("productMessage")).value;
				var message = z;
				var productVariantValue: any =[];
				console.log(this.varTypes);
				var varVal=0;
				var varCount =0;
				var res :any = [];
				var val :any = [] ;
				while(varVal<this.varTypes){
					res = (<HTMLInputElement><any>document.getElementById(varVal+"_variantValue")).value;
					val =  res.split(",");
					productVariantValue[varVal] =val[0];
					varCount = varVal;
					varVal++;
					// console.log(productVariantValue+"....................");
				}
				this.varName = productVariantValue;

				console.log(productVariantValue)
				var productQuantity = (<HTMLInputElement><any>document.getElementById("productQuantity")).value;
				// 			var imageUploaded = (<HTMLInputElement><any>document.getElementById("productImage")).value;
				var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
				var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
				var cod = (<HTMLInputElement><any>document.getElementById("hD")).checked;
				var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;
				var image0 = imageValue0;
				var image1 = imageValue1;
				var image2 = imageValue2;
				var image3 = imageValue3;
				var image4 = imageValue4;
				var image5 = imageValue5;
				var image6 = imageValue6;
				var image7 = imageValue7;
				var image8 = imageValue8;
				var image9 = imageValue9;
				var pin = parseInt(this.getCookie("userPin"));
				//orderconf flag check
				if (this.orderConfValue == 1) {
					desiredDate = "orderConf";
				}
				// console.log("pin"+pin);
				// console.log("pinV"+this.pincodeValue);
				// var res = productVariant.split(" ");
				// this.varName = res[0];

				if (ship == true) {
					var deliveryOption = "shipping";
				}
				else if (cod == true) {
					var deliveryOption = "hd";
				}
				else if (pickup == true) {
					var deliveryOption = "pickup";
				}
				this.tokenPrice = { pin: pin, image0: image0, image1: image1, image2: image2, image3: image3, image4: image4, image5: image5, image6: image6, image7: image7, image8: image8, image9: image9, imageU0: this.imageU0, imageU1: this.imageU1, imageU2: this.imageU2, imageU3: this.imageU3, imageU4: this.imageU4, imageU5: this.imageU5, imageU6: this.imageU6, imageU7: this.imageU7, imageU8: this.imageU8, imageU9: this.imageU9, imageUCount: imageUCount, seller_identity: this.sellerIdentity, shop_id: this.shopIdentity, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: this.imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };

				this.data.sendOrderDetails(this.tokenPrice).subscribe();

				//sonu
				this.data.getOrderDetailsCheckout(this.userId).subscribe(data => {
					this.orderid = data["orderid"];
					// console.log(this.orderid);
					this.data.getaddress(this.userId).subscribe(
						data => {
							this.dynamicDataAddress = data;
						},
						error => console.error(error)
					);
					this.data.getprodCheckout(this.token).subscribe(
						data => {
							this.dynamicDataProName = data;
						},
						error => console.error(error)
					);
					this.data.getuserCheckout(this.userId).subscribe(
						data => {
							this.dynamicDataUser = data;
							this.Name = this.dynamicDataUser.Name;
							this.email = this.dynamicDataUser.email;
							this.phone1 = this.dynamicDataUser.phone1;
						},
						error => console.error(error)
					);
					this.data.getCustomerOrderCheckout(this.orderid).subscribe(
						data => {
							this.dynamicDataCustomerOrder = data;
							this.TotalPrice = this.dynamicDataCustomerOrder.totalPrice;
						},
						error => console.error(error)
					);
					// console.log(this.variantValue);
					this.variantValue = { prodid: this.token, userid: this.userId }
					this.data.getvariantInfor(this.variantValue).subscribe(
						data => {
							this.dynamicDataVariant = data;
							// this.dynamicDataVariants = data;
						},
						error => console.error(error)
					);

					this.data.getAddressChange(this.userId).subscribe(
						data => {
							this.dynamicDataSecondAddress = data;
							// console.log(this.dynamicDataSecondAddress);
						},
						error => console.error(error)
					);

					this.data.getMsgTitleProCheckout(this.orderid).subscribe(
						data => {
							this.dynamicMsgTitle = data;
							// console.log(this.dynamicMsgTitle);
						},
						error => console.error(error)
					);

					this.data.readFileProdImage(this.token).subscribe(
						data => {
							this.prodImageCount = data;
							var iCount = this.prodImageCount.countPI;
							for (var x: any = 0; x < iCount; x++) {
								this.imagesCount[x] = x;
							}
							// console.log(this.imagesCount);
						},
						error => console.error(error)
					);

				});

				//sonu 

			}
			$("#buyNowPopup").modal('show');
		}
		else if (this.undelValue == 0) {
			$("#undeliverableModal").modal('show');
		}
		else {
			$("#loginModal").modal('show');
		}
	}

	submitInstantBuy(x: any) {
		$("#loginModal").modal('hide');
		if (x == 'instantBuy') {
			alert("instantBuy");
			var msgCount: any = this.Object.keys(this.messageTitle).length;
			// console.log(msgCount);
			var msg: any = [];
			for (var i: any = 0; i < msgCount; i++) {
				msg[i] = (<HTMLInputElement><any>document.getElementById("productMessage_" + i)).value;
				// console.log(msg[i]);
			}
			var z: any = [];
			z = msg;
			// console.log(z);
			// var message = (<HTMLInputElement><any>document.getElementById("productMessage")).value;
			var message = z;
			// var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
			var productVariantValue: any =[];
			console.log(this.varTypes);
			var varVal=0;
			var varCount =0;
			var res :any = [];
			var val :any = [] ;
			while(varVal<this.varTypes){
				res = (<HTMLInputElement><any>document.getElementById(varVal+"_variantValue")).value;
				val =  res.split(",");
				productVariantValue[varVal] =val[0];
				varCount = varVal;
				varVal++;
				// console.log(productVariantValue+"....................");
			}
			this.varName = productVariantValue;

			console.log(productVariantValue)
			var productQuantity = (<HTMLInputElement><any>document.getElementById('productQuantity')).value;
			// 			var imageUploaded = (<HTMLInputElement><any>document.getElementById('productImage')).value;
			var desiredDate = "none";
			var ship = (<HTMLInputElement><any>document.getElementById('sh')).checked;
			var cod = (<HTMLInputElement><any>document.getElementById('hD')).checked;
			var pickup = (<HTMLInputElement><any>document.getElementById('pU')).checked;
			var pin = parseInt(this.getCookie("userPin"));
			// console.log("pin"+pin);
			// console.log("pinV"+this.pincodeValue);
			// var res = productVariant.split(" ");
			var image0 = imageValue0;
			var image1 = imageValue1;
			var image2 = imageValue2;
			var image3 = imageValue3;
			var image4 = imageValue4;
			var image5 = imageValue5;
			var image6 = imageValue6;
			var image7 = imageValue7;
			var image8 = imageValue8;
			var image9 = imageValue9;

			// console.log(image);
			// alert("working");

			// var res = productVariant.split(" ");
			// this.varName = res[0];

			if (ship == true) {
				var deliveryOption = "shipping";
			}
			else if (cod == true) {
				var deliveryOption = "hd";
			}
			else if (pickup == true) {
				var deliveryOption = "pickup";
			}
			// shop_id: this.shopIdentity
			this.tokenPrice = { pin: pin, image0: image0, image1: image1, image2: image2, image3: image3, image4: image4, image5: image5, image6: image6, image7: image7, image8: image8, image9: image9, imageU0: this.imageU0, imageU1: this.imageU1, imageU2: this.imageU2, imageU3: this.imageU3, imageU4: this.imageU4, imageU5: this.imageU5, imageU6: this.imageU6, imageU7: this.imageU7, imageU8: this.imageU8, imageU9: this.imageU9, imageUCount: imageUCount, seller_identity: this.sellerIdentity, shop_id: this.dynamicData.shopId, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: -1, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: this.imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };
			// image:image ,
			this.data.sendOrderDetails(this.tokenPrice).subscribe();

			//sonu
			console
			this.data.getOrderDetailsCheckout(this.userId).subscribe(data => {
				this.orderid = data["orderid"];
				// console.log(this.orderid);
				this.data.getaddress(this.userId).subscribe(
					data => {
						this.dynamicDataAddress = data;
					},
					error => console.error(error)
				);
				this.data.getprodCheckout(this.token).subscribe(
					data => {
						this.dynamicDataProName = data;
					},
					error => console.error(error)
				);
				this.data.getuserCheckout(this.userId).subscribe(
					data => {
						this.dynamicDataUser = data;
						this.Name = this.dynamicDataUser.Name;
						this.email = this.dynamicDataUser.email;
						this.phone1 = this.dynamicDataUser.phone1;
					},
					error => console.error(error)
				);
				this.data.getCustomerOrderCheckout(this.orderid).subscribe(
					data => {
						this.dynamicDataCustomerOrder = data;
						this.TotalPrice = this.dynamicDataCustomerOrder.totalPrice;
					},
					error => console.error(error)
				);
				// console.log(this.variantValue);
				this.variantValue = { prodid: this.token, userid: this.userId }
				this.data.getvariantInfor(this.variantValue).subscribe(
					data => {
						this.dynamicDataVariant = data;
						// this.dynamicDataVariants = data;
					},
					error => console.error(error)
				);

				this.data.getAddressChange(this.userId).subscribe(
					data => {
						this.dynamicDataSecondAddress = data;
						// console.log(this.dynamicDataSecondAddress);
					},
					error => console.error(error)
				);

				this.data.getMsgTitleProCheckout(this.orderid).subscribe(
					data => {
						this.dynamicMsgTitle = data;
						// console.log(this.dynamicMsgTitle);
					},
					error => console.error(error)
				);

				this.data.readFileProdImage(this.token).subscribe(
					data => {
						this.prodImageCount = data;
						var iCount = this.prodImageCount.countPI;
						for (var x: any = 0; x < iCount; x++) {
							this.imagesCount[x] = x;
						}
						// console.log(this.imagesCount);
					},
					error => console.error(error)
				);

			});


		}
		$("#buyNowPopup").modal('show');

	}

	applyRequest() {
		this.dateChoosen = (<HTMLInputElement><any>document.getElementById('reqDatePicker')).value;
		if (this.dateChoosen != "") {
			document.getElementById('checkOutId').style.display = "none";
			document.getElementById('reqId').style.display = "block";
		}
		else {
			alert('pick a date');
		}
		document.getElementById('ApplyTextMsgId').style.display = "block";
	}

	redirect(c: any) {
		if (c == 'login') {
			// this.rout.navigate(['/login']);
			$("#loginModal").modal('hide');
		}
		else if (c == 'signup') {
			// this.rout.navigate(['/signup']);
			$("#loginModal").modal('hide');
		}
	}

	reqDateNow() {

		alert("your request has been sent");
	}
	submitCart() {
		var userIdValue = parseInt(this.userId);

		if (userIdValue >= 1) {
			this.addToCartValue = "ADDED TO CART";
			(<HTMLInputElement><any>document.getElementById("addToCart")).disabled = true;
			(<HTMLInputElement><any>document.getElementById("addToCart")).style.cursor = "not-allowed";

			if (this.giftEnable == 0) {
				var pin = parseInt(this.getCookie("userPin"));

				var msgCount: any = this.Object.keys(this.messageTitle).length;
				// console.log(msgCount);
				var msg: any = [];
				for (var i: any = 0; i < msgCount; i++) {
					msg[i] = (<HTMLInputElement><any>document.getElementById("productMessage_" + i)).value;
					// console.log(msg[i]);
				}
				var z: any = [];
				// z=JSON.stringify(msg);
				z = msg;

				// console.log(z);
				// var message = (<HTMLInputElement><any>document.getElementById("productMessage")).value;
				var message = z;
				// var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
				var productVariantValue: any =[];
				console.log(this.varTypes);
				var varVal=0;
				var varCount =0;
				var res :any = [];
				var val :any = [] ;
				while(varVal<this.varTypes){
					res = (<HTMLInputElement><any>document.getElementById(varVal+"_variantValue")).value;
					val =  res.split(",");
					productVariantValue[varVal] =val[0];
					varCount = varVal;
					varVal++;
					// console.log(productVariantValue+"....................");
				}
				this.varName = productVariantValue;

				console.log(productVariantValue)
				var productQuantity = (<HTMLInputElement><any>document.getElementById("productQuantity")).value;
				var imageUploaded = (<HTMLInputElement><any>document.getElementById("productImage")).value;
				var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
				var cod = (<HTMLInputElement><any>document.getElementById("hD")).checked;
				var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;

				var x = (<HTMLInputElement><any>document.getElementById("datePickerId")).value.length;
				if (x == 0) {
					var desiredDate = "none";
				} else {
					var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
				}
				// var res = productVariant.split(" ");
				// this.varName = res[0];

				if (ship == true) {
					var deliveryOption = "shipping";
				}
				else if (cod == true) {
					var deliveryOption = "hd";
				}
				else if (pickup == true) {
					var deliveryOption = "pickup";
				}
				this.tokenPrice = {pin:pin, gift_title: null, gift_note: null, gift_address: null, seller_identity: this.sellerIdentity, shop_id: this.shopIdentity, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };

				this.data.sendCartDetails(this.tokenPrice).subscribe();
			}
			if (this.giftEnable == 1) {
				var pin = parseInt(this.getCookie("userPin"));

				var msgCount: any = this.Object.keys(this.messageTitle).length;
				// console.log(msgCount);
				var msg: any = [];
				for (var i: any = 0; i < msgCount; i++) {
					msg[i] = (<HTMLInputElement><any>document.getElementById("productMessage_" + i)).value;
					// console.log(msg[i]);
				}
				var z: any = [];
				// z=JSON.stringify(msg);
				z = msg;
				// console.log(z);
				// var message = (<HTMLInputElement><any>document.getElementById("productMessage")).value;
				var message = z;
				// var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
				var productVariantValue: any =[];
				console.log(this.varTypes);
				var varVal=0;
				var varCount =0;
				var res :any = [];
				var val :any = [] ;
				while(varVal<this.varTypes){
					res = (<HTMLInputElement><any>document.getElementById(varVal+"_variantValue")).value;
					val =  res.split(",");
					productVariantValue[varVal] =val[0];
					varCount = varVal;
					varVal++;
					// console.log(productVariantValue+"....................");
				}
				this.varName = productVariantValue;

				console.log(productVariantValue)
				var productQuantity = (<HTMLInputElement><any>document.getElementById("productQuantity")).value;
				var imageUploaded = (<HTMLInputElement><any>document.getElementById("productImage")).value;
				// var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
				var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
				var cod = (<HTMLInputElement><any>document.getElementById("hD")).checked;
				var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;

				var x = (<HTMLInputElement><any>document.getElementById("datePickerId")).value.length;
				if (x == 0) {
					var desiredDate = "none";
				} else {
					var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;	
				}
				// var res = productVariant.split(" ");
				// this.varName = res[0];

				if (ship == true) {
					var deliveryOption = "shipping";
				}
				else if (cod == true) {
					var deliveryOption = "hd";
				}
				else if (pickup == true) {
					var deliveryOption = "pickup";
				}
				this.tokenPrice = { pin:pin,gift_title: this.titleGift, gift_note: this.noteGift, gift_address: this.addressGift, seller_identity: this.sellerIdentity, shop_id: this.shopIdentity, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };

				this.data.sendCartDetails(this.tokenPrice).subscribe();
				// $(".btnAtcart").prop('disabled',true);
				// (<HTMLInputElement><any>document.getElementById("addToCartValue")).style.cursor= "not-allowed";
			}


		}
		else {
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');

		}




	}

	pincodeChange() {
		var y = (<HTMLInputElement><any>document.getElementById("undPincode")).value;

		this.setCookie("userPin", y);
		this.pincodeValue = parseInt(this.getCookie("userPin"));

		this.pinToken = { pin: this.pincodeValue, prod_id: this.token, ship_id: this.shipLocId };
		// undeliverable location checker
		this.data.checkUndeliverable(this.pinToken).subscribe(
			data => {
				this.undelData = data;
				if (this.undelData.count == 1) {
					// alert("count="+this.undelData.count);
					// $("#undeliverableModal").modal('hide');
					this.undel = "DELIVERABLE TO ";
					this.undelValue = 1;
					$("#undeliverableModal").modal('show');
				}
				else if (this.undelData.count == 0) {
					// alert("count="+this.undelData.count);
					this.undel = "UNDELIVERABLE TO ";
					this.undelValue = 0;
					$("#undeliverableModal").modal('show');
				}
			}
		);
		this.setCookie("userPin", this.pincodeValue);

	}
	priceChangeGetter() {

		var productQuantity = parseInt((<HTMLInputElement><any>document.getElementById("productQuantity")).value);
		var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
		var cod = (<HTMLInputElement><any>document.getElementById("hD")).checked;
		var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;
		// var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
		// var res = productVariant.split(" ");
		// this.varName = res[0];
		var productVariantValue: any =[];
		var productVariantPrice: any = 0;

		// console.log(this.varTypes);
		var varVal=0;
		var varCount =0;
		var res :any = [];
		var val :any = [] ;
		while(varVal<this.varTypes){
			res = (<HTMLInputElement><any>document.getElementById(varVal+"_variantValue")).value;
			val =  res.split(",");
			productVariantValue[varVal] =val[0];
			productVariantPrice = productVariantPrice + parseInt(val[1]);
			varCount = varVal;
			varVal++;
			// console.log(productVariantValue+"....................");
		}
		this.varName = productVariantValue;

		// console.log(productVariantValue)

		var pin = parseInt(this.getCookie("userPin"));
		if (ship == true) {
			var deliveryOption = "shipping";
		}
		else if (cod == true) {
			var deliveryOption = "hd";
		}
		else if (pickup == true) {
			var deliveryOption = "pickup";
		}
		this.tokenPriceGetter = { prod_id: this.token, prod_quantity: productQuantity, del_option: deliveryOption, pin: pin ,productVariant:this.varName}
		this.data.getPriceDate(this.tokenPriceGetter).subscribe(
			data => {
				// console.log(data);
				this.priceDate = data;

			},
			error => console.error(error)
		);
		// this.bPrice = parseInt(this.dynamicData.basePrice) * productQuantity;
		this.baseTotalPrice = ((parseInt(this.dynamicData.basePrice)+productVariantPrice) * productQuantity)+1;
	}
	sendRfq() {
		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1) {
			$("#rfqPopup").modal('show');
		}
		else {
			(<HTMLInputElement><any>document.getElementById("instantBuyId")).style.display = "none";
			$("#loginModal").modal('show');
		}

	}


	reqDatePickerDelivery() {
		var x = (<HTMLInputElement><any>document.getElementById("reqDatePicker")).value.length;
		// console.log(x);
		if (x != 0) {
			if (this.activeStatusCheckOut == "inactive") {
				(<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqId")).style.display = "block";
			} else {
				this.datePickerDefaultCheckOut = 0;
				(<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqId")).style.display = "block";
				// alert("Checkout changed to Request Order");
			}
		}
		else {
			if (this.activeStatusCheckOut == "inactive") {
				(<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqId")).style.display = "block";
			} else {
				this.datePickerDefaultCheckOut = 1;
				(<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "block";
				(<HTMLInputElement><any>document.getElementById("reqId")).style.display = "none";
				// alert("Request Order changed to Checkout);
			}
		}
		document.getElementById('ApplyTextMsgId').style.display = "none";
	}

}