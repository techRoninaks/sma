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

  constructor(private route: ActivatedRoute, private cookieService: CookieService,  private data : DataService) { }

  ngOnInit() {
    //Php files
    this.data.getPageData("category").subscribe(data =>{
      this.pageData = data;
      this.loadFilters(this.pageData["no_of_products"]);
    })

    for (this.i = 0,this.j = 0; this.i < 5; this.i++) {
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
  toggleBtns(oldBtn){
    if(document.getElementById(oldBtn).classList.contains("show")){
      document.getElementById(oldBtn).classList.remove('show');
    }
  }
  getParams() {
    var keyToken = "";
    this.route.queryParams.subscribe(params => {
      keyToken = params["key"];
    });

    return keyToken;
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

  //filter cookies to be deleted
  deleteFilter(id){
    document.getElementById(id).style.display = "none";
    this.deleteCookieArray[this.deleteCookieCount++] = id;
  }

  //get filters from cookies
  getFilters(){
    var cookieCount = 0;
    var cookieName = "";

    this.cookieArray = this.cookieService.getAll();

    cookieCount = Object.keys(this.cookieArray).length;
    
    //filters to be displayed as chips
    for(this.i = 0, this.j = 0; this.i< cookieCount; this.i++){
      cookieName =  Object.keys(this.cookieArray)[this.i];
      switch(cookieName){
        case "pin": break;
        case "selectedItem": break;
        case "userId": break;
        case "userName": break;
        case "isLogged": break  
        case "isAdmin": break;
        case "sellerId": break;
        case "sellerName": break;
        case "shopId": break;
        case "shopName": break;
        default: this.filterArray[this.j++] = cookieName;
                  break;
      }
    }
    return this.filterArray;
  }

  //apply filter functionality
  applyFilters(){ 
    //check for filters to be deleted
    if(this.deleteCookieArray.length>0){
      for(this.i = 0; this.i<this.deleteCookieArray.length; this.i++){
        this.deleteCookie(this.deleteCookieArray[this.i]);
      }
    }
  }

  //load related filters in filter dropdown based on scenarios
  loadFilters(prodNum){

    var filters = this.getFilters();
    var srchKey = this.getParams();
    var location = this.getCookie("pin");
    var selectedItem = this.getCookie("selectedItem"); 

    for(this.i = 0; this.i < filters.length; this.i++){
      if(filters[this.i] == "trending"){
          this.data.getTrending(prodNum,1).subscribe(dataTrend =>{
            this.array12 = dataTrend["data"];
            console.log(typeof(this.array12));
          })
        break;
      } else if(filters[this.i] == "offer"){
          this.data.getTopOffers(prodNum,1).subscribe(dataOffer =>{
            this.array12 = dataOffer["data"];
          })
        break;
      } else if(filters[this.i] == "arrivals"){
          this.data.getNewArrivals(prodNum,1).subscribe(dataNew =>{
            this.array12 = dataNew["data"];
          })
        break;
      }
    }
    

  }
}

