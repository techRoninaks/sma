import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
var imageFront: any ="";
var imageFront2: any ="";
var imageFront3: any ="";
var urlFront1: any ="";
var urlFront2: any ="";
var urlFront3: any ="";
var slideIndex = 1;
var orderIdShort: any="";
var orderIdArray: any =[];
var orderCount: any=0;
var orderCount2: any=0;
var orderid2: any=0;
var orderid3: any=0;
@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {
  i: number = 0;
  k: number = 0;
  l: number = 0;
  j: number = 0;
  Object = Object;
  status: any =[];
  orderId: any="";
  noOrders: boolean = false;
  ind_order: boolean = false;
  order_list: boolean = true;
  cancelStatus: boolean = false;
  cancelledStatus: boolean = false;
  cancelled: boolean = true;
  userAddress: boolean = false;
  stage_0: boolean = false;
  stage_1_dot: boolean = true;
  stage_1_full: boolean = false;
  stage_2_dot: boolean = true;
  stage_2_full: boolean = false;
  stage_3_dot: boolean = true;
  stage_3_full: boolean = false;
  stage_4_dot: boolean = true;
  stage_4_full: boolean = false;
  stage_5_dot: boolean = true;
  stage_5_full: boolean = false;
  stage_6_dot: boolean = true;
  stage_6_full: boolean = false;
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
  noImageDelivered: boolean = false;
  noImageClosed: boolean = false;
  noImageShipped: boolean = false;
  constructor(private data: DataService,private router: Router,private route: ActivatedRoute,private cookieService: CookieService) { }
  id: any;
  sellerName: any;
  track_link: any;
  stage_1_date: any;
  stage_2_date: any;
  stage_3_date: any;
  stage_4_date: any;
  stage_5_date: any;
  stage_6_date: any;
  stageDate :any;
  cancel_reason : any;
  stageName : any ="";
  dynamicOrderData: any = [];
  largeSrc: any;
  dynamicDataOrderData: any=[];
  dynamicDataOrderDataAll: any=[];
  imageDataFront : object;
  imageDataFront2 : object;
  imageDataFront3 : object;
  ngOnInit() {
    (<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display ="block";
    (<HTMLInputElement><any>document.getElementById('mainHeader')).style.display ="none";
    (<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display ="none";
    this.id = this.getCookie("sellerId");
    this.sellerName = this.getCookie("sellerName");
    this.data.getIndividualOrderData(this.id).subscribe(
      data=>{
              this.dynamicOrderData=data;
              this.orderId = data['orderId'];
              var order_stat = data['order_status'];
              if(order_stat == "shipped" || order_stat == "delivered" || order_stat == "closed")
              {
                this.userAddress = true;
              }
            },
        error=> console.error(error)
      );
      this.data.getOrderDataSeller(this.id).subscribe(
        data=>{
          this.i =0;
          this.dynamicDataOrderData=data;
          orderCount= data['orderCount'];
          this.j = orderCount-1;
          orderIdArray = data['orderIdArray'];
          orderIdShort = data['orderIdShort'];
          this.status = data['orderStatus'];
          if(this.status == "cancelled")
          {
            this.cancelledStatus = true;
            this.cancelStatus = true;
          }
          else if(this.status == "pending_confirmation")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_0 =true;
          }
          else if(this.status == "pending_payment")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
          }
          else if(this.status == "processing")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
          }
          else if(this.status == "shipped")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
          }
          else if(this.status == "delivered")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
          }
          else if(this.status == "closed")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
            this.stage_6_dot = false;
            this.stage_6_full = true;
          }
        },
        error=> console.error(error)
      );

      this.data.getAllOrderDataSeller(this.id).subscribe(
        data=>{
          this.i =0;
          this.dynamicDataOrderDataAll=data;
          // console.log(this.dynamicDataOrderDataAll);
          orderCount2= this.dynamicDataOrderDataAll['orderCount'];
          // this.j = orderCount-1;
          // orderIdArray = data['orderIdArray'];
          // orderIdShort = data['orderIdShort'];
          while(this.i < orderCount2)
          {
            this.status = this.dynamicDataOrderDataAll[this.i]['orderStatus'];
            if(this.status == "cancelled")
            {
              this.cancelled = false;
            }
            else if(this.status == "pending_confirmation")
            {
              this.stage1_dot = false;
              this.stage1_full = true;
              this.stage_0 =true;
            } 
            else if(this.status == "pending_payment")
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
  previous(){
    if(this.j > 0)
    {
    orderid2 = orderIdArray[this.j];
    // console.log(orderid2);
    this.data.getIndividualOrderDataPrev(orderid2).subscribe(
      data=>{
              this.dynamicOrderData=data;
              this.orderId = data['orderId'];
              var order_stat = data['order_status'];
              if(order_stat == "pending_payment" || order_stat == "pending_confirmation" || order_stat == "processing")
              {
                this.userAddress = false;
              }
              else{
                this.userAddress = true;
              }
            },
        error=> console.error(error)
      );
      this.data.getOrderDataSellerPrev(orderid2).subscribe(
        data=>{
          this.i =0;
          this.dynamicDataOrderData=data;
          orderIdShort = data['orderIdShort'];
          this.status = data['orderStatus'];
          if(this.status == "pending_confirmation")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
          }
          else if(this.status == "pending_payment")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
          }
          else if(this.status == "processing")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
          }
          else if(this.status == "shipped")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
          }
          else if(this.status == "delivered")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
          }
          else if(this.status == "closed")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
            this.stage_6_dot = false;
            this.stage_6_full = true;
          }
        },
        error=> console.error(error)
      );
      this.j--;
      }
      else{
        this.j= orderCount-1;
        alert("End of list");
        window.location.reload();
      }
  }
  next(){
    if(this.l < orderCount-1)
    {
      orderid3 = orderIdArray[++this.l];
      // console.log(orderid3);
    this.data.getIndividualOrderDataPrev(orderid3).subscribe(
      data=>{
              this.dynamicOrderData=data;
              this.orderId = data['orderId'];
              var order_stat = data['order_status'];
              if(order_stat == "pending_payment" || order_stat == "pending_confirmation" || order_stat == "processing")
              {
                this.userAddress = false;
              }
              else{
                this.userAddress = true;
              }
            },
        error=> console.error(error)
      );
      this.data.getOrderDataSellerPrev(orderid3).subscribe(
        data=>{
          this.i =0;
          this.dynamicDataOrderData=data;
          orderIdShort = data['orderIdShort'];
          this.status = data['orderStatus'];
          if(this.status == "pending_confirmation")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
          }
          else if(this.status == "pending_payment")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
          }
          else if(this.status == "processing")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
          }
          else if(this.status == "shipped")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
          }
          else if(this.status == "delivered")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
          }
          else if(this.status == "closed")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
            this.stage_6_dot = false;
            this.stage_6_full = true;
          }
        },
        error=> console.error(error)
      );
      // this.l++;
    }
    else{
      this.l= 0;
      alert("End of list");
      window.location.reload();
    }
  }
  frontUpload(){
    imageFront=document.getElementById('frontUpload').addEventListener('change', onFrontClick.bind(this));
  }
  frontUpload2(){
    imageFront2=document.getElementById('frontUpload2').addEventListener('change', onFrontClick2.bind(this));
  }
  frontUpload3(){
    imageFront3=document.getElementById('frontUpload3').addEventListener('change', onFrontClick3.bind(this));
  }
  updateStatus(){
    if(this.status == "pending_confirmation" )
    {
      this.stage_2_date = (<HTMLInputElement><any>document.getElementById("stage_2_date")).value;
      this.stageName = "pending_payment";
      this.stageDate = this.stage_2_date;
      this.data.updateStatus(this.stageDate,this.stageName,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
    }
    else if(this.status == "pending_payment")
    {
      this.stage_3_date = (<HTMLInputElement><any>document.getElementById("stage_3_date")).value;
      this.stageDate = this.stage_3_date;
      this.stageName = "processing";
      this.data.updateStatus(this.stageDate,this.stageName,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
    }
    else if(this.status == "processing")
    {
      this.stage_4_date = (<HTMLInputElement><any>document.getElementById("stage_4_date")).value;
      this.track_link = (<HTMLInputElement><any>document.getElementById("track_link")).value;
      this.stageDate = this.stage_4_date;
      this.stageName = "shipped";
      this.data.updateStatus(this.stageDate,this.stageName,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
      this.data.updateLink(this.track_link,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated hyperlink Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
      this.imageDataFront = { orderId:this.orderId ,image:imageFront}
      this.data.uploadImageShipped(this.imageDataFront).subscribe(
      );
    }
    else if(this.status == "shipped")
    {
      this.stage_5_date = (<HTMLInputElement><any>document.getElementById("stage_5_date")).value;
      this.stageDate = this.stage_5_date;
      this.stageName = "delivered";
      this.data.updateStatus(this.stageDate,this.stageName,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
      this.imageDataFront2 = { orderId:this.orderId ,image:imageFront2}
      this.data.uploadImageDelivered(this.imageDataFront2).subscribe(
      );
    }
    else if(this.status == "delivered")
    {
      this.stage_6_date = (<HTMLInputElement><any>document.getElementById("stage_6_date")).value;
      this.stageDate = this.stage_6_date;
      this.stageName = "closed";
      this.data.updateStatus(this.stageDate,this.stageName,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
      this.imageDataFront3 = { orderId:this.orderId ,image:imageFront3}
      this.data.uploadImageClosed(this.imageDataFront3).subscribe(
      );
    }
  }
  cancel(){
    this.cancel_reason = (<HTMLInputElement><any>document.getElementById("cancel-reason")).value;
    this.stage_1_date = (<HTMLInputElement><any>document.getElementById("stage_1_date")).value;
    this.stageName = "cancelled";
    this.stageDate = this.stage_1_date;
    this.data.updateCancelStatus(this.stageDate,this.stageName,orderIdShort,this.cancel_reason).subscribe(
      data=>{
              if(data== "Success"){
                alert("Updated Successfully");
                window.location.reload();
              }
              else{
                alert("Error,try again");
              }
            },
      error=> console.error(error)
    );

  }
  confirm(){
    this.stage_1_date = (<HTMLInputElement><any>document.getElementById("stage_1_date")).value;
      this.stageName = "pending_payment";
      this.stageDate = this.stage_1_date;
      this.data.updateStatus(this.stageDate,this.stageName,orderIdShort).subscribe(
        data=>{
                if(data== "Success"){
                  alert("Updated Successfully");
                  window.location.reload();
                }
                else{
                  alert("Error,try again");
                }
              },
        error=> console.error(error)
      );
  }
  viewOrder(orderIdShort){
    this.data.getViewOrderData(this.id,orderIdShort).subscribe(
      data=>{
              this.dynamicOrderData=data;
              this.orderId = data['orderId'];
              var order_stat = data['order_status'];
              if(order_stat == "shipped" || order_stat == "delivered" || order_stat == "closed")
              {
                this.userAddress = true;
              }
            },
        error=> console.error(error)
      );
      this.data.getViewOrderDataSeller(this.id,orderIdShort).subscribe(
        data=>{
          this.i =0;
          this.dynamicDataOrderData=data;
          orderCount= data['orderCount'];
          this.j = orderCount-1;
          orderIdArray = data['orderIdArray'];
          orderIdShort = data['orderIdShort'];
          this.status = data['orderStatus'];
          if(this.status == "cancelled")
          {
            this.cancelledStatus = true;
            this.cancelStatus = true;
          }
          else if(this.status == "pending_confirmation")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
          }
          else if(this.status == "pending_payment")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
          }
          else if(this.status == "processing")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
          }
          else if(this.status == "shipped")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
          }
          else if(this.status == "delivered")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
          }
          else if(this.status == "closed")
          {
            this.stage_1_dot = false;
            this.stage_1_full = true;
            this.stage_2_dot = false;
            this.stage_2_full = true;
            this.stage_3_dot = false;
            this.stage_3_full = true;
            this.stage_4_dot = false;
            this.stage_4_full = true;
            this.stage_5_dot = false;
            this.stage_5_full = true;
            this.stage_6_dot = false;
            this.stage_6_full = true;
          }
        },
        error=> console.error(error)
      );
    this.ind_order = true;
    this.order_list = false;
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
  allFilter(){
    this.noOrders = false;
    this.data.getAllOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("current-btn")).style.border ="solid #EFBE24" ;
    (<HTMLButtonElement><any>document.getElementById("past-btn")).style.border ="none" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="none" ;
  }
  pendingConfirmFilter(){
    this.noOrders = false;
    this.data.getPendingConfirmOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="none" ;
  }
  pendingPayFilter(){
    this.noOrders = false;
    this.data.getPendingPayOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="none" ;
  }
  processingFilter(){
    this.noOrders = false;
    this.data.getProcessingOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="none" ;
  }
  shippedFilter(){
    this.noOrders = false;
    this.data.getShippedOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="none" ;
  }
  deliveredFilter(){
    this.noOrders = false;
    this.data.getDeliveredOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="none" ;
  }
  closedFilter(){
    this.noOrders = false;
    this.data.getClosedOrderDataSeller(this.id).subscribe(
      data=>{
        this.dynamicDataOrderDataAll=data;
        if(this.dynamicDataOrderDataAll==""){
          this.noOrders = true;
        }
      },
      error=> console.error(error)
    );
    (<HTMLButtonElement><any>document.getElementById("current-btn")).style.border ="none" ;
    (<HTMLButtonElement><any>document.getElementById("past-btn")).style.border ="solid #EFBE24" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderBottom ="11px #EFBE24 solid" ;
    (<HTMLButtonElement><any>document.getElementById("closed-btn")).style.borderRadius ="8px" ;
    (<HTMLButtonElement><any>document.getElementById("all-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-conf-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("pending-pay-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("processing-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("shipped-btn")).style.borderBottom ="none" ;
    (<HTMLButtonElement><any>document.getElementById("delivered-btn")).style.borderBottom ="none" ;
  }
  createInvoice(){
    this.data.createInvoice().subscribe(
      data=>{
        
      },
      error=> console.error(error)
    );
  }
  ngOnDestroy() {
    (<HTMLInputElement><any>document.getElementById('mainHeader')).style.display ="block";
    (<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display ="none";
    (<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display ="block";
  }
}
function onFrontClick(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront = text;
      (<HTMLInputElement>document.getElementById("frontPreviewId")).style.display = "block";
      this.urlFront1 = imageFront;
  };
}
function onFrontClick2(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront2 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId2")).style.display = "block";
      this.urlFront2 = imageFront2;
  };
}
function onFrontClick3(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront3 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId3")).style.display = "block";
      this.urlFront3 = imageFront3;
  };
}