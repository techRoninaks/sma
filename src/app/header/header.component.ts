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
  cookie_uname: String;
  cookie_user_id: String;
  city: String;
  seller_name: String;
  cookie_seller_id: String;
  dynamicDataLocation :any ="";
  user_signed: boolean = false;
  sellerSignedIn: boolean =false;
  ngOnInit() {
    this.flag=this.getCookie("userName");
    this.flag1=this.getCookie("sellerName");
    this.flag3=this.getCookie("sellerCity");
    this.flag4=this.getCookie("userCity");
    this.flag5=this.getCookie("sellerPin");
    this.flag6=this.getCookie("userPin");
    if(this.flag)
    {
      this.temp = this.flag;
      this.user_signed = true;
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
    else if(this.flag1){
      this.temp = this.flag1;
      this.sellerSignedIn =true;
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
    this.cookieService.delete('pin');
    this.cookieService.delete('sellerPin');
    this.cookieService.delete('sellerCity');
    this.cookieService.delete('sellerStage');
    this.setCookie("isLoggedIn",0);
    document.getElementById("headerLogin").innerText ="Login";
    document.getElementById("loginButton").innerText ="";
    document.getElementById("profilemenu").style.display="none";
    document.getElementById("locationlabel").innerText = "";
    document.getElementById("pinlabel").innerText = "";
    this.user_signed = false;
    this.sellerSignedIn = false;
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
    var email = (<HTMLInputElement><any>document.getElementById('login-email')).value;
    var password = (<HTMLInputElement><any>document.getElementById('login-password')).value;
    if(email=="" || password=="")
    {
      alert("Please enter username/password");
    }
    else{
      this.data.popUpLogin(email,password).subscribe(
        data=>{ 
                console.log(data);
                if(data['status'] =="Success1")
                {
                  document.getElementById("myModal-1").style.display="none";
                  alert('Login Successfully');
                  this.cookie_uname = data['username'];
                  this.cookie_user_id = data['userid'];
                  this.city =data['city'];
                  this.pin =data['pincode'];
                  this.setCookie("isLoggedIn",1);
                  this.setCookie("userCity",this.city);
                  this.setCookie("userPin",this.pin);
                  this.setCookie("pin",this.pin);
                  this.setCookie("userName",this.cookie_uname);
                  this.setCookie("userId",this.cookie_user_id);
                  document.getElementById("headerLogin").innerText = this.cookie_uname as string;
                  document.getElementById("loginButton").innerText ="Log Out";
                  document.getElementById("locationlabel").innerText = this.city as string;
                  document.getElementById("pinlabel").innerText = this.pin as string;
                  this.router.navigate(['/']);
                }
                else if(data['status'] =="Success2")
                {
                  document.getElementById("myModal-1").style.display="none";
                  if(data['stage'] =="1")
                  {
                    this.cookie_seller_id = data['sellerId'];
                    this.setCookie("sellerId",this.cookie_seller_id);
                    this.setCookie("sellerStage",1);
                    this.seller_name = data['seller_name'];
                    this.setCookie("sellerName",this.seller_name);
                    this.router.navigate(['/signupseller']);
                  }
                  else if(data['stage'] =="2")
                  {
                    this.pin =data['pincode'];
                    this.setCookie("sellerPin",this.pin);
                    this.setCookie("pin",this.pin);
                    this.cookie_seller_id = data['sellerId'];
                    this.seller_name = data['seller_name'];
                    this.setCookie("sellerName",this.seller_name);
                    this.setCookie("sellerId",this.cookie_seller_id);
                    this.setCookie("sellerStage",2);
                    this.router.navigate(['/signupseller']);
                  }
                  else if(data['stage'] =="3")
                  {
                    this.cookie_seller_id = data['sellerId'];
                    this.setCookie("sellerId",this.cookie_seller_id);
                    this.seller_name = data['seller_name'];
                    this.setCookie("sellerName",this.seller_name);
                    this.pin = data['pincode'];
                    this.setCookie("sellerPin",this.pin);
                    this.setCookie("pin",this.pin);
                    this.setCookie("sellerStage",3);
                    this.router.navigate(['/signupseller']);
                  }
                  else if(data['stage'] =="4")
                  {
                    this.cookie_seller_id = data['sellerId'];
                    this.setCookie("sellerId",this.cookie_seller_id);
                    this.seller_name = data['seller_name'];
                    this.setCookie("sellerName",this.seller_name);
                    this.setCookie("sellerStage",4);
                    this.router.navigate(['/signupseller']);
                  }
                  else if(data['stage'] =="5")
                  {
                    this.cookie_seller_id = data['sellerId'];
                    this.setCookie("sellerId",this.cookie_seller_id);
                    this.seller_name = data['seller_name'];
                    this.setCookie("sellerName",this.seller_name);
                    this.setCookie("sellerStage",5);
                    this.router.navigate(['/signupseller']);
                  }
                  else
                  {
                    alert('Login Successfully');
                    this.cookie_seller_id = data['sellerId'];
                    this.seller_name =data['seller_name'];
                    this.city =data['city'];
                    this.pin =data['pincode'];
                    this.setCookie("isLoggedIn",1);
                    this.setCookie("sellerCity",this.city);
                    this.setCookie("sellerPin",this.pin);
                    this.setCookie("userPin",this.pin);
                    this.setCookie("pin",this.pin);
                    this.setCookie("sellerId",this.cookie_seller_id);
                    this.setCookie("sellerName",this.seller_name);
                    document.getElementById("headerLogin").innerText = this.seller_name as string;
                    document.getElementById("loginButton").innerText ="Log Out";
                    document.getElementById("locationlabel").innerText = this.city as string;
                    document.getElementById("pinlabel").innerText = this.pin as string;
                    this.router.navigate(['/dashboard']);
                  }
                }
                else
                {
                  alert('Username or Password Mismatch');
                }
              },
          error=> console.error(error)
        );
    }
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
