import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  selleremail:string="";
  password:string=""

  sellerSubmit(signForm:any){
      console.log('selleremail',this.selleremail,this.password,signForm)
  }
}
