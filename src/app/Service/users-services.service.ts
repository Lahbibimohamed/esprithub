import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Entities/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  url : string = 'http://localhost:8080/user';
  fd:FormData;
   queryParams = new HttpParams();

  constructor(private http: HttpClient) { }
  getUsers()
  {
    return this.http.get<User[]>(this.url+"/list");
  }
  deleteUser(id:number){


    return this.http.delete(this.url+"/managment/delete/"+id);
  }
  findbyId(id:number){

    return this.http.get<User>(this.url+"/managment/findById/"+id);

  }

  changeRole(user:User,id:number){
    return this.http.put(this.url+"/update/"+id,user);

  }
  update(user:User,id:number){
    return this.http.put(this.url+"/update/"+id,user);

  }
  updateImage(id:number){
    return this.http.put(this.url+"/insertImage"+id,this.fd);

  }
  getinformations():Observable<User>{
    return this.http.get<User>(this.url+"/findByToken");
    }

  getrole(id:number){
    return this.http.get(this.url+"/managment/getrole/"+id);

  }
  countUser(){
    return this.http.get(this.url+"/countUser");
  }


}
