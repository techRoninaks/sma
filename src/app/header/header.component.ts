import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { CookieService } from 'ngx-cookie-service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {Router, RouterLink} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  document: any;

  constructor(private cookieService: CookieService, private router: Router) { 
  }
  flag: String="";
  temp: String="Login";
  temp1: String="Logout";
  ngOnInit() {

    if(! this.getCookie("userName"))
    {
        setTimeout(function(){ 
          document.getElementById('myModal-1').style.display="contents";
        }, 120000);
    }
    this.flag=this.getCookie("userName");
    if(this.flag){
      this.temp = this.flag;
      this.document.getElementById("profilemenu").style.display="block";
    }
  }
  dispNone(){
    document.getElementById("myModal-1").style.display="none";
  }
  logOut(){
    this.cookieService.delete('userName');
    document.getElementById("headerLogin").innerText ="Login";
    document.getElementById("loginButton").innerText ="";
    document.getElementById("profilemenu").style.display="none";
    this.router.navigate(['/']);
  }
  open(){
    if(this.getCookie("userName")){
      document.getElementById("profilemenu").style.display="block";
    }
    else
      this.router.navigate(['/login']);
  }
  close(){
    document.getElementById("profilemenu").style.display="none";
  }
  closeLocation(){
    document.getElementById("location_drop_down").style.display="none";
  }
  openLocation(){
    document.getElementById("location_drop_down").style.display="block";
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
