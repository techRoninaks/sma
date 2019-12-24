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
import {MatGridListModule, MatIconModule} from '@angular/material';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ChartsModule } from 'ng2-charts';
import { ShopsettingComponent } from './shopsetting/shopsetting.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipModule } from 'ng2-tooltip-directive';
import {} from 'googlemaps';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';


var ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#EFBE24",
  "bgsOpacity": 0.8,
  "bgsPosition": "center-center",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 7,
  "delay": 0,
  "fgsColor": "#EFBE24",
  "fgsPosition": "center-center",
  "fgsSize": 70,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(4, 15, 21)",
  "pbColor": "#EFBE24",
  "pbDirection": "ltr",
  "pbThickness": 1,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 500
};

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
    DashboardComponent,
    ContactComponent,
    AddProductComponent,
    SellerlandingComponent,
    MessagesComponent,
    TermsConditionsComponent,
    MessagesComponent,
    ShopsettingComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    AutocompleteLibModule,
    MatTooltipModule,
    TooltipModule,
    // ActivatedRoute,
    MatFormFieldModule,
    ChartsModule ,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule, 
    MatTabsModule,
    MatButtonModule,
    MatIconModule, 
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
