import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { sellerProduct } from '../seller-datetype';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {
  productList:sellerProduct[]=[];
  showItemAddMsg:boolean=false;
  addMessage:string=""
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.getProducts();
  };
  getProducts(){
    this.productService.getProductList().subscribe((res)=>{
      if(res){
        console.log('res',res)
        this.productList=res;
      }
    })
  }
  checkProductList(item:any){
    console.log('checkProductList',item)
    return item.id
  };
  productDelete(id:string){
    this.productService.deleteProductItem(id).subscribe((res)=>{
      if(res){
        this.showItemAddMsg=true;
        this.addMessage="Product is deleted";
        this.getProducts();
        setTimeout(()=>{
          this.showItemAddMsg=false;
          this.addMessage=""
        },3000)
        console.log('res',res)
      }
    })
  }

}
