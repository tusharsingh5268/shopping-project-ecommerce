import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { sellerProduct } from '../seller-datetype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  productImageList:undefined | sellerProduct[]
  constructor(private productService:ProductService){};

  ngOnInit(){
    this.productService.limitedProductList().subscribe((res)=>{
      if(res){
        this.productImageList=res
        console.log('res',res)
      }
    })
  }

}
