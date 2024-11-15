import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { sellerAuthGuard } from './seller-auth-guard/seller-auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"sellerauth",component:SellerAuthComponent},
  {path:"selleraddproduct",component:SellerAddProductComponent,canActivate:[sellerAuthGuard]},
  {path:"sellerhome",component:SellerHomeComponent,canActivate:[sellerAuthGuard]},
  {path:"sellerUpdateProduct/:id",component:SellerUpdateProductComponent,canActivate:[sellerAuthGuard]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
