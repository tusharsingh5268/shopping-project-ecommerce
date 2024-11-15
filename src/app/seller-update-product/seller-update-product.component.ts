import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { sellerProduct } from '../seller-datetype'; 
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent implements OnInit {
  productItem:undefined | sellerProduct;
  productId:string | null="";
  prouctUpdateMessage="Product Updated";
  showUpdateMessage:boolean=false;
  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router){
  };
  ngOnInit(): void {
    this.productId=this.route.snapshot.paramMap.get('id');
    if(this.productId){
      this.productService.getProduct(this.productId).subscribe((res)=>{
        if(res){
          this.productItem=res;
        }
      })
    }
    
  }
  UpdateProductTrigger(product:sellerProduct){
    this.productId && this.productService.updateProduct(this.productId,product).subscribe((res)=>{
      if(res){
        this.showUpdateMessage=true;
        setTimeout(()=>{
          this.showUpdateMessage=false;
          this.router.navigate(["/sellerhome"])
        },3000)
      }else{
        this.showUpdateMessage=true;
        this.prouctUpdateMessage="Failed To Update Product";
        setTimeout(()=>{
          this.showUpdateMessage=false;
        },3000)
      }
    },err=>{
      this.showUpdateMessage=true;
      this.prouctUpdateMessage="Failed To Update Product"

    })
  }
}
