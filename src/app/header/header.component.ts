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
  flag1: any="";
  flag3: string;
  flag4: string;
  flag5: string;
  flag6: string;
  flag7: string;

  constructor(private cookieService: CookieService, private router: Router,private data: DataService) { 
  }
  flag: String="";
  flag2: String="";
  temp: String="Login";
  temp1: String="Logout";
  location: String="";
  pin: String="";
  dynamicDataLocation :any ="";
  ngOnInit() {
    this.flag=this.getCookie("userName");
    this.flag1=this.getCookie("sellerName");
    this.flag3=this.getCookie("sellerCity");
    this.flag4=this.getCookie("userCity");
    this.flag5=this.getCookie("sellerPin");
    this.flag6=this.getCookie("userPin");
    if(this.getCookie("isLoggedIn") == "0" || this.getCookie("isLoggedIn")== null)
    {
        setTimeout(function(){ 
          document.getElementById('myModal-1').style.display="contents";
        }, 120000);
    }
    else if(this.getCookie("isLoggedIn") == "1" ){
      // exit(0);
    }
    else{
      this.setCookie("isLoggedIn",null);
      setTimeout(function(){ 
        document.getElementById('myModal-1').style.display="contents";
      }, 120000);
    }

    if(this.flag!= null)
    {
      this.temp = this.flag;
      if(this.temp == "")
      {
        document.getElementById("headerLogin").innerText = "Login";
        document.getElementById("profilemenu").style.display="none";
      }
      else
      {
        document.getElementById("profilemenu").style.display="block";
        document.getElementById("headerLogin").innerText = this.flag as string;
        document.getElementById("loginButton").innerText ="Log Out";
        document.getElementById("locationlabel").innerText = this.flag4 as string;
        document.getElementById("pinlabel").innerText = this.flag6 as string;
      }
    }
    else if(this.flag1!=null){
      this.temp = this.flag1;
      if(this.temp == "")
      {
        document.getElementById("headerLogin").innerText = "Login";
        document.getElementById("profilemenu").style.display="none";
      }
      else
      {
        document.getElementById("profilemenu").style.display="block";
        document.getElementById("headerLogin").innerText = this.flag1 as string;
        document.getElementById("loginButton").innerText ="Log Out";
        document.getElementById("locationlabel").innerText = this.flag3 as string;
        document.getElementById("pinlabel").innerText = this.flag5 as string;
      }
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
    this.cookieService.delete('userCity');
    this.cookieService.delete('userPin');
    this.cookieService.delete('sellerPin');
    this.cookieService.delete('sellerCity');
    this.cookieService.delete('sellerStage');
    this.setCookie("isLoggedIn",0);
    document.getElementById("headerLogin").innerText ="Login";
    document.getElementById("loginButton").innerText ="";
    document.getElementById("profilemenu").style.display="none";
    document.getElementById("locationlabel").innerText = "";
    document.getElementById("pinlabel").innerText = "";
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
    {
      document.getElementById("profilemenu").style.display="none";
      this.router.navigate(['/login']);
    }

  }
  closePop(){
   $("#myModal-1").modal('hide');
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
