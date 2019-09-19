import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { parseHttpResponse } from 'selenium-webdriver/http';


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
  varient: any = "";
  maxOrderQuant: any;
  minOrderQuant: any;
  Objects = Object;
  spec: any;
  counter: any;
  token: object;
  temp: "";
  checkoutForm: FormGroup;
  newTask = '';
  curVal: any;
  userId: any = 1;
  i: number = 0;

  constructor(private data: DataService, private cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      customername: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })


  }

  ngOnInit() {
    this.data.getcart(this.userId).subscribe(data => {
      var temp = '0';
      this.dynamicDataDate = data;
      this.dynamicDataPrice = data;
      for(this.i=0;this.i<this.dynamicDataDate.length;this.i++){
        temp += "," + this.dynamicDataDate[this.i].prodId;
      }  
      this.data.getproduct(temp).subscribe(data => {
        this.dynamicData = data;
        // console.log(this.dynamicData);
      });   
    }
    );
    
    

    this.data.getaddress().subscribe(data => {
      this.dynamicDataAddress = data;
      // console.log(this.dynamicDataAddress);
    },
    );
  }
  // dynamicDataRight(dynamicDataRight: any) {
  //   throw new Error("Method not implemented.");
  // }


  //Qty counter
  count_inc(id, maxOrderQuant) {
    this.curVal = (document.getElementById(id).value as HTMLElement);
    this.curVal = Number(this.curVal);
    if (this.curVal < maxOrderQuant) {
      this.curVal++;
      document.getElementById(id).value = this.curVal.toString();

    }
  }
  count_dec(id, minOrderQuant) {
    this.curVal = (document.getElementById(id).value as HTMLElement);
    this.curVal = Number(this.curVal);
    if (this.curVal > minOrderQuant) {
      this.curVal -= 1;
      document.getElementById(id).value = this.curVal.toString();
    }
  }

  //removebtn
  remove(id) {
    document.getElementById("product"+id).style.display="none";
    // this.setCookie("userId",1);
    var userId = this.getCookie("userId");
    this.data.deleteCartProductfn(id,userId).subscribe(data =>{
      alert("success");
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
