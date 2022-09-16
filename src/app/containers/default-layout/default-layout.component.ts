import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import {AuthService} from "src/app/Service/auth.service"
import { UsersServicesService } from 'src/app/Service/users-services.service';
import { User } from 'src/app/Entities/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  user:User ;
constructor(private router : Router ,private userService:UsersServicesService ){

}
ngOnInit() :void {
  this.userService.getinformations().subscribe(
    (data:User) => this.user=data
  )
  console.log(this.user)
}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"])

  }
  getimage(){
    this.userService.getinformations().subscribe(
      (data:User) => this.user=data
    )

  }
}
