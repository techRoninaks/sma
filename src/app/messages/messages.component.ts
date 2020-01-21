import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { MatDivider } from '@angular/material';
import { not } from '@angular/compiler/src/output/output_ast';
import { loadavg } from 'os';
var t_id: any="";
var s_id: any="";
var u_id: any="";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  allCount: number;
  rfqCount: number;
  cmplntCount: number;
  msgCount: number;
  notifCount: number;
  c_count: number =0;
  Adminname: any;
  Adminid: any;
  Buyername: any;
  seller_name: any;
  Buyerid: any;
  Seller_id: any;
  Sellerid: any;
  user1: any;
  user2: any;
  usertype1: any;
  usertype2: any;
  threadid: any = "";
  disprfq: any;
  length: any;
  i: any;
  show: any;
  store: any;
  post: boolean = false;
  rfqbox:boolean = false;
  msgview: boolean = false;
  enablegifting: boolean = false;
  message1: boolean = false;
  message: boolean = false;
  txtmsg: any = [];
  mytype: any = "";
  Userid:any;
  myid: any;
  receiverid:any;
  Senderid:any;
  receivertype:any;

  constructor(private data: DataService, private cookieService: CookieService) { }

  ngOnInit() {
    this.allCount = 5;
    this.rfqCount = 2;
    this.cmplntCount = 3;
    this.msgCount = 1;
    this.notifCount = 8;
    s_id = this.getCookie("sellerId");
    u_id = this.getCookie("userId");
    this.data.getAdmin().subscribe(
      data => {
        this.Adminname = data;
        this.Adminid = data;
        this.Adminname = this.Adminname.data.result;
        this.Adminid = this.Adminid.data.result;
        console.log(this.Adminname);
      },
      error => console.error(error)
    );

    this.data.getBuyer().subscribe(
      data => {
        this.Buyername = data;
        this.Buyerid = data;
        this.Buyername = this.Buyername.data.result;
        this.Buyerid = this.Buyerid.data.result;
        console.log(this.Buyername);
      },
      error => console.error(error)
    );
    this.data.getSeller().subscribe(
      data => {
        this.seller_name = data;
        this.Seller_id = data;
        this.seller_name = this.seller_name.data.result;
        this.Seller_id = this.Seller_id.data.result;
        console.log(this.Seller_id);
      },
      error => console.error(error)
    );
  }
  filtertabs(x: any) {
    switch (x) {
      case "All":
        $('#Allbox').show();
        $('#RFQbox').hide();
        $('#Complaintsbox').hide();
        $('#Messagesbox').hide();
        $('#Notificationbox').hide();
        document.getElementById("btnAll").style.background = "#efbe24";
        document.getElementById("btnRFQ").style.background = "#f1f1f1";
        document.getElementById("btnComplaints").style.background = "#f1f1f1";
        document.getElementById("btnMessages").style.background = "#f1f1f1";
        document.getElementById("btnNotification").style.background = "#f1f1f1";
        break;
      case "RFQ":
        $('#Allbox').hide();
        $('#RFQbox').show();
        $('#Complaintsbox').hide();
        $('#Messagesbox').hide();
        $('#Notificationbox').hide();
        if(s_id){
          document.getElementById("s_id").style.display = "none";
        }
        else if(u_id){
          document.getElementById("u_id").style.display = "none";
        }
        document.getElementById("btnAll").style.background = "#f1f1f1";
        document.getElementById("btnRFQ").style.background = "#efbe24";
        document.getElementById("btnComplaints").style.background = "#f1f1f1";
        document.getElementById("btnMessages").style.background = "#f1f1f1";
        document.getElementById("btnNotification").style.background = "#f1f1f1";
        break;
      case "Complaints":
        $('#Allbox').hide();
        $('#RFQbox').hide();
        $('#Complaintsbox').show();
        $('#Messagesbox').hide();
        $('#Notificationbox').hide();
        if(s_id){
          document.getElementById("s_id_cmplnt").style.display = "none";
        }
        else if(u_id){
          document.getElementById("u_id_cmplnt").style.display = "none";
        }
        document.getElementById("btnAll").style.background = "#f1f1f1";
        document.getElementById("btnRFQ").style.background = "#f1f1f1";
        document.getElementById("btnComplaints").style.background = "#efbe24";
        document.getElementById("btnMessages").style.background = "#f1f1f1";
        document.getElementById("btnNotification").style.background = "#f1f1f1";
        break;
      case "Messages":
        $('#Allbox').hide();
        $('#RFQbox').hide();
        $('#Complaintsbox').hide();
        $('#Messagesbox').show();
        $('#Notificationbox').hide();
        document.getElementById("btnAll").style.background = "#f1f1f1";
        document.getElementById("btnRFQ").style.background = "#f1f1f1";
        document.getElementById("btnComplaints").style.background = "#f1f1f1";
        document.getElementById("btnMessages").style.background = "#efbe24";
        document.getElementById("btnNotification").style.background = "#f1f1f1";
        break;
      case "Notification":
        $('#Allbox').hide();
        $('#RFQbox').hide();
        $('#Complaintsbox').hide();
        $('#Messagesbox').hide();
        $('#Notificationbox').show();
        document.getElementById("btnAll").style.background = "#f1f1f1";
        document.getElementById("btnRFQ").style.background = "#f1f1f1";
        document.getElementById("btnComplaints").style.background = "#f1f1f1";
        document.getElementById("btnMessages").style.background = "#f1f1f1";
        document.getElementById("btnNotification").style.background = "#efbe24";
        break;
    }
  }
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  sortByName(){
    this.data.getSortedAdmin().subscribe(
      data => {
        this.Adminname = data;
        this.Adminid = data;
        this.Adminname = this.Adminname.data.result;
        this.Adminid = this.Adminid.data.result;
        console.log(this.Adminname);
      },
      error => console.error(error)
    );
    this.data.getSortedBuyer().subscribe(
      data => {
        this.Buyername = data;
        this.Buyerid = data;
        this.Buyername = this.Buyername.data.result;
        this.Buyerid = this.Buyerid.data.result;
        console.log(this.Buyername);
      },
      error => console.error(error)
    );
    this.data.getSortedSeller().subscribe(
      data => {
        this.seller_name = data;
        this.Seller_id = data;
        this.seller_name = this.seller_name.data.result;
        this.Seller_id = this.Seller_id.data.result;
        console.log(this.Seller_id);
      },
      error => console.error(error)
    );
  }
  sortByDate(){
    this.data.getDateSortedAdmin().subscribe(
      data => {
        this.Adminname = data;
        this.Adminid = data;
        this.Adminname = this.Adminname.data.result;
        this.Adminid = this.Adminid.data.result;
        console.log(this.Adminname);
      },
      error => console.error(error)
    );
    this.data.getDateSortedBuyer().subscribe(
      data => {
        this.Buyername = data;
        this.Buyerid = data;
        this.Buyername = this.Buyername.data.result;
        this.Buyerid = this.Buyerid.data.result;
        console.log(this.Buyername);
      },
      error => console.error(error)
    );
    this.data.getDateSortedSeller().subscribe(
      data => {
        this.seller_name = data;
        this.Seller_id = data;
        this.seller_name = this.seller_name.data.result;
        this.Seller_id = this.Seller_id.data.result;
        console.log(this.Seller_id);
      },
      error => console.error(error)
    );
  }
  chatheadSeller(id) {
    this.msgview = true;
    let Sellername = (<HTMLInputElement><any>document.getElementById("chatheadSeller" + id)).innerHTML;
    document.getElementById("name").innerHTML = Sellername;
    this.Sellerid = id;
    // console.log(Sellerid);
    var myid= this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");
    // console.log(myid);
    
    if (myid != '0') {
      var mytype = 'buyer';
    }
    else {
      var mytype = 'seller';
    }
    if (mytype = 'buyer') {
      // console.log("chathead seller reached");
      this.threadpush1(myid,id);
      // console.log(id,myid);
      
    }
    // else {
    //   // this.threadpush(id,Userid);
    // }
  }
  chatheadBuyer(id) {
    // window.location.reload();
    this.msgview = true;
    // ++this.c_count;
    let Buyername = (<HTMLInputElement><any>document.getElementById("chatheadBuyer" + id)).innerHTML;
    document.getElementById("name").innerHTML = Buyername;
    this.Buyerid = id;

    var Userid = this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");

    if (Sellerid != '0') {
      var mytype = 'buyer';
    }
    else {
      var mytype = 'seller';
    }
    if (mytype = 'seller') {
      // console.log("chatheadbuyer reached");
      // if(this.Buyerid == 2)
      {
        this.threadpush(id, Sellerid);
      }
      
    }
    // else {
    //   // this.threadpush1(id,Userid);
    // }
  }
  chatheadBuyer_com(id) {
    // window.location.reload();
    this.msgview = true;
    // ++this.c_count;
    let Buyername = (<HTMLInputElement><any>document.getElementById("chatheadBuyer" + id)).innerHTML;
    document.getElementById("name").innerHTML = Buyername;
    this.Buyerid = id;

    var Userid = this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");

    if (Sellerid != '0') {
      var mytype = 'buyer';
    }
    else {
      var mytype = 'seller';
    }
    if (mytype = 'seller') {
      // console.log("chatheadbuyer reached");
      // if(this.Buyerid == 2)
      {
        this.threadpush2(id, Sellerid);
      }
      
    }
    // else {
    //   // this.threadpush1(id,Userid);
    // }
  }
  accept() {
    this.post = true;
    // let order_id = "1";
    // let buyer_nm = "amal";
    // // (<HTMLInputElement><any>document.getElementById('order_no')).value = order_id;
    // document.getElementById("order_no").innerHTML = order_id;
    // document.getElementById("buyer_name").innerHTML = buyer_nm;
  }
  enablegiftingbtnshow() {
    this.enablegifting = true;

  }
  //////////////
  threadpush2(Buyerid, Sellerid) {
    // console.log("threadpush started");

    this.usertype1 = 'buyer';
    this.usertype2 = 'seller';
    this.data.makethread(Buyerid, Sellerid, 'buyer', 'seller').subscribe(
      data => {
        this.threadid = data['threadid'];
        t_id = data['threadid'];
        var msg = data['message'];
        var rid = msg.split("!~!");
        var rfqid = rid[1];
        if(rfqid)
        {
          document.getElementById("msgbox").style.display = "block";
          this.msgview = true;
        }

        this.disp_rfq(t_id,rfqid);
        // this.fetchrfqmsg();
        // 
        var i;
        let sender_type;
        let msg1;
        this.data.fetchrfqmsgCmplnt(this.threadid).subscribe(
          data => {
            for (let item in data) {
              msg1 = data[item]['message'];
              sender_type = data[item]['sender_type'];
              // console.log(sender_type);
              if (sender_type == "seller") {
                var msglist = document.createElement('div');
                msglist.style.background = "#dbdbdb";
                msglist.style.width = "300px";
                msglist.style.height = "auto";
                msglist.style.marginTop = "20px";
                msglist.style.borderRadius = "10px";
                msglist.innerHTML = msg1;
                msglist.style.padding = "10px";
                document.getElementById('dvMsgUiDiv_com').appendChild(msglist);
                // console.log(msg);
              }
              else {
                var msglist = document.createElement('div');
                msglist.style.background = "#dbdbdb";
                msglist.style.width = "300px";
                msglist.style.height = "auto";
                msglist.style.marginTop = "20px";
                msglist.style.borderRadius = "10px";
                msglist.innerHTML = msg1;
                msglist.style.padding = "10px";
                msglist.style.marginLeft = "460px";
                msglist.style.marginBottom = "35px";
                document.getElementById('dvMsgUiDiv_com').appendChild(msglist);
                // console.log(msglist);
              }
            }
          },
          error => console.error(error)
        );
        // 
      });
    // console.log("threadpush end");

  }
  threadpush3(myid, Sellerid) {
    // console.log("threadpush 1 reached");
    // console.log(Sellerid,myid);
    this.usertype1 = 'seller';
    this.usertype2 = 'buyer';
    this.myid = myid;
    this.data.makethread1(myid, Sellerid, this.usertype1, this.usertype2).subscribe(
      data => {
        this.threadid = data['threadid'];
        t_id = data['threadid'];
        var msg = data['message'];
        var rid = msg.split("!~!");
        var rfqid = rid[1];
        if(rfqid)
        {
          document.getElementById("msgbox").style.display = "block";
          this.msgview = true;
        }

        this.disp_rfq(t_id,rfqid);
        // this.fetchrfqmsg();
        // 
        var i;
    let sender_type;
    let msg1;
    this.data.fetchrfqmsg(this.threadid).subscribe(
      data => {
        for (let item in data) {
          msg1 = data[item]['message'];
          sender_type = data[item]['sender_type'];
          // console.log(sender_type);
          if (sender_type == "seller") {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg1;
            msglist.style.padding = "10px";
            document.getElementById('dvMsgUiDiv').appendChild(msglist);
            // console.log(msg);
          }
          else {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg1;
            msglist.style.padding = "10px";
            msglist.style.marginLeft = "460px";
            msglist.style.marginBottom = "35px";
            document.getElementById('dvMsgUiDiv').appendChild(msglist);
            // console.log(msglist);
          }
        }
      },
      error => console.error(error)
    );
        // 
      });
  }
  //////////////
  threadpush(Buyerid, Sellerid) {
    // console.log("threadpush started");

    this.usertype1 = 'buyer';
    this.usertype2 = 'seller';
    this.data.makethread(Buyerid, Sellerid, 'buyer', 'seller').subscribe(
      data => {
        this.threadid = data['threadid'];
        t_id = data['threadid'];
        var msg = data['message'];
        var rid = msg.split("!~!");
        var rfqid = rid[1];
        if(rfqid)
        {
          document.getElementById("msgbox").style.display = "block";
          this.msgview = true;
        }

        this.disp_rfq(t_id,rfqid);
        // this.fetchrfqmsg();
        // 
        var i;
        let sender_type;
        let msg1;
        this.data.fetchrfqmsg(this.threadid).subscribe(
          data => {
            for (let item in data) {
              msg1 = data[item]['message'];
              sender_type = data[item]['sender_type'];
              // console.log(sender_type);
              if (sender_type == "seller") {
                var msglist = document.createElement('div');
                msglist.style.background = "#dbdbdb";
                msglist.style.width = "300px";
                msglist.style.height = "auto";
                msglist.style.marginTop = "20px";
                msglist.style.borderRadius = "10px";
                msglist.innerHTML = msg1;
                msglist.style.padding = "10px";
                document.getElementById('dvMsgUiDiv').appendChild(msglist);
                // console.log(msg);
              }
              else {
                var msglist = document.createElement('div');
                msglist.style.background = "#dbdbdb";
                msglist.style.width = "300px";
                msglist.style.height = "auto";
                msglist.style.marginTop = "20px";
                msglist.style.borderRadius = "10px";
                msglist.innerHTML = msg1;
                msglist.style.padding = "10px";
                msglist.style.marginLeft = "460px";
                msglist.style.marginBottom = "35px";
                document.getElementById('dvMsgUiDiv').appendChild(msglist);
                // console.log(msglist);
              }
            }
          },
          error => console.error(error)
        );
        // 
      });
    // console.log("threadpush end");

  }
  threadpush1(myid, Sellerid) {
    // console.log("threadpush 1 reached");
    // console.log(Sellerid,myid);
    this.usertype1 = 'seller';
    this.usertype2 = 'buyer';
    this.myid = myid;
    this.data.makethread1(myid, Sellerid, this.usertype1, this.usertype2).subscribe(
      data => {
        this.threadid = data['threadid'];
        t_id = data['threadid'];
        var msg = data['message'];
        var rid = msg.split("!~!");
        var rfqid = rid[1];
        if(rfqid)
        {
          document.getElementById("msgbox").style.display = "block";
          this.msgview = true;
        }

        this.disp_rfq(t_id,rfqid);
        // this.fetchrfqmsg();
        // 
        var i;
    let sender_type;
    let msg1;
    this.data.fetchrfqmsg(this.threadid).subscribe(
      data => {
        for (let item in data) {
          msg1 = data[item]['message'];
          sender_type = data[item]['sender_type'];
          // console.log(sender_type);
          if (sender_type == "seller") {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg1;
            msglist.style.padding = "10px";
            document.getElementById('dvMsgUiDiv').appendChild(msglist);
            // console.log(msg);
          }
          else {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg1;
            msglist.style.padding = "10px";
            msglist.style.marginLeft = "460px";
            msglist.style.marginBottom = "35px";
            document.getElementById('dvMsgUiDiv').appendChild(msglist);
            // console.log(msglist);
          }
        }
      },
      error => console.error(error)
    );
        // 
      });
  }
  disp_rfq(t_id,rfqid) {
    // console.log("disprfq reached");

    let i = 0;
    this.threadid = t_id;
    let rfq_id = rfqid;
    let msg_id;
    let msg_message;
    let msg_type;
    let msg_read_time_stamp;
    let msg_receiver_time_stamp;
    let msg_sender_timestamp;
    let msg_sender_type;
    let msg_senderid;
    let msg_threadid;
    let po_is_rfq;
    let po_orderid;
    let po_sellerid;
    let rfq_hasimage;
    let rfq_note;
    let rfq_orderid;
    let rfq_product_name;
    let rfq_ref_prodid;
    let rfq_tagid;
    let rfq_user_id;
    let sd_seller_id;
    let sd_shop_location;
    let sd_shopname;

    // console.log(this.threadid);

    this.data.disp_rfq(t_id,rfqid).subscribe(
      data => {
        // console.log(data);
        for (let item in data) {
          msg_id = data[item]['msg_id'];
          // console.log(data[item]['rfq_note']);
          msg_message = data[item]['msg_message'];
          msg_type = data[item]['msg_type'];
          msg_read_time_stamp = data[item]['msg_read_time_stamp'];
          msg_receiver_time_stamp = data[item]['msg_receiver_time_stamp'];
          msg_sender_timestamp = data[item]['msg_sender_timestamp'];
          msg_sender_type = data[item]['msg_sender_type'];
          msg_senderid = data[item]['msg_senderid'];
          msg_threadid = data[item]['msg_threadid'];
          po_is_rfq = data[item]['po_is_rfq'];
          po_orderid = data[item]['po_orderid'];
          po_sellerid = data[item]['po_sellerid'];
          rfq_hasimage = data[item]['rfq_hasimage'];
          rfq_note = data[item]['rfq_note'];
          rfq_orderid = data[item]['rfq_orderid'];
          rfq_product_name = data[item]['rfq_product_name'];
          rfq_ref_prodid = data[item]['rfq_ref_prodid'];
          rfq_tagid = data[item]['rfq_tagid'];
          rfq_user_id = data[item]['rfq_user_id'];
          sd_seller_id = data[item]['sd_seller_id'];
          sd_shop_location = data[item]['sd_shop_location'];
          sd_shopname = data[item]['sd_shopname'];
          // console.log(data[item]);
          // console.log(i);


          // // displaying details in msg view
          if (!t_id) {
            // hide div
            document.getElementById("shopname").innerHTML = '';
            document.getElementById("shoplocation").innerHTML = '';
            document.getElementById("sendtime").innerHTML = '';
            document.getElementById("note").innerHTML = '';
          }
          else {
            document.getElementById("shopname").innerHTML = sd_shopname;
            document.getElementById("shoplocation").innerHTML = sd_shop_location;
            document.getElementById("sendtime").innerHTML = msg_sender_timestamp;
            document.getElementById("note").innerHTML = rfq_note;
          }
        }
      }
    )
  }
  msg() {
    console.log("msg reached",this.myid,this.Buyerid);
    
    if (this.mytype = 'buyer') {
      console.log("msg reached buyer");
      let msg = (<HTMLInputElement><any>document.getElementById('msgsent')).value;
      let sender_type = 'buyer';

      console.log(this.threadid);
      console.log(this.Buyerid);

      this.data.msgsent1(msg, t_id, this.Buyerid, sender_type).subscribe(
        data => {
          let msg = data[0]['message'];
          console.log(msg);
        },
        error => console.error(error)
      );
    }
    else {
      // console.log("msg reached seller");
      let msg = (<HTMLInputElement><any>document.getElementById('msgsent')).value;
      let sender_type = 'seller';
      this.txtmsg = { msg: msg, threadid: this.threadid, Sellerid: this.Sellerid, sender_type: sender_type };
      this.data.msgsent(msg, t_id, this.Buyerid, sender_type).subscribe(
        data => {
          let msg = data[0]['message'];
          // console.log(msg);
        },
        error => console.error(error)
      );
    }
    // window.location.reload();
  }
  fetchrfqmsg() {
    var i;
    let sender_type;
    let msg;
    this.data.fetchrfqmsg(this.threadid).subscribe(
      data => {
        for (let item in data) {
          msg = data[item]['message'];
          sender_type = data[item]['sender_type'];
          // console.log(sender_type);
          if (sender_type == "seller") {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg;
            msglist.style.padding = "10px";
            document.getElementById('dvMsgUiDiv').appendChild(msglist);
            // console.log(msg);
          }
          else {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg;
            msglist.style.padding = "10px";
            msglist.style.marginLeft = "460px";
            msglist.style.marginBottom = "35px";
            document.getElementById('dvMsgUiDiv').appendChild(msglist);
            // console.log(msglist);
          }
        }
      },
      error => console.error(error)
    );
  }
  submitrfq() {
    this.post = false;
    let order_no = (<HTMLInputElement><any>document.getElementById('order_no')).value;
    let buyer_name = (<HTMLInputElement><any>document.getElementById('buyer_name')).value;
    let location = (<HTMLInputElement><any>document.getElementById('location')).value;
    let product_name = (<HTMLInputElement><any>document.getElementById('product_name')).value;
    let discription = (<HTMLInputElement><any>document.getElementById('discription')).value;
    let shipping_price = (<HTMLInputElement><any>document.getElementById('shipping_price')).value;
    let product_price = (<HTMLInputElement><any>document.getElementById('product_price')).value;
    let delivery_by = (<HTMLInputElement><any>document.getElementById('delivery_by')).value;
    let processing_time = (<HTMLInputElement><any>document.getElementById('Processing_time')).value;
    let shipping_time = (<HTMLInputElement><any>document.getElementById('shipping_time')).value;
    let gift_name = (<HTMLInputElement><any>document.getElementById('gift_name')).value;
    let phone_number = (<HTMLInputElement><any>document.getElementById('phone_number')).value;
    let address = (<HTMLInputElement><any>document.getElementById('address')).value;
    let note = (<HTMLInputElement><any>document.getElementById('note')).value;
    // console.log(order_no);
    this.submitview(order_no, buyer_name, product_price, delivery_by);

    this.data.rfqsubmition(order_no, buyer_name, location, product_name, discription, shipping_price, product_price, delivery_by, processing_time, shipping_time, gift_name, phone_number, address, note).subscribe(
      data => {
      },
      error => console.error(error)
    );
  }
  submitview(order_no, buyer_name, product_price, delivery_by) {

    let submitionmsg1 = "dear";
    let submitionmsg4 = " your order hasbeen placed of Order Id :";
    let submitionmsg2 = "  net payable amount is RS.";
    let submitionmsg3 = " and the product will be deliverd on ";
    var msg = submitionmsg1 + buyer_name + submitionmsg4 + order_no + submitionmsg2 + product_price + submitionmsg3 + delivery_by;
    
    var msglist = document.createElement('div');
    msglist.style.background = "#dbdbdb";
    msglist.style.width = "300px";
    msglist.style.height = "auto";
    msglist.style.marginTop = "20px";
    msglist.style.borderRadius = "10px";
    msglist.textContent = msg;
    msglist.style.padding = "10px";
    msglist.style.marginLeft = "460px";
    msglist.style.marginBottom = "35px";
    document.getElementById('dvMsgUiDiv').appendChild(msglist);
    this.postsubmitionorder(msg);
  }
  postsubmitionorder(msg) {
    let sender_type = 'seller';
    this.threadid = this.threadid;
    this.Buyerid = this.Buyerid;
    this.txtmsg = { msg: msg, threadid: this.threadid, Buyerid: this.Buyerid, sender_type: sender_type };
    this.data.msgsent(msg, t_id, this.Buyerid, sender_type).subscribe(
      data => {
        let msg = data[0]['message'];
        // console.log(msg);
      },
      error => console.error(error)
    );
  }


  //message starts heare

  chatheadAdmin_msg(id) {

    var receiverid = id;
    console.log(receiverid);
    
    var receivertype = "admin";
    // this.msgview = true;
  
    let Adminname = (<HTMLInputElement><any>document.getElementById("chatheadAdmin_msg" + id)).innerHTML;
    document.getElementById("name_msg").innerHTML = Adminname;

    var Adminid = this.getCookie("AdminId");
    var Userid = this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");
    console.log(Adminid,Userid,Sellerid);
    
    if (( Adminid.indexOf('') >= 0) && ( Userid.indexOf('') >= 0)) {
      var mytype = 'seller';
      let myid = Sellerid;
      this.threadpush_msg(myid,receiverid,mytype,receivertype);
    }
    
    if (( Userid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'admin';
      let myid = Adminid;
      this.threadpush_msg(myid,receiverid,mytype,receivertype);
    }
    
    if (( Adminid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'buyer';
      let myid = Userid;
      this.threadpush_msg(myid,receiverid,mytype,receivertype);
    }
  }
  chatheadBuyer_msg(id) {
    var receiverid = id;
    this.msgview = true;
    var receivertype = 'buyer';
  
    let Buyername = (<HTMLInputElement><any>document.getElementById("chatheadBuyer_msg" + id)).innerHTML;
    document.getElementById("name_msg").innerHTML = Buyername;
    var Adminid = this.getCookie("AdminId");
    var Userid = this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");
    console.log(Sellerid,Adminid,Userid);
    
    if (( Adminid.indexOf('') >= 0) && ( Userid.indexOf('') >= 0)) {
      var mytype = 'seller';
      let myid = Sellerid;
      this.threadpush_msg(myid,receiverid,mytype,receivertype);
    }
    
    if (( Userid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'admin';
      let myid = Adminid;
      this.threadpush_msg(myid,receiverid,mytype,receivertype);
    }
    
    if (( Adminid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'buyer';
      let myid = Userid;
      this.threadpush_msg(myid,receiverid,mytype,receivertype);
    }
  }
  chatheadSeller_msg(id) {
    let receiverid = id;
    console.log(receiverid);
    
    this.msgview = true;
    var receivertype = 'seller';
  
    let Sellername = (<HTMLInputElement><any>document.getElementById("chatheadSeller_msg" + id)).innerHTML;
    document.getElementById("name_msg").innerHTML = Sellername;

    var Adminid = this.getCookie("AdminId");
    var Userid = this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");
    console.log(this.Sellerid,this.Adminid,this.Userid);
    
    if (( Adminid.indexOf('') >= 0) && ( Userid.indexOf('') >= 0)) {
      var mytype = 'seller';
      let myid = Sellerid;
    }
    
    if (( Userid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'admin';
      let myid = Adminid;
    }
    
    if (( Adminid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'buyer';
      let myid = Userid;
    }
  }
  threadpush_msg(myid,receiverid,mytype,receivertype) {
    console.log("threadpush started");
    console.log(receiverid);
    
    this.data.makethread_msg(myid,receiverid,mytype,receivertype).subscribe(
      data => {
        this.threadid = data;
        this.fetchmsg();
      }
    );
  }
  fetchmsg() {
    var i;
    let sender_type;
    let msg;
    this.data.fetchmsg(this.threadid).subscribe(
      data => {
        for (let item in data) {
          msg = data[item]['message'];
          sender_type = data[item]['sender_type'];
          // console.log(sender_type);
          if (sender_type == "seller") {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg;
            msglist.style.padding = "10px";
            document.getElementById('dvMsgUiDiv_msg').appendChild(msglist);
            // console.log(msg);
          }
          else {
            var msglist = document.createElement('div');
            msglist.style.background = "#dbdbdb";
            msglist.style.width = "300px";
            msglist.style.height = "auto";
            msglist.style.marginTop = "20px";
            msglist.style.borderRadius = "10px";
            msglist.innerHTML = msg;
            msglist.style.padding = "10px";
            msglist.style.marginLeft = "460px";
            msglist.style.marginBottom = "35px";
            document.getElementById('dvMsgUiDiv_msg').appendChild(msglist);
            // console.log(msglist);
          }
        }
      },
      error => console.error(error)
    );
  }
  msg_msg() {

    console.log("msg reached");
    console.log(this.receiverid);
    
    var Adminid = this.getCookie("AdminId");
    var Userid = this.getCookie("userId");
    var Sellerid = this.getCookie("sellerId");
    
    if (( Adminid.indexOf('') >= 0) && ( Userid.indexOf('') >= 0)) {
      var mytype = 'seller';
      var myid = Sellerid;
      this.chat_msg(myid,mytype,this.receiverid,this.receivertype);
    }
    else if (( Userid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'admin';
      var myid = Adminid;
      this.chat_msg(myid,mytype,this.receiverid,this.receivertype);
    }
    else if (( Adminid.indexOf('') >= 0) && ( Sellerid.indexOf('') >= 0)) {
      var mytype = 'user';
      var myid = Userid;
      this.chat_msg(myid,mytype,this.receiverid,this.receivertype);
    }
  }
  chat_msg(myid,mytype,receiverid,receivertype){
    console.log(myid,mytype,receiverid,receivertype);
      let msg = (<HTMLInputElement><any>document.getElementById('msgsent')).value;
      this.data.msgsent_msg(msg, this.threadid, this.receiverid, this.receivertype).subscribe(
        data => {
          let msg = data[0]['message'];
          console.log(msg);
        },
        error => console.error(error)
      );
  }

  //   if (mytype = 'seller') {
  //     console.log(this.threadid);
  //     console.log("msg reached seller" ,myid,mytype);
  //     let msg = (<HTMLInputElement><any>document.getElementById('msgsent')).value;

  //     this.data.msgsent_msg(msg, this.threadid, this.receiverid, this.receivertype).subscribe(
  //       data => {
  //         let msg = data[0]['message'];
  //         console.log(msg);
  //       },
  //       error => console.error(error)
  //     );
  //   }
  //   if(mytype = 'user') {
  //     console.log("msg reached user");
  //     let msg = (<HTMLInputElement><any>document.getElementById('msgsent')).value;
  //     let sender_type = 'seller';
  //     this.data.msgsent_msg(msg, this.threadid, this.receiverid, this.receivertype).subscribe(
  //       data => {
  //         let msg = data[0]['message'];
  //         console.log(msg);
  //       },
  //       error => console.error(error)
  //     );
  //   }
  //   if (mytype = 'admin') {
  //     console.log("msg reached admin");
  //     let msg = (<HTMLInputElement><any>document.getElementById('msgsent')).value;
  //     let sender_type = 'buyer';
  //     this.data.msgsent_msg(msg, this.threadid, this.receiverid, this.receivertype).subscribe(
  //       data => {
  //         let msg = data[0]['message'];
  //         console.log(msg);
  //       },
  //       error => console.error(error)
  //     );
  //   }
}
