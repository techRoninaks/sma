import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopsetting',
  templateUrl: './shopsetting.component.html',
  styleUrls: ['./shopsetting.component.scss']
})
export class ShopsettingComponent implements OnInit {

  editShopDetails: boolean = false;
  editOwnerDetails: boolean = false;
  userId: any = "";
  sellerId: any = "";
  shopDetails: any = "";
  shopDetailUpload: any = "";
  shopOwnerUpload: any = "";

  constructor( private cookieService: CookieService, private route : Router, private data : DataService ) { }

  ngOnInit() {
    (<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display ="block";
		(<HTMLInputElement><any>document.getElementById('mainHeader')).style.display ="none";
    (<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display ="none";
    
    this.userId = this.getCookie("userId");
		// this.setCookie("sellerId", 1);
    this.sellerId = this.getCookie("sellerId");
    if(this.sellerId == "" || this.sellerId == null){
      alert("uh uh ha, you are not supposed to be here!!");
      this.route.navigate(['']);
    }
    else{
      this.data.getShopDetailsSettings(this.sellerId).subscribe(data=>{
        this.shopDetails = data;
      })
    }
  }
  ngOnDestroy() {
		(<HTMLInputElement><any>document.getElementById('mainHeader')).style.display ="block";
		(<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display ="none";
		(<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display ="block";
  }
  
  edit(caller : any){
    switch(caller){
      case 'shopdetails': this.editShopDetails = true;
        break;
      case 'ownerdetails': this.editOwnerDetails = true;
        break;
      default:break;
    }
    
  }

  saveShopDetails(){
    var name = (<HTMLInputElement><any>document.getElementById('name')).value;
    var email = (<HTMLInputElement><any>document.getElementById('email')).value;
    var phone = (<HTMLInputElement><any>document.getElementById('phone')).value;
    var gst = (<HTMLInputElement><any>document.getElementById('gst')).value;
    var address = (<HTMLInputElement><any>document.getElementById('address')).value;
    var caetegory = (<HTMLInputElement><any>document.getElementById('caetegory')).value;
    this.shopDetails.shopname = name;
    this.shopDetails.email = email;
    this.shopDetails.contact = phone;
    this.shopDetails.gst = gst;
    this.shopDetails.shop_address = address;
    // this.shopDetails.gst = caetegory;
    this.editShopDetails = false;
    this.shopDetailUpload = { seller_id: this.sellerId, shopname: name, email: email, phone: phone, gst: gst, address: address, category: caetegory };
    console.log(this.shopDetailUpload);
    this.data.updateShopDetailsSettings(this.shopDetailUpload).subscribe(data=>{
      console.log(data);
    });
  }

  saveOwnerDetails(){
    var ownername = (<HTMLInputElement><any>document.getElementById('ownername')).value;
    var owneremail = (<HTMLInputElement><any>document.getElementById('owneremail')).value;
    var ownerdob = (<HTMLInputElement><any>document.getElementById('ownerdob')).value;
    var owneridno = (<HTMLInputElement><any>document.getElementById('owneridno')).value;
    var owneridtype = (<HTMLInputElement><any>document.getElementById('owneridtype')).value;
    var ownerphone = (<HTMLInputElement><any>document.getElementById('ownerphone')).value;
    var ownergst = (<HTMLInputElement><any>document.getElementById('ownergst')).value;

    this.shopDetails.name = ownername;
    this.shopDetails.email = owneremail;
    this.shopDetails.contact = ownerphone;
    this.shopDetails.idcard_type = owneridtype;
    this.shopDetails.dob = ownerdob;
    this.shopDetails.idcardno = owneridno;
    this.shopDetails.gst = ownergst;
    this.editOwnerDetails = false;

    this.shopOwnerUpload = { name: name, email: owneremail, phone: ownerphone, gst: ownergst, owneridtype: owneridtype, owneridno: owneridno, ownerdob: ownerdob};
  }

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
