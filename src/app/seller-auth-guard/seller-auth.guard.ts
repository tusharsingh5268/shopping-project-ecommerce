import { CanActivateFn } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { inject } from '@angular/core';

export const sellerAuthGuard: CanActivateFn = (route, state) => {
  const seller = inject(SellerService);
  if(seller.getSellerLogged()){
    return true
  }else{
    return false;
  }
};
