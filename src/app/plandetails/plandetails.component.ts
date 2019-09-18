import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { DataService } from '../data.service';
declare var gapi : any; 

// check this
@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.scss']
})
export class PlandetailsComponent implements OnInit {

  constructor(private data: DataService,private router: Router) { }
  dynamicDataFree: any = "";
  dynamicDataBasic: any = "";
  dynamicDataPremium: any = "";
  dynamicDataPlus: any = "";
  ngOnInit() 
  {
    this.data.getPlanDetailsFree(this.data).subscribe(
      data=>{
              this.dynamicDataFree=data;
            },
        error=> console.error(error)
      );
    this.data.getPlanDetailsBasic(this.data).subscribe(
      data=>{
              this.dynamicDataBasic=data;
            },
        error=> console.error(error)
      );
    this.data.getPlanDetailsPremium(this.data).subscribe(
      data=>{
              this.dynamicDataPremium=data;
            },
        error=> console.error(error)
      );
    this.data.getPlanDetailsPlus(this.data).subscribe(
      data=>{
              this.dynamicDataPlus=data;
            },
        error=> console.error(error)
      );
  }
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out');
    });
  }
  fblogout(){
      FB.logout(function(response) {
        // user is now logged out
        console.log('User logout from FB');
      }
      )};
  redirect(){
    this.router.navigate(['/SignupSeller']);
  }
}
