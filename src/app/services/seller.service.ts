import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Environment } from '../environment/enviroment';
import { ServiceEndPoints } from '../service-endpoints/service-endpoints';
import { SellerDataType } from '../seller-datetype';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient,private environment:Environment,private serviceEndpoints:ServiceEndPoints) { }
  sellerSignUp(sellerData:SellerDataType){
    const url=this.environment.baseUrl + this.serviceEndpoints.createSeller;
    console.log('Seller',sellerData,url)
    return this.http.post(url,sellerData)
  }
}
