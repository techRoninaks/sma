import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

var imageCoverValue : any = 1 ;
var productTwoValue : any = 1 ;
var productOneValue : any = 1 ;
var productThreeValue : any = 1 ;
var slideIndex = 1;

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
  idCardImgSrcFront : any = "";
  idCardImgSrcBack : any = "";
  frontFlag: boolean = false;
  backFlag: boolean = false;
  shippinglocationArray: Object;
  shippingArray: any = [];
  arrayPos: any;
  selectArrayCell: any;
  allFlag : boolean = true;

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
        this.idCardImgSrcFront ="assets/images/seller/"+this.sellerId+"/"+this.sellerId+"idfront.jpg"; 
        this.idCardImgSrcBack ="assets/images/seller/"+this.sellerId+"/"+this.sellerId+"idback.jpg"; 
        
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
        this.shippingArray = data;
        for(var i = 0; i< this.shippingArray.length; i++){
          if(this.shippingArray[i]=="All over India"){
            this.allFlag = false;
          }
          if(this.shippingArray[i]=="My State"){
            this.allFlag = false;
          }
          if(this.shippingArray[i]=="My City"){
            this.allFlag = false;
          }
          if(this.shippingArray[i]=="My District"){
            this.allFlag = false;
          }
        }
        // if(this.locationDetails.length == 0){
        //   this.newShipping = true;
        // }
      })
      this.data.getCategoryForSetting().subscribe(data=>{
        this.shopCategory = data;
      })
    }

    document.getElementById('mainImageHolder').addEventListener('change', this.onCoverClick.bind(this));
    document.getElementById('productOneImageHolder').addEventListener('change', this.onProductOneClick.bind(this));
    document.getElementById('productTwoImageHolder').addEventListener('change', this.onProductTwoClick.bind(this));
    document.getElementById('productThreeImageHolder').addEventListener('change', this.onProductThreeClick.bind(this));
    document.getElementById('idCardHolderFront').addEventListener('change', this.onIdCardClick.bind(this));
    document.getElementById('idCardHolderBack').addEventListener('change', this.onIdCardClickBack.bind(this));
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
      var modeArray = this.shopDetails['shippingmode'].split(',');
      setTimeout(()=>{    //<<<---    using ()=> syntax
        for(var i = 0; i < modeArray.length; i++){
          if(modeArray[i]=="home delivery"){
            (<HTMLInputElement><any>document.getElementById('homeid')).checked = true;
          }
          if(modeArray[i]=="shipping"){
            (<HTMLInputElement><any>document.getElementById('shippingid')).checked = true;
          }
          if(modeArray[i]=="pickup"){
            (<HTMLInputElement><any>document.getElementById('pickupid')).checked = true;
          }
        }
      }, 2000);

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
    var shippingmode = (<HTMLInputElement><any>document.getElementById('shippingid')).checked;
    var homemode = (<HTMLInputElement><any>document.getElementById('homeid')).checked;
    var pickupmode = (<HTMLInputElement><any>document.getElementById('pickupid')).checked;
    var accountholder = (<HTMLInputElement><any>document.getElementById('accountholder')).value;
    var accounttype = (<HTMLInputElement><any>document.getElementById('accounttype')).value;
    var accountno = (<HTMLInputElement><any>document.getElementById('accountno')).value;
    var accountnoConfirm = (<HTMLInputElement><any>document.getElementById('accountnoConfirm')).value;
    var bankname = (<HTMLInputElement><any>document.getElementById('bankname')).value;
    var ifsc = (<HTMLInputElement><any>document.getElementById('ifsc')).value;
    var shippingModeBlock =  "";
    if(shippingmode){
      shippingModeBlock = shippingModeBlock + "shipping,"
    }
    if(homemode){
      shippingModeBlock = shippingModeBlock + "home delivery,"
    }
    if(pickupmode){
      shippingModeBlock = shippingModeBlock + "pickup"
    }
    if(accountno != accountnoConfirm){
      alert("Account number mismatch");
      return;
    }

    this.shopDetails.shop_location = shippingform;
    this.shopDetails.shippingmode = shippingmode;
    this.shopDetails.account_holder = accountholder;
    this.shopDetails.account_type = accounttype;
    this.shopDetails.account_no = accountno;
    this.shopDetails.bankname = bankname;
    this.shopDetails.ifsc = ifsc;
    this.editPaymentDetails  = false;

    for(var i = 0; i<this.shippingArray.length; i++){
      this.shippingArray[i] = this.shippingArray[i].replace(/,/g, '_');
    }

    this.shopPaymentUpload = { seller_id: this.sellerId, shippingform: shippingform, shippingmode: shippingModeBlock, accountholder: accountholder, accounttype: accounttype, accountno: accountno, ifsc: ifsc, bankname: bankname, shippingLoc: this.shippingArray};
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

  saveLocationDetails(){
    var primaryArea = (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value;
    if(primaryArea == "All over India"){
      this.allFlag = false;
    }
    if(primaryArea=="My State"){
      this.allFlag = false;
    }
    if(primaryArea=="My City"){
      this.allFlag = false;
    }
    if(primaryArea=="My District"){
      this.allFlag = false;
    }
    this.shippingArray.push(primaryArea);
    (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value = "";
  }
  deleteShipping(cell){
    if(cell == "All over India"){
      this.allFlag = true;
    }
    if(cell=="My State"){
      this.allFlag = true;
    }
    if(cell=="My City"){
      this.allFlag = true;
    }
    if(cell=="My District"){
      this.allFlag = true;
    }
    this.shippingArray.splice( this.shippingArray.indexOf(cell), 1 );
  }

  editShippingLocation(pos, item){
    (<HTMLInputElement><any>document.getElementById(pos+'_pShip')).style.display="none";
    (<HTMLInputElement><any>document.getElementById(pos+'_closeShip')).style.display="none";
    (<HTMLInputElement><any>document.getElementById(pos+'_editShip')).style.display="none";
    (<HTMLInputElement><any>document.getElementById("updateBtn")).style.display="block";
    (<HTMLInputElement><any>document.getElementById("saveBtn")).style.display="none";
    (<HTMLInputElement><any>document.getElementById("shippingLocationPrimary")).value=item;
    this.arrayPos = pos;
    this.selectArrayCell = item;
    // (<HTMLInputElement><any>document.getElementById(pos+'_updateShip')).style.display="block";
  }

  updateShipping(){
    var loc = (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value;
    var index = this.shippingArray.indexOf(this.selectArrayCell);
    this.shippingArray[index] = loc;
    (<HTMLInputElement><any>document.getElementById(this.arrayPos+'_pShip')).style.display="block";
    (<HTMLInputElement><any>document.getElementById(this.arrayPos+'_closeShip')).style.display="block";
    (<HTMLInputElement><any>document.getElementById(this.arrayPos+'_editShip')).style.display="block";
    (<HTMLInputElement><any>document.getElementById(this.arrayPos+'_inputShip')).style.display="none";
    (<HTMLInputElement><any>document.getElementById(this.arrayPos+'_updateShip')).style.display="none";
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
        this.frontFlag = true;
      };
  }
  
  onIdCardClick(event) {
    var check = confirm("Are you sure, id card will be changed");
    if(check){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        var text: any = reader.result;
        this.idCardImgSrcFront = text;
        this.backFlag = true;
      };
    }
	}
  onIdCardClickBack(event) {
    var check = confirm("Are you sure, id card will be changed");
    if(check){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        var text: any = reader.result;
        this.idCardImgSrcBack = text;
        this.frontFlag = true;
      };
    }
  }
  
  uploadIdCardToServer(){
    if(this.frontFlag && this.backFlag){
      this.data.uploadIdcardimage(this.idCardImgSrcFront,this.idCardImgSrcBack, this.sellerId).subscribe(data=>{

      })
    }
    else{
      console.log(this.frontFlag);  
      console.log(this.backFlag);  
      
    }
  }


  shippingLocationGetter(){
    var search = (<HTMLInputElement><any>document.getElementById("shippingLocationPrimary")).value;
    (<HTMLInputElement><any>document.getElementById("myUL1")).style.display = "block";
    this.data.getAutoShippingLocation(search).subscribe(data=>{
      this.shippinglocationArray = data;
    })
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

  replaceTextLocation(pin : any, text: any = ""){
    if(text == ""){
      (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value = pin;
      (<HTMLInputElement><any>document.getElementById('myUL1')).style.display ="none";
      (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).style.display ="block";
    }
    else{
      (<HTMLInputElement><any>document.getElementById('shippingLocationPrimary')).value = pin+","+text;
      (<HTMLInputElement><any>document.getElementById('myUL1')).style.display ="none";
      (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).style.display ="block";
    }

    // if(text == "All over India"){
    //   (<HTMLInputElement><any>document.getElementById('shippingLocationSecondary')).style.display ="none";
    //   this.data.getDropdownForShipping(text).subscribe(data=>{
    //     this.valueDrop = data;
    //   })
    // }
    // else{
    //   this.data.getDropdownForShipping(text).subscribe(data=>{
    //     this.valueDrop = data;
    //   })
    // }
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
  openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("lightBox").style.display = "block";
  }
  
  // Close the Modal
  closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
}

