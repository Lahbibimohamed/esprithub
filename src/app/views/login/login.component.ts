import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entities/user';
import {AuthService} from "src/app/Service/auth.service"
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  user:User;
  error:string="Invalid email or password";
  navigate:boolean=true;
  helper = new JwtHelperService();
  decodedToken: any;
  constructor(private loginUser:AuthService , private router : Router ) {
    this.user = new User();
   }
  ngOnInit() :void {

  }
  login(){
    this.loginUser.loginuser(this.user).
        subscribe(
          res =>
          {
            if(this.loginUser.getRole()=="user not found"){
              localStorage.removeItem("token")
              this.navigate=false;
              this.router.navigate(["/login"])}
            if (this.loginUser.getRole()=="admin"){
              this.router.navigate(["/dashboard"])}

            if((this.loginUser.getRole()=="user") || (this.loginUser.getRole()=="teacher")){
              this.router.navigate(["/dashboard"])}
            }

    )
  }

}
