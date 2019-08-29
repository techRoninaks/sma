import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CategorylistingComponent } from './categorylisting/categorylisting.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path:'listing', component:ListingComponent },
    { path:'categorylisting', component:CategorylistingComponent},
    { path:'cart', component:CartComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
