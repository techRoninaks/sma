import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
var imageFront: any ="";
var imageFront2: any ="";
var imageFront3: any ="";
var imageFront4: any ="";
var imageFront5: any ="";
var imageFront6: any ="";
var orderCount2: any=0;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  submittedReview : boolean;
  submitted : boolean;
  i: number = 0;
  status: any =[];
  noOrders: boolean = false;
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
  addComplaint: FormGroup;
  addReview: FormGroup;
  count : any;
  constructor(private formBuilderReview:FormBuilder,private formBuilderComplaint:FormBuilder,private data: DataService,private router: Router,private route: ActivatedRoute,private cookieService: CookieService) {
    this.addComplaint = formBuilderComplaint.group({
      complaint_desc:['',Validators.required],
    })
    this.addReview = formBuilderReview.group({
      title:['',Validators.required],
      review_desc:['',Validators.required],
    })
  }
  id: any;
  dynamicDataOrderDataAll: any=[];
  imageDataFront : object;
  imageDataFront2 : object;
  imageDataFront3 : object;
  imageDataFront4 : object;
  imageDataFront5 : object;
  imageDataFront6 : object;
  ngOnInit() {
    this.id = this.getCookie("userId");
    this.data.getAllOrderUser(this.id).subscribe(
      data=>{
        this.i =0;
        this.dynamicDataOrderDataAll=data;
        this.status = data['orderStatus'];
        // console.log(this.dynamicDataOrderDataAll);
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
  allFilter(){
    this.noOrders = false;
    this.data.getAllOrderUser(this.id).subscribe(
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
    this.data.getPendingConfirmOrder(this.id).subscribe(
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
    this.data.getPendingPayOrder(this.id).subscribe(
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
    this.data.getProcessingOrder(this.id).subscribe(
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
    this.data.getShippedOrder(this.id).subscribe(
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
    this.data.getDeliveredOrder(this.id).subscribe(
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
    this.data.getClosedOrder(this.id).subscribe(
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
  frontUpload(){
    imageFront=document.getElementById('frontUpload').addEventListener('change', onFrontClick.bind(this));
  }
  frontUpload2(){
    imageFront2=document.getElementById('frontUpload2').addEventListener('change', onFrontClick2.bind(this));
  }
  frontUpload3(){
    imageFront3=document.getElementById('frontUpload3').addEventListener('change', onFrontClick3.bind(this));
  }
  frontUpload4(){
    imageFront4=document.getElementById('frontUpload4').addEventListener('change', onFrontClick4.bind(this));
  }
  frontUpload5(){
    imageFront5=document.getElementById('frontUpload5').addEventListener('change', onFrontClick5.bind(this));
  }
  frontUpload6(){
    imageFront6=document.getElementById('frontUpload6').addEventListener('change', onFrontClick6.bind(this));
  }
  addStar(star){
    if(star == 'star-1'){
      this.count=1;
      document.getElementById("star-1").style.display="none";
      document.getElementById("star-1-active").style.display="ruby";
      document.getElementById("star-2").style.display="ruby";
      document.getElementById("star-2-active").style.display="none";
      document.getElementById("star-3").style.display="ruby";
      document.getElementById("star-3-active").style.display="none";
      document.getElementById("star-4").style.display="ruby";
      document.getElementById("star-4-active").style.display="none";
      document.getElementById("star-5").style.display="ruby";
      document.getElementById("star-5-active").style.display="none";
    }
    else if(star == 'star-2'){
      this.count=2;
      document.getElementById("star-1").style.display="none";
      document.getElementById("star-1-active").style.display="ruby";
      document.getElementById("star-2").style.display="none";
      document.getElementById("star-2-active").style.display="ruby";
      document.getElementById("star-3").style.display="ruby";
      document.getElementById("star-3-active").style.display="none";
      document.getElementById("star-4").style.display="ruby";
      document.getElementById("star-4-active").style.display="none";
      document.getElementById("star-5").style.display="ruby";
      document.getElementById("star-5-active").style.display="none";
    }
    else if(star == 'star-3'){
      this.count=3;
      document.getElementById("star-1").style.display="none";
      document.getElementById("star-1-active").style.display="ruby";
      document.getElementById("star-2").style.display="none";
      document.getElementById("star-2-active").style.display="ruby";
      document.getElementById("star-3").style.display="none";
      document.getElementById("star-3-active").style.display="ruby";
      document.getElementById("star-4").style.display="ruby";
      document.getElementById("star-4-active").style.display="none";
      document.getElementById("star-5").style.display="ruby";
      document.getElementById("star-5-active").style.display="none";
    }
    else if(star == 'star-4'){
      this.count=4;
      document.getElementById("star-1").style.display="none";
      document.getElementById("star-1-active").style.display="ruby";
      document.getElementById("star-2").style.display="none";
      document.getElementById("star-2-active").style.display="ruby";
      document.getElementById("star-3").style.display="none";
      document.getElementById("star-3-active").style.display="ruby";
      document.getElementById("star-4").style.display="none";
      document.getElementById("star-4-active").style.display="ruby";
      document.getElementById("star-5").style.display="ruby";
      document.getElementById("star-5-active").style.display="none";
    }
    else if(star == 'star-5'){
      this.count=5;
      document.getElementById("star-1").style.display="none";
      document.getElementById("star-1-active").style.display="ruby";
      document.getElementById("star-2").style.display="none";
      document.getElementById("star-2-active").style.display="ruby";
      document.getElementById("star-3").style.display="none";
      document.getElementById("star-3-active").style.display="ruby";
      document.getElementById("star-4").style.display="none";
      document.getElementById("star-4-active").style.display="ruby";
      document.getElementById("star-5").style.display="none";
      document.getElementById("star-5-active").style.display="ruby";
    }
  }
  onSubmitReview(prodId){
    this.submittedReview = true;
    if(this.addReview.invalid)
    {
      alert("Enter required fiels");
    }
    else{
      this.data.addReviewData(this.addReview.value,this.id,this.count,prodId).subscribe(
        data=>{
                if(data == "Success")
                {
                  alert("Review sent Successfully");
                  $("#myModalReview").modal('hide');
                }
                else
                 alert("Error");
              },
        error=> console.error(error)
      );
      this.imageDataFront4 = { user_id:this.id ,image:imageFront4}
      this.data.uploadImage4(this.imageDataFront4).subscribe(
      );
      this.imageDataFront5 = { user_id:this.id ,image:imageFront5}
      this.data.uploadImage5(this.imageDataFront5).subscribe(
      );
      this.imageDataFront6 = { user_id:this.id ,image:imageFront6}
      this.data.uploadImage6(this.imageDataFront6).subscribe(
      );
    }
  }
  onSubmitComplaint(sellerId){
    this.submitted = true;
    if(this.addComplaint.invalid)
    {
      alert("Enter required fiels");
    }
    else
    {
      this.data.addComplaintData(this.addComplaint.value,this.id,sellerId).subscribe(
        data=>{
                if(data == "Success")
                {
                  alert("Complaint sent Successfully");
                  $("#myModal").modal('hide');
                }
                else
                 alert("Error");
              },
        error=> console.error(error)
      );
      this.imageDataFront = { user_id:this.id ,image:imageFront}
      this.data.uploadImage1(this.imageDataFront).subscribe(
      );
      this.imageDataFront2 = { user_id:this.id ,image:imageFront2}
      this.data.uploadImage2(this.imageDataFront2).subscribe(
      );
      this.imageDataFront3 = { user_id:this.id ,image:imageFront3}
      this.data.uploadImage3(this.imageDataFront3).subscribe(
      );
    }
  }
  reqUpdate(prodId){
    this.data.reqUpdate(this.id,prodId).subscribe(
      data=>{
              if(data == "Success")
              {
                alert("Request sent Successfully");
              }
              else
                alert("Error");
            },
      error=> console.error(error)
    );
  }
  openInvoice(orderId){
    window.open("http://localhost:8080/sma13/src/assets/invoice/"+orderId+'.pdf', '_blank');
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
function onFrontClick4(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront4 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId4")).style.display = "block";
      this.urlFront4 = imageFront4;
  };
}
function onFrontClick5(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront5 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId5")).style.display = "block";
      this.urlFront5 = imageFront5;
  };
}
function onFrontClick6(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event)=>{
      var text :any = reader.result;
      imageFront6 = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId6")).style.display = "block";
      this.urlFront6 = imageFront6;
  };
}
