import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { parseHttpResponse } from 'selenium-webdriver/http';
var dropDownAddrId: any = "";
var imageValue: any = "";
export interface User {
  name: string;
}

var slideIndex = 1;
declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  submitted: boolean;
  dynamicData: any = "";
  dynamicDataDate: any = "";
  dynamicDataPrice: any = "";
  dynamicDataAddress: any = "";
  dynamicDataProName: any = "";
  dynamicDataVariant: any = "";
  dynamicDataVariants: any = "";
  dynamicDataUser: any = "";
  filteredOptions: any = "";
  dynamicDataCartDate: any = "";
  dynamicDataCart: any = "";
  varient: any = "";
  maxOrderQuant: any;
  minOrderQuant: any;
  dynamicDataDeliverAddr: any;
  Objects = Object;
  spec: any;
  counter: any;
  token: object;
  temp: "";
  formAddress: object;
  checkoutForm: FormGroup;
  newTask = '';
  curVal: any;
  userId: any;
  i: number = 0;
  cookieCart: any;
  Name: any;
  email: any;
  phone1: any;
  variantValue: { prodid: any; userid: any; };
  TotalPrice: any;
  dynamicDataCustomerOrder: any;
  dynamicDataSecondAddress: any;
  dynamicMsgTitle: any;
  dateChoosen: any;
  dynamicNewAddr: any;
  orderid: any;
  prodId: any;
  flagLog: boolean = false;
  calculatedPrice: any;
  dynamicOffPrice: any = "";
  // prodImage: any = "";
  // imagesCount: any = [];
  prod: any = [];
  cartImg: any;
  dynamicCartProdDisc: any;
  dynamicVariantInfo: any = [];
  dynamicShippingPrice: any = [];
  activeStatusCheckOut: any;
  datePickerDefaultCheckOut: any;
  pincode: any = [];
  tokenDeliveryPrice: object;
  deliveryOption: any =[];
  dynamicOfferCart: any =[];

  constructor(private data: DataService, private cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      reg_address1: ['', Validators.required],
      reg_address2: ['', Validators.required],
      reg_city: ['', Validators.required],
      reg_dist: ['', Validators.required],
      reg_state: ['', Validators.required],
      reg_country: ['', Validators.required],
      reg_pin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })


  }

  ngOnInit() {

    this.cookieCart = this.getCookie('userId');

    if (this.getCookie("isLoggedIn") == "0") {
      this.flagLog = false;
    }
    else if
      (this.getCookie("isLoggedIn") == "1") {
      this.flagLog = true;
    }

    this.data.getcart(this.cookieCart).subscribe(data => {
      var temp = '0';
      // console.log(data);
      this.dynamicDataDate = data;
      this.dynamicDataPrice = data;
      this.dynamicDataCart = data;
      this.prodId = this.dynamicDataDate[0].prodId;
      // this.counter = this.dynamicData.minOrderQuant;
      // this.counter 
      for (this.i = 0; this.i < this.dynamicDataDate.length; this.i++) {
        temp += "," + this.dynamicDataDate[this.i].prodId;
      }
      this.data.getproduct(temp).subscribe(data => {
        this.dynamicData = data;

        this.data.variantInfoCartChosen(this.prodId).subscribe(data => {
          this.dynamicVariantInfo = data;
          console.log(this.dynamicVariantInfo);
        },
        );
        var addrSplit = (<HTMLInputElement><any>document.getElementById("dropDownAddrId")).value;
        var addressSplit = addrSplit.split(",")
        var pincode = addressSplit[6];
        this.data.cartDeliveryPrice(this.prodId,pincode,data).subscribe(data => {
          this.dynamicShippingPrice = data;
          console.log(this.dynamicShippingPrice);
        },
        );
        this.data.dynamicOfferCart(this.prodId).subscribe(data => {
          this.dynamicOfferCart = data;
          console.log(this.dynamicOfferCart);
        },
        );

      });
    }
    );
    this.data.deliverAddrCart(this.cookieCart).subscribe(data => {
      this.dynamicDataDeliverAddr = data;
      console.log(this.dynamicDataAddress);
    },
    );


  }

  changeShippingOption(pos){
    var addrSplit = (<HTMLInputElement><any>document.getElementById("dropDownAddrId")).value;
    var addressSplit = addrSplit.split(",")
    var pincode = addressSplit[6];

    var productQuantity = (<HTMLInputElement><any>document.getElementById(this.dynamicData[pos].productId)).value;
    var ship = (<HTMLInputElement><any>document.getElementById("shipping")).checked;
    var cod = (<HTMLInputElement><any>document.getElementById("homedelivery")).checked;
    var pickup = (<HTMLInputElement><any>document.getElementById("pickup")).checked;
    
    var deliveryOption = "";

    if (ship == true) {
      deliveryOption = "shipping";
    }
    else if (cod == true) {
      deliveryOption = "homedelivery";
    }
    else if (pickup == true) {
      deliveryOption = "pickup";
    } 
    // alert(productQuantity);
    this.tokenDeliveryPrice = { productQuantity : productQuantity, deliveryOption : deliveryOption }
    this.data.cartDeliveryPrice(this.prodId,pincode,this.tokenDeliveryPrice).subscribe(data => {
      this.dynamicShippingPrice = data;
      console.log(this.dynamicShippingPrice);
    },
    );
  }

  
  placeOrder(pos) {
    
    
    var addrSplit = (<HTMLInputElement><any>document.getElementById("dropDownAddrId")).value;
    var addressSplit = addrSplit.split(",")
    var pincode = addressSplit[6];

    var productQuantity = (<HTMLInputElement><any>document.getElementById(this.dynamicData[pos].productId)).value;
    var ship = (<HTMLInputElement><any>document.getElementById("shipping")).checked;
    var cod = (<HTMLInputElement><any>document.getElementById("homedelivery")).checked;
    var pickup = (<HTMLInputElement><any>document.getElementById("pickup")).checked;
    
    var deliveryOption = "";

    if (ship == true) {
      deliveryOption = "shipping";
    }
    else if (cod == true) {
      deliveryOption = "homedelivery";
    }
    else if (pickup == true) {
      deliveryOption = "pickup";
    } 
    // alert(productQuantity);
    this.tokenDeliveryPrice = { productQuantity : productQuantity, deliveryOption : deliveryOption }
    this.data.cartDeliveryPrice(this.prodId,pincode,this.tokenDeliveryPrice).subscribe(data => {
      this.dynamicShippingPrice = data;
      console.log(this.dynamicShippingPrice);
    },
    );

    this.data.deleteCartProductfn("all", this.cookieCart, this.prodId, this.curVal,pincode ).subscribe(data => {
      this.dynamicOffPrice = data;
      console.log(this.dynamicOffPrice)
      this.dynamicCartProdDisc = data;
      this.orderid = data;

      dropDownAddrId = (<HTMLSelectElement>document.getElementById("dropDownAddrId")).value;
      (<HTMLSelectElement>document.getElementById("AddrIdChange")).innerHTML = dropDownAddrId;
      console.log(dropDownAddrId);

      this.data.getaddress(this.cookieCart).subscribe(
        data => {
          this.dynamicDataAddress = data;
        },
        error => console.error(error)
      );
      this.data.getprodCheckout(this.prodId).subscribe(
        data => {
          this.dynamicDataProName = data;
        },
        error => console.error(error)
      );
      this.data.getuserCheckout(this.cookieCart).subscribe(
        data => {
          this.dynamicDataUser = data;
          this.Name = this.dynamicDataUser.Name;
          this.email = this.dynamicDataUser.email;
          this.phone1 = this.dynamicDataUser.phone1;
        },
        error => console.error(error)
      );
      this.data.getCustomerOrderCheckout(this.orderid).subscribe(
        data => {
          this.dynamicDataCustomerOrder = data;
          this.TotalPrice = this.dynamicDataCustomerOrder.totalPrice;
        },
        error => console.error(error)
      );
      // console.log(this.variantValue);
      this.variantValue = { prodid: this.prodId, userid: this.cookieCart }
      console.log(this.variantValue);
      this.data.getvariantInfor(this.variantValue).subscribe(
        data => {
          this.dynamicDataVariant = data;
        },
        error => console.error(error)
      );
      // this.data.variantInfoCartChosen(this.prodId).subscribe(data => {
      //   this.dynamicVariantInfo = data;
      //   console.log(this.dynamicVariantInfo);
      // },
      // ); 

      this.data.getAddressChange(this.cookieCart).subscribe(
        data => {
          this.dynamicDataSecondAddress = data;
          console.log(this.dynamicDataSecondAddress);
        },
        error => console.error(error)
      );

      // this.data.getMsgTitleProCheckout(this.orderid).subscribe(
      //   data => {
      //     this.dynamicMsgTitle = data;
      //     console.log(this.dynamicMsgTitle);
      //   },
      //   error => console.error(error)
      // );

     
    });

  }

  addrUndeliverable() { 
    var addrSplit = (<HTMLInputElement><any>document.getElementById("dropDownAddrId")).value;
    var addressSplit = addrSplit.split(",")
    var pincode = addressSplit[6];
    this.data.cartDeliveryPrice(this.prodId,pincode,this.data).subscribe(data => {
      this.dynamicShippingPrice = data;
      console.log(this.dynamicShippingPrice);
    },
    );

  }


  reqDatePickerDelivery() {
    var x = (<HTMLInputElement><any>document.getElementById("reqDatePicker")).value.length;
    // console.log(x);
    if (x != 0) {
      if (this.activeStatusCheckOut == "inactive") {
        (<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "none";
        (<HTMLInputElement><any>document.getElementById("reqId")).style.display = "block";
      } else {
        this.datePickerDefaultCheckOut = 0;
        (<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "none";
        (<HTMLInputElement><any>document.getElementById("reqId")).style.display = "block";
        // alert("Checkout changed to Request Order");
      }
    }
    else {
      if (this.activeStatusCheckOut == "inactive") {
        (<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "none";
        (<HTMLInputElement><any>document.getElementById("reqId")).style.display = "block";
      } else {
        this.datePickerDefaultCheckOut = 1;
        (<HTMLInputElement><any>document.getElementById("checkOutId")).style.display = "block";
        (<HTMLInputElement><any>document.getElementById("reqId")).style.display = "none";
        // alert("Request Order changed to Checkout);
      }
    }
    document.getElementById('ApplyTextMsgId').style.display = "none";
  }

  checkout() {
    var shippingtType;
    // this.shipping_id = (<HTMLInputElement>document.querySelector('DeliveryOption')).value;
    if ((<HTMLInputElement><any>document.getElementById("shipping")).checked) {
      shippingtType = "1";
    }
    else if ((<HTMLInputElement><any>document.getElementById("homedelivery")).checked) {
      shippingtType = "2";
    }
    else if ((<HTMLInputElement><any>document.getElementById("pickup")).checked) {
      shippingtType = "3";
    }
    else {
      alert("Select a delivery type");
      return;
    }
    // this.data.getcheckoutFinal(this.formAddress).subscribe();

    // this.id = "3";
    this.data.getcheckoutFinal(this.getCookie("userId"), shippingtType).subscribe();
    var options = {
      "key": "rzp_test_dveDexCQKoGszl",
      "amount": Math.round(this.TotalPrice * 100), // 2000 paise = INR 20
      "currency": "INR",
      "name": "ScoopMyArt",
      "description": this.dynamicDataProName.name,
      "image": "favicon.ico", "handler": response => {
        alert("Booking successful. Thank you!");
      },
      "prefill": {
        "name": this.Name,
        "email": this.email,
        "contact": this.phone1,
      },
      "notes": {},
      "theme": {
        "color": "#133E4B"
      },
      "modal": {
        "ondismiss": function () { }
      }
    };
    console.log(Math.round(this.TotalPrice));
    console.log(options);
    var rzp1 = new Razorpay(options); rzp1.open();
  }



  btnDeliverAddress1() {
    document.getElementById('Main-Address').innerHTML = document.getElementById('Deliver-Addr1').innerHTML;
  }

  btnDeliverAddress2() {
    document.getElementById('Main-Address').innerHTML = document.getElementById('Deliver-Addr2').innerHTML;
  }

  applyRequest() {
    this.dateChoosen = (<HTMLInputElement><any>document.getElementById('reqDatePicker')).value;
    if (this.dateChoosen != "") {
      document.getElementById('checkOutId').style.display = "none";
      document.getElementById('reqId').style.display = "block";
    }
    else {
      alert('pick a date');
    }
    document.getElementById('ApplyTextMsgId').style.display = "block";
  }

  reqDateNow() {

    alert("your request has been sent");
  }




  //Qty counter
  count_inc(id, maxOrderQuant) {
    this.curVal = (<HTMLInputElement><unknown>document.getElementById(id)).value;
    this.curVal = Number(this.curVal);
    if (this.curVal < maxOrderQuant) {
      this.curVal++;
      (<HTMLInputElement><unknown>document.getElementById(id)).value = this.curVal.toString();

    }

    this.calculatedPrice = this.dynamicData[0].basePrice * this.curVal
    // alert(this.calculatedPrice);
  }
  count_dec(id) {
    this.curVal = (<HTMLInputElement><unknown>document.getElementById(id)).value;
    this.curVal = Number(this.curVal);
    if (this.curVal) {
      this.curVal -= 1;
      (<HTMLInputElement><unknown>document.getElementById(id)).value = this.curVal.toString();
    }
    this.calculatedPrice = this.dynamicData[0].basePrice * this.curVal
  }

  //checkout pop showformgrp
  showFormGrp() {
    document.getElementById('formGroup').style.display = "block";
  }
  //checkout showSavedAddr
  showSavedAddr() {
    document.getElementById('savedAddr').style.display = "block";
  }

  formSave() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      alert("Enter Details");
    }
    else {
      var contact_name = (<HTMLInputElement><any>document.getElementById("contactName-Form")).value;
      var addr1 = (<HTMLInputElement><any>document.getElementById("addr1-Form")).value;
      var addr2 = (<HTMLInputElement><any>document.getElementById("addr2-Form")).value;
      var country = (<HTMLInputElement><any>document.getElementById("country-Form")).value;
      var city = (<HTMLInputElement><any>document.getElementById("city-Form")).value;
      var district = (<HTMLInputElement><any>document.getElementById("District-Form")).value;
      var contact_email = (<HTMLInputElement><any>document.getElementById("contact-Email-Form")).value;
      var state = (<HTMLInputElement><any>document.getElementById("state-Form")).value;
      var pincode = (<HTMLInputElement><any>document.getElementById("pincode-Form")).value;
      var contact_number = (<HTMLInputElement><any>document.getElementById("contact-Number-Form")).value;

      this.formAddress = { contact_name: contact_name, addr1: addr1, addr2: addr2, country: country, city: city, district: district, contact_email: contact_email, state: state, pincode: pincode, contact_number: contact_number };

      this.data.getsaveNewAddress(this.formAddress, this.orderid).subscribe();
      // this.id = "2";
      this.data.getNewAddr(this.orderid).subscribe(
        data => {
          this.dynamicNewAddr = data;
          // console.log(this.dynamicNewAddr);
        },
        error => console.error(error)
      );
      document.getElementById('formGroup').style.display = "none";
    }
  }


  //checkout giftoption
  giftoption() {
    // Cookie Section BEGN

    //setting cookies , remove on commit


    //get data from cookies
    var giftTitle = this.getCookie("giftTitle");
    var giftNote = this.getCookie("giftNote");
    var giftAdd = this.getCookie("giftAddress");

    var addr1 = giftAdd.split("!~!")
    var addr2 = giftAdd.split("!~!")
    var addr3 = giftAdd.split("!~!")
    var addr4 = giftAdd.split("!~!")
    var addr5 = giftAdd.split("!~!")
    var addr6 = giftAdd.split("!~!")
    var addr7 = giftAdd.split("!~!")

    document.getElementById("Gift-Note-Sect1").innerText = (giftTitle + "  " + giftNote + "  " + addr1[0] + " " + addr2[1] + " " + addr3[2] + " " + addr4[3] + " " + addr5[4] + " " + addr6[5] + " " + addr7[6]);

    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[0]);
    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[1]);
    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[2]);
    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[3]);
    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[4]);
    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[5]);
    // document.getElementById("Gift-Note-Sect1").innerText = (addr1[6]);

    var giftOptionState = (<HTMLInputElement><any>document.getElementById("giftOption")).checked;
    // console.log(giftOptionState);


    if (giftOptionState) {
      // giftOptionCard = 1;
      document.getElementById('showGiftCard').style.display = "block";
    }
    else {
      document.getElementById('showGiftCard').style.display = "none";
    }
    // giftOptionCard = 0;
  }

  //removebtn
  remove(id) {
    document.getElementById("product" + id).style.display = "none";
    // this.setCookie("userId",1);
    // var cookieCart = this.getCookie("userId");
    this.data.deleteCartProductfn(id, this.cookieCart, this.prodId, this.pincode , "none").subscribe(data => {
      // alert("success");
    })

  }

  //Cookies
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
