import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { parseHttpResponse } from 'selenium-webdriver/http';

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
  userId: any ;
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
  calculatedPrice : any ;

  constructor(private data: DataService, private cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      customername: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })


  }

  ngOnInit() {

    this.cookieCart=this.getCookie('userId');

    if(this.getCookie("isLoggedIn") == "0")
    {
      this.flagLog =false;
    }
    else if
    (this.getCookie("isLoggedIn") == "1")
    {
      this.flagLog = true;
    }
    
    this.data.getcart(this.cookieCart).subscribe(data => {
      var temp = '0';
      console.log(data);
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
        // this.minOrderQuant = this.dynamicData.minOrderQuant;
				// this.maxOrderQuant = this.dynamicData.maxOrderQuant;
        // console.log(this.dynamicData);
      });
    }
    );
    this.data.deliverAddrCart(this.cookieCart).subscribe(data => {
      this.dynamicDataDeliverAddr = data;
      // console.log(this.dynamicDataAddress);
    },
    );

    this.data.insertCartProCus(this.cookieCart).subscribe() ;
  }

  // getCookie(arg0: string): any {
  //   throw new Error("Method not implemented.");
  // }
  
  placeOrder(){
    this.data.deleteCartProductfn("all",this.cookieCart, this.prodId , this.curVal ).subscribe( data=>{
      this.orderid = data;

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
    this.variantValue={prodid:this.prodId, userid:this.cookieCart}
    console.log(this.variantValue);
    this.data.getvariantInfor(this.variantValue).subscribe(
      data => {
        this.dynamicDataVariant = data;
        // this.dynamicDataVariants = data;
      },
      error => console.error(error)
    );
  
    this.data.getAddressChange(this.cookieCart).subscribe(
      data => {
        this.dynamicDataSecondAddress = data;
        console.log(this.dynamicDataSecondAddress);
      },
      error => console.error(error)
    );
  
    this.data.getMsgTitleProCheckout(this.orderid).subscribe(
      data => {
        this.dynamicMsgTitle = data;
        console.log(this.dynamicMsgTitle);
      },
      error => console.error(error)
    );
    });
    

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

  applyRequest(){
		this.dateChoosen = (<HTMLInputElement><any>document.getElementById('reqDatePicker')).value;
		if(this.dateChoosen != ""){
			document.getElementById('checkOutId').style.display = "none";
			document.getElementById('reqId').style.display = "block";
		}
		else{
			alert('pick a date');
		}

	}

	reqDateNow(){
		
		alert("your request has been sent");
	}
  

  // this.data.insertCartProCus(this.user_id).subscribe(data => {
  //   this.user_id = data["user_id"];
  //   console.log(this.orderid);
  //   this.data.getaddress(this.user_id).subscribe(
  //     data => {
  //       this.dynamicDataAddress = data;
  //     },
  //     error => console.error(error)
  //   );


  //Qty counter
  count_inc(id, maxOrderQuant) {
    this.curVal = (<HTMLInputElement><unknown>document.getElementById(id)).value;
    this.curVal = Number(this.curVal);
    if (this.curVal < maxOrderQuant) {
      this.curVal++;
      (<HTMLInputElement><unknown>document.getElementById(id)).value = this.curVal.toString();

    }
    
    this.calculatedPrice = this.dynamicData[0].basePrice*this.curVal
    alert(this.calculatedPrice);
  }
  count_dec(id, minOrderQuant) {
    this.curVal = (<HTMLInputElement><unknown>document.getElementById(id)).value;
    this.curVal = Number(this.curVal);
    if (this.curVal > minOrderQuant) {
      this.curVal -= 1;
      (<HTMLInputElement><unknown>document.getElementById(id)).value = this.curVal.toString();
    }
    this.calculatedPrice = this.dynamicData[0].basePrice*this.curVal
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

		this.data.getsaveNewAddress(this.formAddress, this.cookieCart).subscribe();
		// this.id = "2";
		this.data.getNewAddr(this.cookieCart).subscribe(
			data => {
				this.dynamicNewAddr = data;
				// console.log(this.dynamicNewAddr);
			},
			error => console.error(error)
		);

	}
  

  //checkout giftoption
  giftoption() {
    document.getElementById('showGiftCard').style.display = "block";

    var giftTitle = this.getCookie("giftTitle");
		var giftNote = this.getCookie("giftNote");
		var giftAdd = this.getCookie("giftAddress");


		document.getElementById("Gift-Note-Sect1").innerText = (giftTitle + giftNote + giftAdd);
  }

  //removebtn
  remove(id) {
    document.getElementById("product" + id).style.display = "none";
    // this.setCookie("userId",1);
    // var cookieCart = this.getCookie("userId");
    this.data.deleteCartProductfn(id, this.cookieCart, this.prodId,"none").subscribe(data => {
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
