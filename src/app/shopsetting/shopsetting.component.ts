import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

var imageCoverValue : any = 1 ;
var productTwoValue : any = 1 ;
var productOneValue : any = 1 ;
var productThreeValue : any = 1 ;

@Component({
  selector: 'app-shopsetting',
  templateUrl: './shopsetting.component.html',
  styleUrls: ['./shopsetting.component.scss']
})
export class ShopsettingComponent implements OnInit {

  editShopDetails: boolean = false;
  editOwnerDetails: boolean = false;
  editPaymentDetails: boolean = false;
  newShipping: boolean = false;
  userId: any = "";
  sellerId: any = "";
  shopDetails: any = "";
  locationDetails: any = "";
  shopDetailUpload: any = "";
  shopOwnerUpload: any = "";
  shopPaymentUpload: any = "";
  shopAdvancedUpload: any = "";
  shopCategory: any = "";
  editLocation: boolean = false;
  valueDrop : any = "";
  editShippingLocations : any = ""; 

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
        // console.log(this.shopDetails['gift_option']);
        
        if(this.shopDetails['gift_option'] == '1'){
          (<HTMLInputElement><any>document.getElementById('giftInput')).checked = true;
        }
        else{
          (<HTMLInputElement><any>document.getElementById('giftInput')).checked = false;
        }
        if(this.shopDetails['deliver_by_date'] == '1'){
          (<HTMLInputElement><any>document.getElementById('delInput')).checked = true;
        }
        else{
          (<HTMLInputElement><any>document.getElementById('delInput')).checked = false;
        }
        if(this.shopDetails['rfq'] == '1'){
          (<HTMLInputElement><any>document.getElementById('rfqInput')).checked = true;
        }
        else{
          (<HTMLInputElement><any>document.getElementById('rfqInput')).checked = false;
        }
        if(this.shopDetails['order_confirmation'] == '1'){
          (<HTMLInputElement><any>document.getElementById('orderInput')).checked = true;
        }
        else{
          (<HTMLInputElement><any>document.getElementById('orderInput')).checked = false;
        }
      })

      this.data.getShippingLocationSettings(this.sellerId).subscribe(data=>{
        this.locationDetails = data;
        if(this.locationDetails.length == 0){
          this.newShipping = true;
        }
      })
      this.data.getCategoryForSetting().subscribe(data=>{
        this.shopCategory = data;
        console.log(this.shopCategory);
        
      })
    }

    document.getElementById('mainImageHolder').addEventListener('change', this.onCoverClick.bind(this));
    document.getElementById('productOneImageHolder').addEventListener('change', this.onProductOneClick.bind(this));
    document.getElementById('productTwoImageHolder').addEventListener('change', this.onProductTwoClick.bind(this));
    document.getElementById('productThreeImageHolder').addEventListener('change', this.onProductThreeClick.bind(this));
  }
  ngOnDestroy() {
		(<HTMLInputElement><any>document.getElementById('mainHeader')).style.display ="block";
		(<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display ="none";
		(<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display ="block";
  }

  openDropdown(){
    (<HTMLInputElement><any>document.getElementById('myUL')).style.display ="block";
  }

  replaceText(text : any){
    (<HTMLInputElement><any>document.getElementById('caetegory')).value = text;
    (<HTMLInputElement><any>document.getElementById('myUL')).style.display ="none";
  }
  
  edit(caller : any){
    switch(caller){
      case 'shopdetails': this.editShopDetails = true;
        break;
      case 'ownerdetails': this.editOwnerDetails = true;
        break;
      case 'paymentdetails': this.editPaymentDetails = true;
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
    this.shopDetails.category = caetegory;
    this.editShopDetails = false;
    this.shopDetailUpload = { seller_id: this.sellerId, shopname: name, email: email, phone: phone, gst: gst, address: address, category: caetegory,imageMain: imageCoverValue,imageProductOne: productOneValue,imageProductTwo: productTwoValue,imageProductThree: productThreeValue};
    this.data.updateShopDetailsSettings(this.shopDetailUpload).subscribe(data=>{
      // console.log(data);
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

    this.shopOwnerUpload = { seller_id: this.sellerId, name: ownername, email: owneremail, phone: ownerphone, gst: ownergst, owneridtype: owneridtype, owneridno: owneridno, ownerdob: ownerdob};
    this.data.updateOwnerDetailsSettings(this.shopOwnerUpload).subscribe(data=>{
      // console.log(data);
    });
  }

  savePaymentDetails(){
    var shippingform = (<HTMLInputElement><any>document.getElementById('shippingform')).value;
    var shippingmode = (<HTMLInputElement><any>document.getElementById('shippingmode')).value;
    var accountholder = (<HTMLInputElement><any>document.getElementById('accountholder')).value;
    var accounttype = (<HTMLInputElement><any>document.getElementById('accounttype')).value;
    var accountno = (<HTMLInputElement><any>document.getElementById('accountno')).value;
    var bankname = (<HTMLInputElement><any>document.getElementById('bankname')).value;
    var ifsc = (<HTMLInputElement><any>document.getElementById('ifsc')).value;

    this.shopDetails.shop_location = shippingform;
    this.shopDetails.shippingmode = shippingmode;
    this.shopDetails.account_holder = accountholder;
    this.shopDetails.account_type = accounttype;
    this.shopDetails.account_no = accountno;
    this.shopDetails.bankname = bankname;
    this.shopDetails.ifsc = ifsc;
    this.editPaymentDetails  = false;

    this.shopPaymentUpload = { seller_id: this.sellerId, shippingform: shippingform, shippingmode: shippingmode, accountholder: accountholder, accounttype: accounttype, accountno: accountno, ifsc: ifsc, bankname: bankname};
    this.data.updatePaymentDetailsSettings(this.shopPaymentUpload).subscribe(data=>{
      // console.log(data);
    });
  }

  saveAdvancedDetails(){
    var responseInput = (<HTMLInputElement><any>document.getElementById('responseInput')).value;
    var processInput = (<HTMLInputElement><any>document.getElementById('processInput')).value;
    var cancellInput = (<HTMLInputElement><any>document.getElementById('cancellInput')).value;
    var giftInput = (<HTMLInputElement><any>document.getElementById('giftInput')).checked;
    var deliver_by_date = (<HTMLInputElement><any>document.getElementById('delInput')).checked;
    var rfq = (<HTMLInputElement><any>document.getElementById('rfqInput')).checked;
    var order_confirmation = (<HTMLInputElement><any>document.getElementById('orderInput')).checked;

    this.shopAdvancedUpload = { seller_id: this.sellerId, responseInput: responseInput, processInput: processInput, cancellInput: cancellInput, giftInput: giftInput, deliver_by_date: deliver_by_date, rfq: rfq, order_confirmation: order_confirmation};
    this.data.updateAdvancedDetailsSettings(this.shopAdvancedUpload).subscribe(data=>{
      // console.log(data);
    });
    
  }

  saveLocationDetails(id : any ="default"){
    var primaryArea = (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value;
    var SecondaryArea = (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).value;
    (<HTMLInputElement><any>document.getElementById('inputForPincode')).innerText = SecondaryArea;

    this.locationDetails.location_alias = primaryArea;

    this.editShippingLocations = { sellerId : this.sellerId , primaryArea : primaryArea , SecondaryArea : SecondaryArea };
    this.editLocation = false;

    if(id == "default"){
      this.data.uploadShippingLocations(this.editShippingLocations).subscribe(data=>{

      })
    }
    else{
      this.editShippingLocations = { sellerId : this.sellerId , primaryArea : primaryArea , SecondaryArea : SecondaryArea,shop_id : id };
      this.data.updateShippingLocation(this.editShippingLocations).subscribe(data=>{

      })
    }

    this.editLocation = false;
    (<HTMLInputElement><any>document.getElementById('inputForShippingPrimary')).style.display = 'block';
  }

  uploadMainImage(){
    
  }

  onCoverClick(event) {
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			imageCoverValue = text;
      console.log(imageCoverValue);
      (<HTMLInputElement><any>document.getElementById('mainImageSrc')).src = imageCoverValue; 
		};
	}
  onProductOneClick(event) {
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			productOneValue = text;
      console.log(productOneValue);
      (<HTMLInputElement><any>document.getElementById('productOneSrc')).src = productOneValue; 
		};
  }
  
  deleteShippingLocation(id : any){
    var result = confirm("Want to delete?");
    if (result) {
        this.data.deleteLocation(id).subscribe(data=>{
          
        });
    }
  }
  onProductTwoClick(event) {
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			productTwoValue = text;
      console.log(productTwoValue);
      (<HTMLInputElement><any>document.getElementById('productTwoSrc')).src = productTwoValue; 
		};
	}
  onProductThreeClick(event) {
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			productThreeValue = text;
      console.log(productThreeValue);
      (<HTMLInputElement><any>document.getElementById('productThreeSrc')).src = productThreeValue; 
		};
	}
  editLocations(){
    this.editLocation = true;
    (<HTMLInputElement><any>document.getElementById('editShippingLocation')).style.display = 'none'; 
    
  }

  openDropdownShipping(){
    (<HTMLInputElement><any>document.getElementById('myUL1')).style.display ="block";
  }
  openDropdownArea(){
    // (<HTMLInputElement><any>document.getElementById('myUL2')).style.display ="block";
  }

  replaceTextArea(text : any){
    (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).value = text;
    (<HTMLInputElement><any>document.getElementById('myUL2')).style.display ="none";
  }

  replaceTextLocation(text : any){
    (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value = text;
    (<HTMLInputElement><any>document.getElementById('myUL1')).style.display ="none";
    (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).style.display ="block";
    if(text == "All over India"){
      (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).style.display ="none";
      this.data.getDropdownForShipping(text).subscribe(data=>{
        this.valueDrop = data;
      })
    }
    else{
      this.data.getDropdownForShipping(text).subscribe(data=>{
        this.valueDrop = data;
      })
    }
  }

  editExistingLocations(){
    this.editLocation = true;
    (<HTMLInputElement><any>document.getElementById('inputForShippingPrimary')).style.display = 'none';
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
