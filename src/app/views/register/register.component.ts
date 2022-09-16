import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/user';
import { Router } from '@angular/router';

import {AuthService} from "src/app/Service/auth.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{
  user:User;
  constructor(private register:AuthService ,private router : Router) {
    this.user = new User();
   }
    ngOnInit() :void {
      console.log(this.user);
    }
    save(){
      this.register.SaveUser(this.user).subscribe();
      this.router.navigate(["/login"]);
    }

}
