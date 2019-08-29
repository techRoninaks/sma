import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategorylistingComponent } from './categorylisting/categorylisting.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserprofileBuyerComponent } from './userprofile-buyer/userprofile-buyer.component';
import { RegistrationSellerComponent } from './registration-seller/registration-seller.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,    
    CategorylistingComponent,
    LoginComponent,
    RegistrationComponent,
    PlandetailsComponent,
    UserprofileBuyerComponent,
    RegistrationSellerComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [DataService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
