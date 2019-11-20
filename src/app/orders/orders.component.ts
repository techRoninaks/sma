import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
var orderCount2: any=0;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  i: number = 0;
  status: any =[];
  stage_0: boolean = false;
  cancelled: boolean = true;
  stage1_dot: boolean = true;
  stage1_full: boolean = false;
  stage2_dot: boolean = true;
  stage2_full: boolean = false;
  stage3_dot: boolean = true;
  stage3_full: boolean = false;
  stage4_dot: boolean = true;
  stage4_full: boolean = false;
  stage5_dot: boolean = true;
  stage5_full: boolean = false;
  stage6_dot: boolean = true;
  stage6_full: boolean = false;
  constructor(private data: DataService,private router: Router,private route: ActivatedRoute,private cookieService: CookieService) { }
  id: any;
  dynamicDataOrderDataAll: any=[];
  ngOnInit() {
    this.id = this.getCookie("userId");
    this.data.getAllOrderUser(this.id).subscribe(
      data=>{
        this.i =0;
        this.dynamicDataOrderDataAll=data;
        this.status = data['orderStatus'];
        console.log(this.dynamicDataOrderDataAll);
        orderCount2= this.dynamicDataOrderDataAll['orderCount'];
        while(this.i < orderCount2)
        {
          this.status = this.dynamicDataOrderDataAll[this.i]['orderStatus'];
          if(this.status == "cancelled")
          {
            this.cancelled = false;
          }
          else if(this.status == "pending confirmation")
          {
            this.stage1_dot = false;
            this.stage1_full = true;
            this.stage_0 =true;
          } 
          else if(this.status == "pending payment")
          {
            this.stage1_dot = false;
            this.stage1_full = true;
            this.stage2_dot = false;
            this.stage2_full = true;
          }
          else if(this.status == "processing")
          {
            this.stage1_dot = false;
            this.stage1_full = true;
            this.stage2_dot = false;
            this.stage2_full = true;
            this.stage3_dot = false;
            this.stage3_full = true;
          }
          else if(this.status == "shipped")
          {
            this.stage1_dot = false;
            this.stage1_full = true;
            this.stage2_dot = false;
            this.stage2_full = true;
            this.stage3_dot = false;
            this.stage3_full = true;
            this.stage4_dot = false;
            this.stage4_full = true;
          }
          else if(this.status == "delivered")
          {
            this.stage1_dot = false;
            this.stage1_full = true;
            this.stage2_dot = false;
            this.stage2_full = true;
            this.stage3_dot = false;
            this.stage3_full = true;
            this.stage4_dot = false;
            this.stage4_full = true;
            this.stage5_dot = false;
            this.stage5_full = true;
          }
          else if(this.status == "closed")
          {
            this.stage1_dot = false;
            this.stage1_full = true;
            this.stage2_dot = false;
            this.stage2_full = true;
            this.stage3_dot = false;
            this.stage3_full = true;
            this.stage4_dot = false;
            this.stage4_full = true;
            this.stage5_dot = false;
            this.stage5_full = true;
            this.stage6_dot = false;
            this.stage6_full = true;
          }
          this.i++;
        }
      },
      error=> console.error(error)
    );
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
