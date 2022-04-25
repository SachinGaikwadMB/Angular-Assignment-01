import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {path:'', component:WelcomeScreenComponent},
  {path:'product-list/product-details/:id', component:ProductDetailsComponent},
  {path:'product-list', component:ProductListComponent},
  {path:'product-list/add-new-product', component:AddNewProductComponent}
  /*page not found still remaining*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
