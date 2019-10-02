
import { Component, OnInit, HostListener, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

//checkout formGroup
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
	sellerDetails: any = "";
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
	dynamicDataProName: Object;
	prodId: any;
	dynamicDataUser: Object;
	dynamicDataVariant: Object;
	dynamicDataVariants: Object;
	dynamicDataCartDate: Object;
	userId: string;
	dynamicDatatotalPrice: Object;
	dynamicDataContactName: object;
	dynamicDataSecondAddress: any = "";
	dynamicNewAddr: any = "";
	dynamicDataCheckOutPrice: any = "";
	TotalPrice:any ; 


	constructor(private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute,private cookieService: CookieService) {
		this.checkoutForm = this.formBuilder.group({
			customername: ['', Validators.required],
			address: ['', Validators.required],
			email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
			contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

		})
		this.fgOrderDetails = this.formBuilder.group({
			quantity: [''],
			message: [''],
			uploadProductImage: [''],
			deliveryDatePicker: [''],
			shippingOption: ['']
		})
	}
	dynamicData: any = "";
	dynamicDataAddress: any = "";
	imageSrc: string;
	Object = Object;
	tokenObj: object;
	formAddress: object;
	fgOrderDetails: FormGroup;
	checkoutForm: FormGroup;
	dynamicdata: any = "";
	varient: any = "";
	stage1: boolean = false;
	largeSrc: any = "assets/images/Screenshot_20190712-201603.png";
	public counter: number;
	revId: number;


	//checkout formGroup
	myControl = new FormControl();
	options: User[] = [
		{ name: 'India' },
		{ name: 'USA' },
		{ name: 'Indonesia' }
	];
	filteredOptions: Observable<User[]>;
	id: any;
	ngOnInit() {

		// let pincode = "notAvailable";
		// if (pincode == "available") {
		// }
		// else {
		//   alert("Page is loaded");
		// }
		// function(void){
		// 	alert("page is loaded");
		// }
		this.route.queryParams.subscribe(params => {
			this.token = params['prod_id'];
			// console.log(this.token);
			this.tokenObj = { prod_id: this.token, user_id: "2" };
			console.log(this.tokenObj);
			// this.token = params['userId'];
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
				this.counter = this.dynamicData.minOrderQuant;
				// console.log(res);
				this.productRating = this.dynamicData.rating;
				for (this.i = 0; this.i < 5; this.i++) {
					if (this.i < this.productRating) {
						this.filledStar[this.i] = this.i;
					} else {
						this.unFilledStar[this.j++] = this.i;
					}
				}
			},
			error => console.error(error)
		);
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
		this.data.getFaqProduct(this.token).subscribe(
			data => {
				this.faqProduct = data;

			}
		)

		// this.data.getLikeDislikeInfo(this.tokenObj).subscribe(
		// 	data => {
		// 		console.log(data);
		// 		this.likeDislikeInfo = data;
		// 		var x = this.likeDislikeInfo.response;
		// 		console.log(x);
		// 		if (this.likeDislikeInfo.response == "successful") {
		// 			this.lik = true;
		// 			this.follow();
		// 		}
		// 		else if (this.likeDislikeInfo.response == "unsuccessful") {
		// 			this.folResult = false;
		// 		}
		// 	},
		// 	error => console.error(error)
		// );
		document.getElementById('bar-five').style.width = '90%';
		document.getElementById('bar-four').style.width = '75%';
		document.getElementById('bar-three').style.width = '40%';
		document.getElementById('bar-two').style.width = '60%';
		document.getElementById('bar-one').style.width = '10%';

		this.showSlides(slideIndex);

		//checkout popup
		this.id = "1";
		this.data.getaddress(this.id).subscribe(
			data => {
				this.dynamicDataAddress = data;
			},
			error => console.error(error)
		);
		this.prodId = "3";
		this.data.getprodCheckout(this.prodId).subscribe(
			data => {
				this.dynamicDataProName = data;
			},
			error => console.error(error)
		);
		this.id = "1";
		this.data.getuserCheckout(this.id).subscribe(
			data => {
				this.dynamicDataUser = data;
			},
			error => console.error(error)
		);
		this.id = "6";
		this.data.getvariantInfor(this.id).subscribe(
			data => {
				this.dynamicDataVariant = data;
				this.dynamicDataVariants = data;
			},
			error => console.error(error)
		);
		this.id = "5";
		this.data.getcartCheckout(this.id).subscribe(
			data => {
				this.dynamicDataCartDate = data;
			},
			error => console.error(error)
		);
		this.id = "5";
		this.data.getcartCheckout(this.id).subscribe(
			data => {
				this.dynamicDatatotalPrice = data;
				// console.log("Toatal proice"+ this.dynamicDatatotalPrice)
			},
			error => console.error(error)
		);
		this.id = "1";
		this.data.getAddressChange(this.id).subscribe(
			data => {
				this.dynamicDataSecondAddress = data[0];
				console.log(this.dynamicDataSecondAddress);
			},
			error => console.error(error)
		);
		this.id = "3";
		this.data.getNewAddr(this.id).subscribe(
			data => {
				this.dynamicNewAddr = data[0];
				console.log(this.dynamicNewAddr);
			},
			error => console.error(error)
		);
		this.id = "3";
		this.data.getcart(this.id).subscribe(
			data => {
				this.dynamicDataCheckOutPrice = data[0];
				// alert(this.dynamicDataCheckOutPrice);
				this.TotalPrice = this.dynamicDataCheckOutPrice.totalPrice;

			},
			error => console.error(error)
		);

		//checkout popup
		this.filteredOptions = this.myControl.valueChanges
			.pipe(
				startWith(''),
				map(value => typeof value === 'string' ? value : value.name),
				map(name => name ? this._filter(name) : this.options.slice())
			);



	}


	//checkout formGroup
	displayFn(user?: User): string | undefined {
		return user ? user.name : undefined;
	}

	private _filter(name: string): User[] {
		const filterValue = name.toLowerCase();

		return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
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
		var contact_email = (<HTMLInputElement><any>document.getElementById("contact-Email-Form")).value;
		var state = (<HTMLInputElement><any>document.getElementById("state-Form")).value;
		var pincode = (<HTMLInputElement><any>document.getElementById("pincode-Form")).value;
		var contact_number = (<HTMLInputElement><any>document.getElementById("contact-Number-Form")).value;

		this.formAddress = { contact_name: contact_name, addr1: addr1, addr2: addr2, country: country, city: city, contact_email: contact_email, state: state, pincode: pincode, contact_number: contact_number };

		this.data.getsaveNewAddress(this.formAddress).subscribe();

		this.id = "3";
		this.data.getNewAddr(this.id).subscribe(
			data => {
				this.dynamicNewAddr = data[0];
				console.log(this.dynamicNewAddr);
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
		document.getElementById('Main-Address').innerHTML =document.getElementById('Deliver-Addr1').innerHTML;
	}

	btnDeliverAddress2() {
		document.getElementById('Main-Address').innerHTML =document.getElementById('Deliver-Addr2').innerHTML;
	}
	rfqDropdown() {
		document.getElementById("rfqDropdown").classList.toggle("show");
	}
	// checkout final
	checkout(){
		var shippingtType ;
		// this.shipping_id = (<HTMLInputElement>document.querySelector('DeliveryOption')).value;
		if((<HTMLInputElement><any>document.getElementById("shipping")).checked){
			shippingtType = "1";
		}
		else if((<HTMLInputElement><any>document.getElementById("homedelivery")).checked){
			shippingtType = "2";
		}
		else if((<HTMLInputElement><any>document.getElementById("pickup")).checked){
			shippingtType = "3";
		}
		else{
			alert("Select a delivery type");
			return;
		}
		// this.data.getcheckoutFinal(this.formAddress).subscribe();

		 this.id = "3";

		this.data.getcheckoutFinal(this.getCookie("userId"), shippingtType).subscribe();

		var options = {
			"key": "rzp_test_dveDexCQKoGszl",
			"amount": this.TotalPrice*100, // 2000 paise = INR 20
			"currency": "INR",
			"name": "ScoopMyArt",
			"description": "Test description",
			"image": "favicon.ico",      "handler": response=>{
					 alert("Booking successful. Thank you!");
			   },
			"prefill": {
				"name": "Test",
				"email": "test@testing.com",
				"contact": "9874563210",
			},
			"notes": {  },
			"theme": {
				"color": "#133E4B"
			},
			"modal": {
			  "ondismiss": function(){        }
			}
		};
		var rzp1 = new Razorpay(options);  rzp1.open();
	}

	filterFunction() {
		var input, filter, ul, li, a, i, div, txtValue;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		div = document.getElementById("rfqDropdown");
		a = div.getElementsById("rfqDrp");
		for (i = 0; i < a.length; i++) {
			txtValue = a[i].textContent || a[i].innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				a[i].style.display = "";
			} else {
				a[i].style.display = "none";
			}
		}
	}
	count_inc() {
		// alert("counterinc");
		// if (this.counter < this.maxOQuant)
		// 	this.counter++;
		// console.log("count_inc");
		// console.log(this.counter);
		// this.counter = (document.getElementById("count").value);
		// this.counter = Number(this.counter);
		if (this.counter < this.maxOQuant) {
			this.counter++;
			var xy: HTMLElement = document.getElementById("count") as HTMLElement;
			this.fgOrderDetails.controls['quantity'].setValue(this.counter);
			// xy.value = this.counter;
		}
	}
	count_dec() {
		// alert("counterdec");

		if (this.counter > this.minOQuant) {
			this.counter--;
			var xy = document.getElementById("count") as HTMLElement;
			this.fgOrderDetails.controls['quantity'].setValue(this.counter);
		}

	}
	myFunction(imgs) {
		// var expandImg.src:HTMLImageElement;
		// var expandImg = document.getElementById("largeImage");
		// console.log(imgs);
		var ele = document.getElementById(imgs) as HTMLImageElement;
		this.largeSrc = ele.src;
		// console.log(expandImg.src);
		// expandImg.parentElement.style.display = "block";
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
	showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
		var dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
		// var captionText = document.getElementById("caption");
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
		// captionText.innerHTML = dots[slideIndex - 1].alt;
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
		console.log(revId);
		console.log(typeof (revId));
		this.data.sendReport(this.tokenObj, revId).subscribe();

	}
	likeCount(revId: any) {
		console.log(revId);
		// console.log(typeof(revId));
		this.data.likeRev(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg") as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-23.png";
		var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-11.png";

	}
	dislikeCount(revId: any) {
		console.log(revId);
		// console.log(typeof(revId));
		this.data.dislikeRev(this.tokenObj, revId).subscribe();
		var ele = document.getElementById("likeImg") as HTMLImageElement;
		ele.src = "assets/icons/resources (IL)-10.png";
		var ele1 = document.getElementById("dislikeImg") as HTMLImageElement;
		ele1.src = "assets/icons/resources (IL)-24.png";
	}
	onSubmit() {

		this.submitted = true;
		this.data.setData(this.fgOrderDetails.value).subscribe(
			data => {
				this.success = true;
				this.fgOrderDetails.controls['quantity'].setValue('');
				this.fgOrderDetails.controls['message'].setValue('');
				this.fgOrderDetails.controls['uploadProductImage'].setValue('');
				this.fgOrderDetails.controls['deliveryDatePicker'].setValue('');
				this.fgOrderDetails.controls['shippingOption'].setValue('');
			},
			error => console.error(error)
		)
	}
}