
import { Component, OnInit, HostListener, ElementRef, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
var imageRfqValue: any = "";
var imageValue: any = "";
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
	shipping_id: any;
	router: any;
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
	reviewStar: any;
	maxOQuant: any;
	minOQuant: any;
	discountLabel: any = [];
	ratingReview: any = [];
	filledStarRat: any = [];
	unFilledStarRat: any = [];
	submitted = false;
	success = false;
	reviewDateDiff: any = "";
	faqProduct: any = [];
	ratingData: any = [];
	activeStatusProd: any;
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
	Name: any;
	email: any;
	phone1: any;
	imageUploaded: any;
	imageUploadedRfq: number = 0;
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
	constructor(private rout: Router, private data: DataService, private formBuilder: FormBuilder, private elementRef: ElementRef, private route: ActivatedRoute, private cookieService: CookieService) {
		this.checkoutForm = this.formBuilder.group({
			customername: ['', Validators.required],
			address: ['', Validators.required],
			email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
			contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

		})
	}
	dynamicData: any = "";
	dynamicDataAddress: any = "";
	imageSrc: string;
	Object = Object;
	tokenObj: object;
	formAddress: object;
	fgOrderDetails: FormGroup;
	tokenPrice: object;
	checkoutForm: FormGroup;
	dynamicdata: any = "";
	varient: any = "";
	stage1: boolean = false;
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
	// orderId: any = "";
	prodImageCount: any = [];
	imagesCount: any = [];
	pincodeValue: number;
	undelData: any = [];
	pinToken: object;
	shipLocId: number;
	quant: any;
	bPrice: number;

	ngOnInit() {
		// this.setCookie("userId", 2);
		this.userId = this.getCookie("userId");
		// this.setCookie("userPin",682501);
		this.pincodeValue = parseInt(this.getCookie("userPin"));

		(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "block";
		(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "none";
		this.datePickerDefault = 1;
		(<HTMLInputElement><any>document.getElementById("sh")).checked = true;
		(<HTMLInputElement><any>document.getElementById("showAvailable")).style.display = "none";




		this.route.queryParams.subscribe(params => {


			this.token = params['prod_id'];
			this.tokenFaq = { prod_id: this.token, number_faq: 0 };

			// console.log(this.token);
			this.tokenObj = { prod_id: this.token, user_id: this.userId };
			// console.log(this.tokenObj);
			// this.token = params['userId'];
			this.tokenPriceGetter = { prod_id: this.token, pin: this.pincodeValue, prod_quantity: 1, del_option: "shipping" };
		});




		this.data.getProductData(this.token).subscribe(
			data => {
				// console.log(data);
				this.dynamicData = data;
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

				// console.log(res);
				this.productRating = this.dynamicData.rating;
				for (this.i = 0; this.i < 5; this.i++) {
					if (this.i < this.productRating) {
						this.filledStar[this.i] = this.i;
					} else {
						this.unFilledStar[this.j++] = this.i;
					}
				}
				this.activeStatusProd = this.dynamicData.activeStatus;
				if (this.activeStatusProd == "inactive") {
					document.getElementById("buyNowId").style.display = "none";
					document.getElementById("reqNowId").style.display = "block";
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
			},
			error => console.error(error)
		);

		//UPLOAD IMAGE
		// for(var imageCU:any=0;imageCU<this.uploadImageCount;imageCU++){
		this.imageUploaded = 0;
		imageValue = document.getElementById('productImage').addEventListener('change', this.onClick.bind(this));

		this.imageUploadedRfq = 0;
		imageRfqValue = document.getElementById('shopRfq').addEventListener('change', this.onRfqClick.bind(this));

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


		this.data.getPriceDate(this.tokenPriceGetter).subscribe(
			data => {
				// console.log(data);
				this.priceDate = data;

			},
			error => console.error(error)
		);
		this.data.getVariantCount(this.token).subscribe(
			data => {
				// console.log(data);
				this.variantCount = data;
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
				this.reviewStar = this.ratingReview.rating;
				this.j = 0;
				for (this.i = 0; this.i < 5; this.i++) {
					if (this.i < this.reviewStar) {
						this.filledStarRat[this.i] = this.i;
					} else {
						this.unFilledStarRat[this.j++] = this.i;
					}
				}
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

			}
		);

		this.data.prodViewIncrement(this.token).subscribe();

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


		this.showSlides(slideIndex);






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

	}

	setCookie(cname, value) {
		this.cookieService.set(cname, value);
	}
	getCookie(cname) {
		return this.cookieService.get(cname);
	}

	//checkout giftoption
	giftoption() {
		document.getElementById('showGiftCard').style.display = "block";
		// this.cookieService.set("amal","mandan");
		// var aml = this.cookieService.get("amal");
		// console.log(aml);

		// Cookie Section BEGN

		//setting cookies , remove on commit


		//get data from cookies
		var giftTitle = this.getCookie("giftTitle");
		var giftNote = this.getCookie("giftNote");
		var giftAdd = this.getCookie("giftAddress");


		document.getElementById("Gift-Note-Sect1").innerText = (giftTitle + giftNote + giftAdd);



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

		if (this.counter < this.maxOQuant) {
			this.counter++;
			var xy: HTMLElement = document.getElementById("count") as HTMLElement;

			// this.fgOrderDetails.controls['quantity'].setValue(this.counter);
		}
	}
	count_dec() {

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
	}
	submitFaq() {
		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("submitFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("submitFaq")).value.length;
		if (faqSearchInputLength >= 5) {
			this.tokenFaqSubmit = { prod_id: this.token, submitFaq: faqSearchInput };
			this.data.getFaqProductSubmit(this.tokenFaqSubmit).subscribe();
		}
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
		this.folResult = true;
		this.data.getFollowShop(this.tokenObj).subscribe();
	}
	unfollowShop() {
		this.folResult = false;
		this.data.getUnfollowShop(this.tokenObj).subscribe();
	}
	report(revId: any) {
		// console.log(revId);
		// console.log(typeof (revId));
		this.data.sendReport(this.tokenObj, revId).subscribe();

	}
	likeCount(revId: any) {
		// console.log(revId);
		// console.log(typeof(revId));
		this.data.likeRev(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg") as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-23.png";
		var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-11.png";

	}
	dislikeCount(revId: any) {
		// console.log(revId);
		// console.log(typeof(revId));
		this.data.dislikeRev(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg") as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-10.png";
		var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-24.png";
	}

	reqDate() {
		var x = (<HTMLInputElement><any>document.getElementById("datePickerId")).value.length;
		// console.log(x);
		if (x != 0) {
			if (this.activeStatusProd == "inactive") {
				(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "block";
			} else {
				this.datePickerDefault = 0;
				(<HTMLInputElement><any>document.getElementById("buyNowId")).style.display = "none";
				(<HTMLInputElement><any>document.getElementById("reqNowId")).style.display = "block";
				alert("Buy now changed to Request Order");
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
		var address = (<HTMLInputElement><any>document.getElementById("fAddress")).value;
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
	}


	onRfqClick(event) {
		this.imageUploadedRfq = 1;
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

	rfqSubmit() {
		// alert("loaded");
		this.rfqEnabled = 1;
		var shopName = (<HTMLInputElement><any>document.getElementById("rfqShop")).value;
		var shopLocation = (<HTMLInputElement><any>document.getElementById("rfqLocations")).value;
		var note = (<HTMLInputElement><any>document.getElementById("rfqNote")).value;
		var productRef = this.prod;
		var image = imageRfqValue;
		// var image=0;
		console.log(this.sellerDetails.sellerId);
		console.log(this.sellerDetails.shopId);
		this.tokenPrice = { seller_identity: this.sellerDetails.sellerId, shop_id: this.sellerDetails.shopId, image: image, prod_id: this.token, user_id: this.userId, imageUploadedRfq: this.imageUploadedRfq, shop_name: shopName, shop_location: shopLocation, note: note, product_ref: productRef };

		this.data.sendRfq(this.tokenPrice).subscribe();

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
		this.prod[y++] = x;
		this.defRfqTag = y;
		console.log(this.prod);
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
		this.imageUploaded = 1;
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			imageValue = text;
			// 			console.log(imageValue);
		};
		// this.imageValue = reader.readAsDataURL(event.target.files[0]);
		// 		setTimeout(function(){ 
		// // 			console.log("xyz" + imageValue);
		// 		}, 3000);


	}

	submitPrice(x: any) {
		this.pincodeValue = parseInt(this.getCookie("userPin"));

		var userIdValue = parseInt(this.userId);
		if (userIdValue >= 1 && this.undelValue == 1) {
			$("#buyNowPopup").modal('show');
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
				var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
				var productQuantity = (<HTMLInputElement><any>document.getElementById('productQuantity')).value;
				// 			var imageUploaded = (<HTMLInputElement><any>document.getElementById('productImage')).value;
				var desiredDate = "none";
				var ship = (<HTMLInputElement><any>document.getElementById('sh')).checked;
				var cod = (<HTMLInputElement><any>document.getElementById('cOD')).checked;
				var pickup = (<HTMLInputElement><any>document.getElementById('pU')).checked;
				var pin = parseInt(this.getCookie("userPin"));
				// console.log("pin"+pin);
				// console.log("pinV"+this.pincodeValue);
				// var res = productVariant.split(" ");
				var image = imageValue;

				// console.log(image);
				// alert("working");

				var res = productVariant.split(" ");
				this.varName = res[0];

				if (ship == true) {
					var deliveryOption = "shipping";
				}
				else if (cod == true) {
					var deliveryOption = "cod";
				}
				else if (pickup == true) {
					var deliveryOption = "pickup";
				}
				// shop_id: this.shopIdentity
				this.tokenPrice = { pin: pin, image: image, seller_identity: this.sellerIdentity, shop_id: this.dynamicData.shopId, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: this.imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };
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
				});


			}
			else if (x == 'requestOrder') {
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
				var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
				var productQuantity = (<HTMLInputElement><any>document.getElementById("productQuantity")).value;
				// 			var imageUploaded = (<HTMLInputElement><any>document.getElementById("productImage")).value;
				var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
				var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
				var cod = (<HTMLInputElement><any>document.getElementById("cOD")).checked;
				var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;
				var image = imageValue;
				var pin = parseInt(this.getCookie("userPin"));
				// console.log("pin"+pin);
				// console.log("pinV"+this.pincodeValue);
				var res = productVariant.split(" ");
				this.varName = res[0];

				if (ship == true) {
					var deliveryOption = "shipping";
				}
				else if (cod == true) {
					var deliveryOption = "cod";
				}
				else if (pickup == true) {
					var deliveryOption = "pickup";
				}
				this.tokenPrice = { pin: pin, image: image, seller_identity: this.sellerIdentity, shop_id: this.shopIdentity, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: this.imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };

				this.data.sendOrderDetails(this.tokenPrice).subscribe();

				//sonu
				this.data.getOrderDetailsCheckout(this.data).subscribe(data => {
					this.orderid = data["orderid"];
					this.orderid = data;
					// console.log(this.orderid);
					this.data.getaddress(this.orderid).subscribe(
						data => {
							this.dynamicDataAddress = data;
						},
						error => console.error(error)
					);
					this.data.getprodCheckout(this.orderid).subscribe(
						data => {
							this.dynamicDataProName = data;
						},
						error => console.error(error)
					);
					this.data.getuserCheckout(this.orderid).subscribe(
						data => {
							this.dynamicDataUser = data;
							this.Name = this.dynamicDataUser.Name;
							this.email = this.dynamicDataUser.email;
							this.phone1 = this.dynamicDataUser.phone1;
						},
						error => console.error(error)
					);
					this.data.getvariantInfor(this.orderid).subscribe(
						data => {
							this.dynamicDataVariant = data;
							this.dynamicDataVariants = data;
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
					this.data.getAddressChange(this.orderid).subscribe(
						data => {
							this.dynamicDataSecondAddress = data;
							// console.log(this.dynamicDataSecondAddress);
						},
						error => console.error(error)
					);
					this.data.getNewAddr(this.orderid).subscribe(
						data => {
							this.dynamicNewAddr = data;
							// console.log(this.dynamicNewAddr);
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
					this.data.getPurchaseOrderDateReqOrderCheckout(this.orderid).subscribe(
						data => {
							this.dynamicDataPurchaseReqCheckout = data;
							// console.log(this.dynamicDataPurchaseReqCheckout);
						},
						error => console.error(error)
					);
				});
			}
		}
		else if (this.undelValue == 0) {
			$("#undeliverableModal").modal('show');
		}
		else {
			$("#loginModal").modal('show');
		}
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
		if (this.giftEnable == 0) {
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
			var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
			var productQuantity = (<HTMLInputElement><any>document.getElementById("productQuantity")).value;
			var imageUploaded = (<HTMLInputElement><any>document.getElementById("productImage")).value;
			var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
			var cod = (<HTMLInputElement><any>document.getElementById("cOD")).checked;
			var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;

			var x = (<HTMLInputElement><any>document.getElementById("datePickerId")).value.length;
			if (x == 0) {
				var desiredDate = "none";
			} else {
				var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
			}
			var res = productVariant.split(" ");
			this.varName = res[0];

			if (ship == true) {
				var deliveryOption = "shipping";
			}
			else if (cod == true) {
				var deliveryOption = "cod";
			}
			else if (pickup == true) {
				var deliveryOption = "pickup";
			}
			this.tokenPrice = { gift_title: null, gift_note: null, gift_address: null, seller_identity: this.sellerIdentity, shop_id: this.shopIdentity, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };

			this.data.sendCartDetails(this.tokenPrice).subscribe();
		}
		if (this.giftEnable == 1) {
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
			var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
			var productQuantity = (<HTMLInputElement><any>document.getElementById("productQuantity")).value;
			var imageUploaded = (<HTMLInputElement><any>document.getElementById("productImage")).value;
			// var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
			var ship = (<HTMLInputElement><any>document.getElementById("sh")).checked;
			var cod = (<HTMLInputElement><any>document.getElementById("cOD")).checked;
			var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;

			var x = (<HTMLInputElement><any>document.getElementById("datePickerId")).value.length;
			if (x == 0) {
				var desiredDate = "none";
			} else {
				var desiredDate = (<HTMLInputElement><any>document.getElementById("datePickerId")).value;
			}
			var res = productVariant.split(" ");
			this.varName = res[0];

			if (ship == true) {
				var deliveryOption = "shipping";
			}
			else if (cod == true) {
				var deliveryOption = "cod";
			}
			else if (pickup == true) {
				var deliveryOption = "pickup";
			}
			this.tokenPrice = { gift_title: this.titleGift, gift_note: this.noteGift, gift_address: this.addressGift, seller_identity: this.sellerIdentity, shop_id: this.shopIdentity, rfq_enabled: this.rfqEnabled, gift_enabled: this.giftEnable, prod_id: this.token, user_id: this.userId, message: message, productVariant: this.varName, productQuantity: productQuantity, imageUploaded: imageUploaded, desiredDate: desiredDate, deliveryOption: deliveryOption, msgCount: msgCount };

			this.data.sendCartDetails(this.tokenPrice).subscribe();
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
		var cod = (<HTMLInputElement><any>document.getElementById("cOD")).checked;
		var pickup = (<HTMLInputElement><any>document.getElementById("pU")).checked;
		var productVariant = (<HTMLInputElement><any>document.getElementById("variantValue")).value;
		var res = productVariant.split(" ");
		this.varName = res[0];


		var pin = parseInt(this.getCookie("userPin"));
		if (ship == true) {
			var deliveryOption = "shipping";
		}
		else if (cod == true) {
			var deliveryOption = "cod";
		}
		else if (pickup == true) {
			var deliveryOption = "pickup";
		}
		this.tokenPriceGetter = { prod_id: this.token, prod_quantity: productQuantity, del_option: deliveryOption, pin: pin }
		this.data.getPriceDate(this.tokenPriceGetter).subscribe(
			data => {
				// console.log(data);
				this.priceDate = data;

			},
			error => console.error(error)
		);
		this.bPrice = parseInt(this.dynamicData.basePrice) * productQuantity;
	}
}
