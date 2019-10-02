import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  router: any;
  public token: any;
  tokenObj: any;
  Object = Object;
  tokenSel: any;
  transactionData: any = [];
  transactionStatus: any = [];
  statusDetails: any;
  userId: any;

  constructor(private data: DataService, private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    this.setCookie("userId", 2);
    this.userId = this.getCookie("userId");

    this.route.queryParams.subscribe(params => {
      this.token = params['shop_id'];
      this.tokenObj = { shop_id: this.token, user_id: this.userId };
      this.tokenSel = params['seller_id'];
    });
    this.data.getTransactionDetails(this.tokenSel).subscribe(
      data => {
        this.transactionData = data;
      }
    );
    this.data.getTransStatus(this.tokenSel).subscribe(
      data => {
        this.transactionStatus = data;
      }
    );
  }

  // Cookie Section BEGN
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  deleteCookie(cname) {
    this.cookieService.delete(cname);
  }

  allStatus() {
    this.data.getTransactionDetails(this.tokenSel).subscribe(
      data => {
        this.transactionData = data;
      }
    );
  }
  stat(status: any) {
    this.statusDetails = { seller_id: this.tokenSel, status_name: status };
    this.data.getTransFiltered(this.statusDetails).subscribe(
      data => {
        this.transactionData = data;
      }
    );
  }
}
