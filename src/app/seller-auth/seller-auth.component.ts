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
  isSignUp:boolean=true;
  authFailText:string="Email or Password is incorrect"
  isLoginFail:boolean=false;
  sellerFormHeader="Seller Sign Up Form";
  loginOrSignupText="Already have Account? Click to Login";
 
  ngOnInit(): void {}
  sellerSubmit(signForm:any){
    this.seller.sellerSignUp(signForm.form.value).subscribe((res)=>{
      if(res){
        console.log(signForm.form.value,'signForm.form.value')
        signForm.reset();
        console.log('JSONsignForm.form.value',JSON.stringify(signForm.form.value))
        localStorage.setItem('seller',signForm.form.value)
        this.seller.setSellerLogged(true)
        this.router.navigate(["/sellerhome"])
      }
    })
    console.log('selleremail',this.selleremail,this.password,signForm)
  }
  sellerLoginSubmit(signForm:any){
    this.isLoginFail=false;
    console.log(signForm.form.value,'signForm.form.value')
    this.seller.sellerLogin(signForm.form.value).subscribe((res:any)=>{
      if(res && res[0]){
        console.log()
        localStorage.setItem('seller',res[0])
        this.router.navigate(["/sellerhome"])
        console.log('res',res)
        this.isLoginFail=false;
      }else{
        this.isLoginFail=true;
        setTimeout(()=>{
          this.isLoginFail=false;
        },3000)
      }
    })
  }
  loginBtnClick(){
    this.selleremail="";
    this.password="";
    this.isSignUp=!this.isSignUp
    if(this.isSignUp){
      this.sellerFormHeader="Seller Sign Up Form"
      this.loginOrSignupText="Already have Account? Click to Login";
    }else{
      this.sellerFormHeader="Seller Login Form"
      this.loginOrSignupText="Don't have Account? Click to Sign Up";
    }
  }
}
