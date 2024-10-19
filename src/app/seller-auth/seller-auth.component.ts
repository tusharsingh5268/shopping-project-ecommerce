import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService,private router:Router){}
  selleremail:string="";
  password:string="";
 
  ngOnInit(): void {}
  sellerSubmit(signForm:any){
    this.seller.sellerSignUp(signForm.form.value).subscribe((res)=>{
      if(res){
        console.log('res',res)
        signForm.reset();
        this.router.navigate(["/sellerhome"])
      }
    })
    console.log('selleremail',this.selleremail,this.password,signForm)
  }
}
