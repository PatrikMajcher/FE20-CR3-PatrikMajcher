import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'menu', component: MenuComponent },
{ path: 'aboutus', component: AboutUsComponent },
{ path: 'details/:details', component: DetailsComponent },
{ path: 'cart', component: CartComponent },
{ path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
