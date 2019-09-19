
import { Component, OnInit, HostListener, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
var slideIndex = 1;
declare var Razorpay: any;
@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
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
	constructor(private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
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
	imageSrc: string;
	Object = Object;
	tokenObj: object;
	fgOrderDetails: FormGroup;
	checkoutForm: FormGroup;
	dynamicdata: any = "";
	varient: any = "";
	stage1: boolean = false;
	largeSrc: any = "/assets/images/Screenshot_20190712-201603.png";
	public counter: number;
	revId: number;
	ngOnInit() {


		this.route.queryParams.subscribe(params => {
			this.token = params['prod_id'];
			// console.log(this.token);
			this.tokenObj = { prod_id: this.token, user_id: "2" };
			console.log(this.tokenObj);
			// this.token = params['userId'];
		});
		// let pincode = "notAvailable";
		// if (pincode == "available") {
		// }
		// else {
		//   alert("Page is loaded");
		// }
		// function(void){
		// 	alert("page is loaded");
		// }

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

	}
	rfqDropdown() {
		document.getElementById("rfqDropdown").classList.toggle("show");
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
			var xy : HTMLElement= document.getElementById("count") as HTMLElement;
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