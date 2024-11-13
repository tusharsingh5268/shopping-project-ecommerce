import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { sellerProduct } from '../seller-datetype';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {
  showSuccess:boolean=false;
  showError:boolean=false
  message:string=""
  constructor(private sellerProduct:ProductService ){}
  addProductTrigger(productForm:NgForm){
    console.log()
    this.sellerProduct.addSellerProduct(productForm.form.value).subscribe((res)=>{
      if(res){
        this.showSuccess=true;
        this.showError=false;
        this.message="Product is Successfully added";
        console.log('res',res,this.showSuccess,this.showError)
      }else{
        this.showSuccess=false;
        this.showError=true;
        this.message="Product is not added";
        
      }
      productForm.reset();
      setTimeout(()=>{
        this.showSuccess=false;
        this.showError=false;
        this.message="";
      },3000)
    },err=>{
      this.showSuccess=false;
      this.showError=true;
      this.message="API Failed";
      productForm.reset();

    })
    console.log('productForm',productForm)

  }
}
