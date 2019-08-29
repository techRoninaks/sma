import { Component, OnInit, HostListener, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
var slideIndex = 1;
// var expandImg:HTMLImageElement;

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
	followInfo: any ="";
	constructor(private data: DataService, private route: ActivatedRoute) { }
	dynamicData: any = "";
	imageSrc: string;
	Object = Object;
	tokenObj: object;
	largeSrc :any="/assets/images/Screenshot_20190712-201603.png";

	ngOnInit() {


		this.route.queryParams.subscribe(params => {
			this.token = params['prod_id'];
			this.tokenObj = {prod_id:this.token,user_id:"2"};
			// console.log(this.tokenObj);
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
				// console.log(this.dynamicData.specification);
				var str = this.dynamicData.specification; 
				var res = str.split("!~!");
				this.spec=res;
				// console.log(res);

			},
			error => console.error(error)
		);
		this.data.getFollowInfo(this.tokenObj).subscribe(
			data => {
				console.log(data);
				this.followInfo = data;
				var x=this.followInfo.response;
				console.log(x);
				if(this.followInfo.response == "successful")
				{	
					this.folResult = true;
				}
				else if(this.followInfo.response == "unsuccessful")
				{
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

		document.getElementById('bar-five').style.width = '90%';
		document.getElementById('bar-four').style.width = '75%';
		document.getElementById('bar-three').style.width = '40%';
		document.getElementById('bar-two').style.width = '60%';
		document.getElementById('bar-one').style.width = '10%';

		this.showSlides(slideIndex);



	}
	myFunction(imgs) {
		// var expandImg.src:HTMLImageElement;
		// var expandImg = document.getElementById("largeImage");
		// console.log(imgs);
		this.largeSrc = document.getElementById(imgs).src;
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
		document.getElementById("seeMore").style.display ="none";
	}
	followValue(){

		// document.getElementById("demo").innerHTML = res;
	}
}
