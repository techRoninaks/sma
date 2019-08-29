import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListingComponent } from './listing/listing.component';
import { CategorylistingComponent } from './categorylisting/categorylisting.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
