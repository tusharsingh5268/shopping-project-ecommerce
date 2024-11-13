import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../environment/enviroment';
import { ServiceEndPoints } from '../service-endpoints/service-endpoints';
import { sellerProduct } from '../seller-datetype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private environment:Environment, private serviceEndpoints:ServiceEndPoints) { }

  addSellerProduct(params:sellerProduct){
    const url=this.environment.baseUrl + this.serviceEndpoints.addProduct;
    return this.http.post(url,params)
  }
}
