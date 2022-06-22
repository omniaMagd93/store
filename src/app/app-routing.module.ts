import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent } from './products/products.component'
import {ProductDetailsComponent } from './product-details/product-details.component'
import {CartComponent } from './cart/cart.component'
import{ConfirmationComponent} from './confirmation/confirmation.component'

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'confirmation',component:ConfirmationComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
