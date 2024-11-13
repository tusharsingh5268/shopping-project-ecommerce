import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userType:string="default";
  sellerEmail:string=""
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.events.subscribe((res:any)=>{
      if(res.url){
        console.log('res',res.url)
          if(localStorage.getItem('seller') && res.url.includes("seller")){
            this.userType="seller";
            let sellerData=localStorage.getItem('seller')
            let parsedSellerData=sellerData && JSON.parse(sellerData)
            this.sellerEmail=parsedSellerData.selleremail
            console.log("If 2nd")
          }else{
            this.userType="default"
            console.log("Outsode Seller")
          }
      }
    })
  }
  sellerLogout(){
     this.userType="default";
     localStorage.removeItem("seller")
     this.router.navigate(["/"])
  }
}
