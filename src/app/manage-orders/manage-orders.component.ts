import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, RouterLink} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {

  constructor(private data: DataService,private router: Router,private route: ActivatedRoute,private cookieService: CookieService) { }
  id: any;
  sellerName: any;
  dynamicOrderData: any = "";
  ngOnInit() {
    this.id = this.getCookie("sellerId");
    this.sellerName = this.getCookie("sellerName");
    this.data.getIndividualOrderData(this.id).subscribe(
      data=>{
              this.dynamicOrderData=data;
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
