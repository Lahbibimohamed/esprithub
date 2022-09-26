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
    return this.http.put(this.url+"/managment/changeRole/"+id,user);

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
  //count all users
  countUser(){
    return this.http.get(this.url+"/countUser");
  }
    //count todays users
    countUserByDay(){
      return this.http.get(this.url+"/usersDay");
    }
    //count user with ROle User
    countUserRole(){
      return this.http.get(this.url+"/getRoleUser");
    }

    //count user with ROle Teacher
    countTeacherRole(){
      return this.http.get(this.url+"/getRoleTeacher");
    }
      //count user with ROle Teacher
      getUserPerMonth(){
        return this.http.get<number[]>(this.url+"/getUserPerMonth");
      }




}
