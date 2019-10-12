import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shopHead: string = "CAKE HUT";
  shopRating: number = 4.5;
  shopReview: number = 100;
  followCount: number = 100;
  shopViewCount: number = 500;
  productViewCount: number = 1143;
  totalSales: number = 123;
  activeProd: number = 54;
  returns: number = 90;
  quoteCount: number = 5;
  dummySales: any = [1, 2, 3, 4, 5, 6];
  amountArray: any = [];
  xAxis: any = [];
  countArray: Object = {};
  purchaseArray: Object = {};
  notifyArray: Object = {};

  //Chart details
  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };

  public lineChartLabels = this.xAxis;
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [{
    data: this.amountArray,
    label: 'Sales'
  }];

  constructor(private cookieService: CookieService, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.setCookie("userId", "1");
    if (this.getCookie("userId")) {
      this.loadDashboard(this.getCookie("userId"));
    } else {
      this.router.navigate(['/login']);
    }
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
  //Cookie Over

  loadDashboard(sellerId) {
    var i = 0;
    this.data.getCharts(sellerId, "month").subscribe(data => {
      for (i = 0; i < Object.keys(data).length; i++) {
        this.amountArray[i] = data[i].amount;
        this.xAxis[i] = data[i].xAxis;
      }
    })
    this.data.getSellCount(sellerId).subscribe(data => {
      this.countArray = data;
    })
    this.data.getPurchasCount(sellerId).subscribe(data => {
      this.purchaseArray = data;
    })
    this.data.getNotifyCount(sellerId).subscribe(data => {
      this.notifyArray = data;
    })
  }

  toggleGraph(type) {
    var sellerId = this.getCookie("userId");
    var i = 0;
    var amar = [];
    var x = [];
    var prevId = document.getElementsByClassName("activeText")[0].id;
    document.getElementById(prevId).classList.remove("activeText");
    document.getElementById(type).classList.add("activeText");
    
    this.data.getCharts(sellerId, type).subscribe(data => {
      for (i = 0; i < Object.keys(data).length; i++) {
        amar[i] = data[i].amount;
        x[i] = data[i].xAxis;
      }
    })

    this.lineChartData = [{
      data: amar,
      label: 'Sales'
    }];
    this.lineChartLabels = x;
  }
}  
