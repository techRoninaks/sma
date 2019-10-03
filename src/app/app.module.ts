import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategorylistingComponent } from './categorylisting/categorylisting.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import {MatCardModule, MatButtonModule} from '@angular/material';
// import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserprofileBuyerComponent } from './userprofile-buyer/userprofile-buyer.component';
import { RegistrationSellerComponent } from './registration-seller/registration-seller.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ListingComponent } from './listing/listing.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { TransactionComponent } from './transaction/transaction.component';
import { SellerlandingComponent } from './sellerlanding/sellerlanding.component';
import * as bootstrap from 'bootstrap';
import * as $ from "jquery";
import { MatInputModule, MatFormFieldModule} from '@angular/material';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ManageshopComponent } from './manageshop/manageshop.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactComponent } from './contact/contact.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatAutocompleteModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListingComponent,
    CategorylistingComponent,
    HomeComponent,
    ShopProfileComponent,
    FooterComponent,    
    LoginComponent,
    RegistrationComponent,
    PlandetailsComponent,
    UserprofileBuyerComponent,
    CartComponent,
    RegistrationSellerComponent,
    TransactionComponent,
    ManageshopComponent,
    OrdersComponent,
    ManageOrdersComponent,
    ContactComponent,
    AddProductComponent,
    SellerlandingComponent,
    TermsConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    // ActivatedRoute,
    MatFormFieldModule,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule, 
    MatButtonModule, 
    MatAutocompleteModule,
    RouterModule.forRoot([
      {
        path: 'plandetails',
        component: PlandetailsComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  providers: [CookieService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
