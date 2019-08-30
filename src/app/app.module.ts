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

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
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
    RegistrationSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ActivatedRoute,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule, 
    MatButtonModule, 
    RouterModule.forRoot([
      {
        path: 'Plandetails',
        component: PlandetailsComponent,
      },
      {
        path: 'Login',
        component: LoginComponent
      },
    ])
  ],
  providers: [CookieService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
