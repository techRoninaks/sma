import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

declare var $: any;
var slideIndex = 1;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Object = Object;
  dummyText: string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  i: number=0;
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
  trendingProducts: Object;
  newProducts: Object;
  offerProducts: Object;

  constructor( private cookieService: CookieService, private router: Router, private data : DataService ) { }

  ngOnInit() {
    //Data service beg

    this.data.getPageData("home").subscribe(data => {
      this.pageData = data;
      var pincode = this.getCookie("pin");
      
      this.data.loadTrending(pincode, this.pageData["no_of_tagged_products"], 1, this.getCookie("filterSet"), this.getCookie("SortSet")).subscribe(trendingData=>{

        this.trendingProducts = trendingData["data"];
        this.array12 = trendingData["data"];

      });
      this.data.loadOfferProd(pincode, this.pageData["no_of_tagged_products"], 1, this.getCookie("filterSet"),this.getCookie("SortSet")).subscribe(offerData=>{

        this.offerProducts = offerData["data"];
  
      });
      this.data.loadNewProd(pincode, this.pageData["no_of_tagged_products"], 1, this.getCookie("filterSet"),this.getCookie("SortSet")).subscribe(newData=>{

        this.newProducts = newData["data"];
        
      });
      
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
    this.showSlides(slideIndex);
    this.setCookie("filterSet",JSON.stringify({"filterCount": "", "rating": "", "freeShipping": "", "variants":[], "rfq": "", "orderConfirm": "",  "instantBuy": "", "delivery":"","minPrice":"","maxPrice":"","shipMethod":"","deliverable":""}));
    this.setCookie("SortSet", JSON.stringify({"priceLH": "", "priceHL": "", "latest": "", "popular": "", "processLH": "", "processHL": "", "shipLH": "", "shipHL": ""}));
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
  // Carousel

  //Cookies
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  deleteCookie(cname) {
    this.cookieService.delete(cname);
  }
  //Cookies

  toggleTags(id){
    var activeTag = document.getElementsByClassName("activeTag"); 
    if(activeTag.length !== 0){
      activeTag[0].classList.remove("activeTag");
    }
    document.getElementById(id).classList.add("activeTag");
    switch(id){
      case "tag-1": this.array12 = this.trendingProducts;
                    break;
      case "tag-2": this.array12 = this.offerProducts;
                    break;
      case "tag-3": this.array12 = this.newProducts;
                    break;
    }

  }

  seeMore() {
    var activeTag = document.getElementsByClassName("activeTag");
    var id = activeTag[0].id;
    var catQuery = '';

    switch (id) {
      case "tag-1": this.router.navigate(['/category'], { queryParams : { cat_id: 'trending_products'} });
        break;
      case "tag-2": this.router.navigate(['/category'], { queryParams : { cat_id: 'offer_products'} });
        break;
      case "tag-3": this.router.navigate(['/category'], { queryParams : { cat_id: 'new_products'} });
        break;
    }
   
  }

  readMore(id) {
    $("#myModal").modal();
    switch (id) {
      case "about-1": this.popHeader = this.pageData.feature_head_1;
        this.popContent = this.pageData.feature_desc_1;
        this.popImgSrc = this.pageData.feature_img_1;
        break;
      case "about-2": this.popHeader = this.pageData.feature_head_2;
        this.popContent = this.pageData.feature_desc_2;
        this.popImgSrc = this.pageData.feature_img_2;
        break;
      case "about-3": this.popHeader = this.pageData.feature_head_3;
        this.popContent = this.pageData.feature_desc_3;
        this.popImgSrc = this.pageData.feature_img_3;
        break;
      case "work-1": this.popHeader = this.pageData.work_head_1;
        this.popContent = this.pageData.work_desc_1;
        this.popImgSrc = this.pageData.work_img_1;
        break;
      case "work-2": this.popHeader = this.pageData.work_head_2;
        this.popContent = this.pageData.work_desc_2;
        this.popImgSrc = this.pageData.work_img_2;
        break;
      case "work-3": this.popHeader = this.pageData.work_head_3;
        this.popContent = this.pageData.work_desc_3;
        this.popImgSrc = this.pageData.work_img_3;
        break;
    }
  }

  addToFilterArray(cname,cdata){
    var filterJson = this.getCookie("filterSet");
    var jsonParsed = JSON.parse(filterJson);
    jsonParsed[cname] = cdata;
    this.setCookie("filterSet",JSON.stringify(jsonParsed));
  }
}
