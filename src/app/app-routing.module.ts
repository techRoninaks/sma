import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CategorylistingComponent } from './categorylisting/categorylisting.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component'
const routes: Routes = [
  {path: '',component:ShopProfileComponent},
  {path: 'listing',component:ListingComponent},
  {path: 'categorylisting',component:CategorylistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
