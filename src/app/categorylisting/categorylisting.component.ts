import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorylisting',
  templateUrl: './categorylisting.component.html',
  styleUrls: ['./categorylisting.component.scss']
})
export class CategorylistingComponent implements OnInit {
  token: any;

  constructor( private data: DataService, private route: ActivatedRoute ) { }
  dynamicData: any = "";

  ngOnInit() {

      this.route.queryParams.subscribe(params => {
        this.token = params['prod_id'];
      });

      this.data.getProductData(this.token).subscribe(
        data => {
          this.dynamicData = data;
        },
        error => console.error(error)
      );
  }
  

}