import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import { UserprofileBuyerComponent } from './userprofile-buyer/userprofile-buyer.component';
import{ RegistrationSellerComponent } from './registration-seller/registration-seller.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'SignUp', component: RegistrationComponent},
  {path: 'Plandetails',component:PlandetailsComponent},
  {path: 'Userprofile',component:UserprofileBuyerComponent},
  {path: 'SignupSeller',component:RegistrationSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
