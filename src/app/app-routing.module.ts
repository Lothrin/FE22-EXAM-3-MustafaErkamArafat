import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
