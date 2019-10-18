import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

declare var $: any;
var slideIndex = 1;

@Component({
	selector: 'app-sellerlanding',
	templateUrl: './sellerlanding.component.html',
	styleUrls: ['./sellerlanding.component.scss']
})
export class SellerlandingComponent implements OnInit {

	dynamicDataFree: any = "";
	dynamicDataBasic: any = "";
	dynamicDataPremium: any = "";
	dynamicDataPlus: any = "";
	Object = Object;
	dummyText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
	i: number = 0;
	price: string = "00.00";
	actualPrice: string = "00.00";
	offer: string = "-25% off";
	array12: any = [];
	filledStar: any = [];
	unFilledStar: any = [];
	j: number = 0;
	cookieValue = 'UNKNOWN';
	popHeader: string = "";
	popContent: string = "";
	pageData: any = "";
	popImgSrc: any;
	faqSite: any = [];
	repeatPost: any = [0, 1, 2, 3, 4, 5];
	imgPost: any = [];
	descPost: any = [];
	authorPost: any = [];
	testimonal: any;
	testimonal1: any;
	testimonal2: any;
	total: any;
	vidPlay: number;
	first: number;
	tokenFaq: any;
	tokenFaqSubmit: object;

	constructor(private router: Router, private data: DataService) { }
	ngOnInit() {
		// console.log(Object.keys(this.repeatPost));
		// this.testimonal = 0;
		this.vidPlay = 1;
		this.first = 1;
		// { number_faq:0};
		this.tokenFaq = 0;
		(<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display = "none";

		document.getElementById("imgC").style.display = "none";
		this.testimonal1 = 0;
		this.testimonal2 = 1;
		this.total = Object.keys(this.repeatPost).length;
		// console.log(this.total);
		for (var i: any = 0; i <= this.total; i = i + 2) {
			this.imgPost[i] = "assets/images/site/testimonal/user-pic.jpg";
			this.descPost[i] = "Soo happy to work with this site";
			this.authorPost[i] = "author" + [i];
			this.imgPost[i + 1] = "assets/images/site/testimonal/user-pic-2.jpg";
			this.descPost[i + 1] = "the selling and buying of products is very simple and elegant";
			this.authorPost[i + 1] = "author" + [i + 1];
		}
		this.data.getPlanDetailsFree(this.data).subscribe(
			data => {
				this.dynamicDataFree = data;
			},
			error => console.error(error)
		);

		this.data.getPlanDetailsBasic(this.data).subscribe(
			data => {
				this.dynamicDataBasic = data;
			},
			error => console.error(error)
		);

		this.data.getPlanDetailsPremium(this.data).subscribe(
			data => {
				this.dynamicDataPremium = data;
			},
			error => console.error(error)
		);

		this.data.getPlanDetailsPlus(this.data).subscribe(
			data => {
				this.dynamicDataPlus = data;
			},
			error => console.error(error)
		);
		this.data.getPageData("home").subscribe(data => {
			this.pageData = data;
		})
		//Data service ends

		this.showSlides(slideIndex);
		for (this.i = 0; this.i < 6; this.i++) {
			this.array12[this.i] = this.i + 1;
		}
		for (this.i = 0; this.i < 5; this.i++) {
			if (this.i < 3) {
				this.filledStar[this.i] = this.i;
			} else {
				this.unFilledStar[this.j++] = this.i;
			}
		}
		this.data.getFaqSite(this.tokenFaq).subscribe(
			data => {
				this.faqSite = data;
				// console.log(this.faqSite);

			}
		);
		//testimonal
		if (this.testimonal1 == 0 && this.testimonal2 == 1) {
			document.getElementById("leftA").style.display = "none";
		}
		else {
			document.getElementById("leftA").style.display = "block";
		}
		if (this.testimonal1 == this.total - 1 && this.testimonal2 == this.total) {
			document.getElementById("rightA").style.display = "none";
		}
		else {
			document.getElementById("rightA").style.display = "block";
		}
		//blog
		if (this.testimonal == 0) {
			document.getElementById("leftAB").style.display = "none";
		}
		else {
			document.getElementById("leftAB").style.display = "block";
		}
		if (this.testimonal == this.total) {
			document.getElementById("rightAB").style.display = "none";
		}
		else {
			document.getElementById("rightAB").style.display = "block";
		}

	}
	faqMore(){
		this.tokenFaq = 1;
		this.data.getFaqSite(this.tokenFaq).subscribe(
			data => {
				this.faqSite = data;
			}
		);
		(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";

	}
	readMore(x: any) {
		// var res = str.split(" ");
		if (x == 'lDesc1') {
			document.getElementById("lDesc1").style.overflow = "visible";
			document.getElementById("seeMore1").style.display = "none";
		}
		if (x == 'lDesc2') {
			document.getElementById("lDesc2").style.overflow = "visible";
			document.getElementById("seeMore2").style.display = "none";
		}
		if (x == 'lDesc3') {
			document.getElementById("lDesc3").style.overflow = "visible";
			document.getElementById("seeMore3").style.display = "none";
		}
	}

	// Carousel
	plusSlides(n) {
		this.showSlides(slideIndex += n);
	}
	currentSlide(n) {
		this.showSlides(slideIndex = n);
	}
	showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
		var dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
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

	redirect() {
		this.router.navigate(['/plandetails']);


	}
	next() {
		if (this.testimonal1 == this.total || this.testimonal2 == this.total) {
			document.getElementById("rightA").style.display = "none";
			document.getElementById("leftA").style.display = "block";
			// console.log(this.testimonal1 + "hi");
			// console.log(this.testimonal2 + "hi");
		}
		else {
			document.getElementById("rightA").style.display = "block";
			this.testimonal1 = this.testimonal1 + 2;
			this.testimonal2 = this.testimonal2 + 2;
			document.getElementById("leftA").style.display = "block";
			// console.log(this.testimonal1);
			// console.log(this.testimonal2);

		}


	}
	prev() {
		if (this.testimonal1 == 0 && this.testimonal2 == 1) {
			document.getElementById("leftA").style.display = "none";
			document.getElementById("rightA").style.display = "block";
			// console.log(this.testimonal1 + "hi");
			// console.log(this.testimonal2 + "hi");

		}
		else {
			this.testimonal1 = this.testimonal1 - 2;
			this.testimonal2 = this.testimonal2 - 2;
			document.getElementById("leftA").style.display = "block";
			document.getElementById("rightA").style.display = "block";
			// console.log(this.testimonal1);
			// console.log(this.testimonal2);

		}
	}
	nextB() {
		if (this.testimonal == this.total) {
			document.getElementById("rightAB").style.display = "none";
			document.getElementById("leftAB").style.display = "block";
			// console.log(this.testimonal1 + "hi");
			// console.log(this.testimonal2 + "hi");
		}
		else {
			document.getElementById("rightAB").style.display = "block";
			this.testimonal = this.testimonal + 1;
			document.getElementById("leftAB").style.display = "block";
			// console.log(this.testimonal1);
			// console.log(this.testimonal2);

		}


	}
	prevB() {
		if (this.testimonal == 0) {
			document.getElementById("leftAB").style.display = "none";
			document.getElementById("rightAB").style.display = "block";
			// console.log(this.testimonal1 + "hi");
			// console.log(this.testimonal2 + "hi");

		}
		else {
			this.testimonal = this.testimonal - 1;
			document.getElementById("leftAB").style.display = "block";
			document.getElementById("rightAB").style.display = "block";
			// console.log(this.testimonal1);
			// console.log(this.testimonal2);

		}
	}
	expandVid() {
		this.vidPlay = 0;
		document.getElementById("slides").style.display = "none";
		document.getElementById("imgC").style.display = "block";
		document.getElementById("imgP").style.display = "none";
		this.first=0;

	}
	shrinkVid() {
		document.getElementById("slides").style.display = "block";
		this.vidPlay = 1;
		document.getElementById("imgP").style.display = "block";
		document.getElementById("imgC").style.display = "none";
		// document.getElementById("vidTag").style.top ='-36rem';
	}
	filterFaq() {
		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("searchFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("searchFaq")).value.length;
		if (faqSearchInputLength >= 3) {
			this.tokenFaq = { number_faq:1, filterFaq: faqSearchInput};
			this.data.getFaqSiteFiltered(this.tokenFaq).subscribe(
				data => {
					this.faqSite = data;
				}
			);
			(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";
		}
	}
	submitFaq() {
		alert("Question submitted");
		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("submitFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("submitFaq")).value.length;
		if (faqSearchInputLength >= 5) {
			this.tokenFaqSubmit = {submitFaq: faqSearchInput};
			this.data.getFaqSiteSubmit(this.tokenFaqSubmit).subscribe();
		}
		(<HTMLInputElement><any>document.getElementById("submitFaq")).value="";
	}
}