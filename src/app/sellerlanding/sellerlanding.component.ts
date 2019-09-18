import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

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
	constructor(private router: Router, private data: DataService) { }
	ngOnInit() {

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
		this.router.navigate(['/SignupSeller']);


	}
}
