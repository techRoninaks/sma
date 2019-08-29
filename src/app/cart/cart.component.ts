import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  Objects = Object;

  constructor(private data: DataService) { }


  dynamicdata: any = "";
  varient: any = "";


  ngOnInit() {
    this.data.getcart().subscribe(data=>{
      this.dynamicdata = data;
      console.log(this.dynamicdata);
    });
    

  }

//   var app = angular.module("myApp", []);
//     app.controller('check', function ($scope) {
//     $scope.counter = 0;
//     $scope.count = function (inc) {
//     		if ($scope.counter >= 0){
//         $scope.counter += inc;
//         }
//     };
//     $scope.countneg = function (inc) {
//     		if ($scope.counter != 0){
//         $scope.counter -= inc;
//         }
//     };
// });

}
