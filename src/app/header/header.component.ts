import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { CookieService } from 'ngx-cookie-service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {Router, RouterLink} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  document: any;

  constructor(private cookieService: CookieService, private router: Router,private data: DataService) { 
  }
  flag: String="";
  flag2: String="";
  temp: String="Login";
  temp1: String="Logout";
  location: String="";
  dynamicDataLocation :any ="";
  ngOnInit() {

    if(! this.getCookie("userName") || !this.getCookie("sellerId"))
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
    this.cookieService.delete('userId');
    this.cookieService.delete('sellerId');
    this.cookieService.delete('sellerName');
    document.getElementById("headerLogin").innerText ="Login";
    document.getElementById("loginButton").innerText ="";
    document.getElementById("profilemenu").style.display="none";
    document.getElementById("locationlabel").innerText = "";
    this.router.navigate(['/']);
  }
  searchKeyLog(){
   var searchkey = (<HTMLInputElement><any>document.getElementById('searchField')).value;
  //  alert(searchkey);
   this.router.navigate(['category'], { queryParams: { key: searchkey} });
  }
  open(){
    if(this.getCookie("userName") || this.getCookie("sellerName")){
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
