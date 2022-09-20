import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { User } from 'src/app/Entities/user';
import { Option } from 'src/app/Entities/options';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UsersServicesService } from 'src/app/Service/users-services.service';
import { OptionsService } from 'src/app/Service/options.service';
import { AuthService } from 'src/app/Service/auth.service';
import { map, tap } from 'rxjs/operators';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user:User
  options:Option[];
  oldpassword:string ;
  newPassword :string;
  selectedFile:File=null;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;

  constructor(private router : Router,
    private userservice:UsersServicesService,
    private optionsService:OptionsService,
    private http:HttpClient,
    private authservice:AuthService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   this.userservice.getinformations().subscribe(
      (data:User) => this.user=data)
   this.optionsService.getOptions().subscribe(
      (data:Option[]) => this.options=data)

  }
  updateprofil(){
    this.userservice.update(this.user,this.user.id).subscribe()
    this.toastr.success("profil updated");

  }
  onfilselected(event){
    this.selectedFile=<File>event.target.files[0];
  }

  changePhoto(){
    const fd=new FormData();
    fd.append('File',this.selectedFile)
  this.http.post('http://localhost:8080/user/insertImage/'+this.user.id,fd).subscribe()
  this.toastr.success("photo changed Successfully");

  }
  getoption(e){
  this.user.option_id=e.target.value
  }
  changepassword(){
    const payload = new HttpParams()
  .set('oldpassword', this.oldpassword)
  .set('newPassword', this.newPassword);
   this.http.put<any>("http://localhost:8080/user/changePassowrd/"+this.user.id,payload).pipe(
    map(data =>
      {
        if (data.response=="wrong password"){
          this.toastr.error("wrong old password");
        }
        else {
          this.authservice.logout()
          this.router.navigate(["/login"])
          this.toastr.success("password changed Successfully");

        }
      }

    )
   ).subscribe()


  }


}
