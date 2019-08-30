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


  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor(private route: ActivatedRoute, private cookieService: CookieService) { }
  public keyToken = "";
  public categoryToken = "";
  public pinCodeToken = "";

  //Cookie Service
  cookieValue = 'UNKNOWN';

  ngOnInit() {
    for (this.i = 0; this.i < 12; this.i++) {
      this.array12[this.i] = this.i + 1;
    }
    for (this.i = 0; this.i < 5; this.i++) {
      if (this.i < 3) {
        this.filledStar[this.i] = this.i;
      } else {
        this.unFilledStar[this.j++] = this.i;
      }
    }

    this.getParams();
    this.deleteCookie("category");
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
    this.route.queryParams.subscribe(params => {
      this.keyToken = params["key"];
      this.categoryToken = params["cat"];
      this.pinCodeToken = params["pin"];
      this.token = parseInt(this.pinCodeToken);
    });

    if (!isNaN(this.token)) {

    }
  }

  // Cookie Section
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  deleteCookie(cname) {
    this.cookieService.delete(cname);
  }
  
  // Sticky Filter Set
  // @HostListener('document:scroll', ['$event']) // for window scroll events
  // onWindowScroll(event) {
  //   var header = document.getElementById("dvCatHeader");
  //   var filterSet = document.getElementById("filter-set");
  //   var sticky = header.offsetTop;
    
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //     filterSet.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //     filterSet.classList.remove("sticky");
  //   }
  // }
}

