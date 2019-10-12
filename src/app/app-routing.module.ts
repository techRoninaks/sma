import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CategorylistingComponent } from './categorylisting/categorylisting.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import { UserprofileBuyerComponent } from './userprofile-buyer/userprofile-buyer.component';
import { RegistrationSellerComponent } from './registration-seller/registration-seller.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SellerlandingComponent } from './sellerlanding/sellerlanding.component';
import { CartComponent } from './cart/cart.component';
import { from } from 'rxjs';
import { ManageshopComponent } from './manageshop/manageshop.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactComponent } from './contact/contact.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listing', component: ListingComponent},
  { path: 'category', component: CategorylistingComponent},
  { path: 'categorylisting', component : CategorylistingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: RegistrationComponent},
  { path: 'plandetails',component:PlandetailsComponent},
  { path: 'managepage', component: ManageshopComponent},
  { path: 'userprofile',component:UserprofileBuyerComponent},
  { path: 'signupSeller',component:RegistrationSellerComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopProfileComponent},
  { path: 'transaction', component: TransactionComponent},
  { path: 'terms&conditions',component: TermsConditionsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'manageorders', component: ManageOrdersComponent},
  { path: 'addproduct', component: AddProductComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sellerlanding', component: SellerlandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
