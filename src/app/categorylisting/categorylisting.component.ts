import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-categorylisting',
  templateUrl: './categorylisting.component.html',
  styleUrls: ['./categorylisting.component.scss']
})
export class CategorylistingComponent implements OnInit {
  token: any;
  Object = Object;
  dummyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  price: string = "00.00";
  actualPrice: string = "00.00";
  offer: string = "-25% off";
  array12: any = [];
  head = false;
  i: number = 0;
  filledStar: any = [];
  unFilledStar: any = [];
  j: number = 0;
  filterArray: any = [];
  cookieArray: {};
  deleteCookieCount: any = 0;
  deleteCookieArray: any = [];
  pageData: Object;
  filterCount: number = 0;
  pageCount: number = 0;
  totPages: any = [];
  ratingView: any = 0;
  pages: any = 0;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private data: DataService) { }

  ngOnInit() {
    //Php files
    this.data.getPageData("category").subscribe(data => {
      this.pageData = data;
      this.pages = this.pageData["no_of_products"];
      this.loadFilters(this.pageData["no_of_products"]);
    })

    for (this.i = 0, this.j = 0; this.i < 5; this.i++) {
      if (this.i < 3) {
        this.filledStar[this.i] = this.i;
      } else {
        this.unFilledStar[this.j++] = this.i;
      }
    }

  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  toggleBtns(oldBtn) {
    if (document.getElementById(oldBtn).classList.contains("show")) {
      document.getElementById(oldBtn).classList.remove('show');
    }
  }
  getParams(urlParam) {
    var keyToken = "";
    this.route.queryParams.subscribe(params => {
      keyToken = params[urlParam];
    });
    if(keyToken !== undefined){
      return keyToken;
    }
    return "";
    
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
  addToFilterArray(parentCookie, cname, cdata) {
    var filterJson = this.getCookie(parentCookie);
    var jsonParsed = JSON.parse(filterJson);
    jsonParsed[cname] = cdata;
    this.setCookie(parentCookie, JSON.stringify(jsonParsed));
    console.log(this.getCookie(parentCookie));
  }
  //filter cookies to be deleted
  deleteFilter(id) {
    document.getElementById(id).style.display = "none";
    this.deleteCookieArray[this.deleteCookieCount++] = id;
  }
  selectRating(){
    var rating = (<HTMLInputElement><any>document.getElementById("tRating")).value;
    document.getElementById("tRatDisp").innerHTML = rating;
    console.log(rating);
  }
  //apply filter functionality
  applyFilters() {
    var rating = (<HTMLInputElement><any>document.getElementById("tRating")).value;
    var freeShip = (<HTMLInputElement><any>document.getElementById("tFShip")).value;
    var rfq = (<HTMLInputElement><any>document.getElementById("tRfq")).value;
    var instBuy =  (<HTMLInputElement><any>document.getElementById("tRfq")).value;
    var ordConfm = (<HTMLInputElement><any>document.getElementById("orderCon")).value;

    this.addToFilterArray("filterSet","rating",rating);
    this.addToFilterArray("filterSet","freeShipping",freeShip);
    this.addToFilterArray("filterSet","rfq",rfq);
    this.addToFilterArray("filterSet","instantBuy",instBuy);
    this.addToFilterArray("filterSet","orderConfirm",ordConfm);
    this.loadFilters(this.pages);
    console.log(this.getCookie("filterSet"));

  }
  applySort(){
    var PLH = (<HTMLInputElement><any>document.getElementById("tpriceLow")).value;
    var PHL = (<HTMLInputElement><any>document.getElementById("tpriceHigh")).value;
    var latest = (<HTMLInputElement><any>document.getElementById("tlatest")).value;
    var pop = (<HTMLInputElement><any>document.getElementById("popular")).value;
    var prLH = (<HTMLInputElement><any>document.getElementById("tproLH")).value;
    var prHL = (<HTMLInputElement><any>document.getElementById("tproHL")).value;
    var sLH = (<HTMLInputElement><any>document.getElementById("tShipLH")).value;
    var sHL = (<HTMLInputElement><any>document.getElementById("tShipHL")).value;

    this.addToFilterArray("SortSet","priceLH",PLH);
    this.addToFilterArray("SortSet","priceHL",PHL);
    this.addToFilterArray("SortSet","latest",latest);
    this.addToFilterArray("SortSet","popular",pop);
    this.addToFilterArray("SortSet","processLH",prLH);
    this.addToFilterArray("SortSet","processHL",prHL);
    this.addToFilterArray("SortSet","shipLH",sLH);
    this.addToFilterArray("SortSet","shipHL",sHL);
    this.loadFilters(this.pages);
    console.log(this.getCookie("sortSet"));
  }
  //load related filters in filter dropdown based on scenarios
  loadFilters(prodNum) {
    this.setCookie("pin",682020);
    var filters = JSON.parse(this.getCookie("filterSet"));
    var sortSet = JSON.parse(this.getCookie("sortSet"));
    var srchKey = this.getParams("key");
    var catId = this.getParams("cat_id");
    var location = this.getCookie("pin");
    
    var pageCount = 0;

    console.log("sort "+sortSet+" filter "+filters);

    if(filters.quickLink !== ""){
      if (filters.quickLink == "trending") {
        this.data.getTrending(prodNum, 1).subscribe(dataTrend => {
          this.array12 = dataTrend["data"];
          pageCount = dataTrend["pages"];
          this.loadPages(pageCount);
        })
      } else if (filters.quickLink == "offer") {
        this.data.getTopOffers(prodNum, 1).subscribe(dataOffer => {
          this.array12 = dataOffer["data"];
          pageCount = dataOffer["pages"];
          this.loadPages(pageCount);
        })
      } else if (filters.quickLink == "arrivals") {
        this.data.getNewArrivals(prodNum, 1).subscribe(dataNew => {
          this.array12 = dataNew["data"];
          pageCount = dataNew["pages"];
          this.loadPages(pageCount);
        })
      }
    } else if(srchKey !== ""){

    } else if(catId !== ""){
      
      this.data.getListing(catId,srchKey,location,JSON.stringify(filters),JSON.stringify(sortSet),prodNum,1).subscribe(dataList=>{
        if(dataList["response"] == "success"){
          this.array12 = dataList["data"];
          pageCount = dataList["pages"];
          alert("Filters Applied!");
        } else {
          alert("Sorry, match not found!");
        }
      })
    } else {
      //error
    }
    
  }
  loadPages(PageCount) {
    for (var i = 0; i < PageCount; i++) {
      this.totPages[i] = i + 1;
    }
  }
}

