import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService) { 
  }

  ngOnInit() {

    setTimeout(function(){ 
      document.getElementById('myModal-1').style.display="contents";
     }, 1200000);
  }
  dispNone(){
    document.getElementById("myModal-1").style.display="none";
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
}
