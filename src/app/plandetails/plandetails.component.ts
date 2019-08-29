import { Component, OnInit } from '@angular/core';
declare var gapi : any; 

// check this
@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.scss']
})
export class PlandetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
