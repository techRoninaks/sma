import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor( private data: DataService ) { }
  varient:  any = "";

  ngOnInit() {
    this.data.getvariantInfo().subscribe(data=>{
      this.varient = data;
      // this.stage1 = true;
      console.log(this.varient);
    })
  }

}
