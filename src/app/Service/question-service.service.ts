import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../Entities/question";
import {Observable} from "rxjs";
import {UserQuestion} from "../Entities/user-question";

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  url : string = 'http://127.0.0.1:8082/EspritHub/';

  constructor(private http: HttpClient) { }

  addQuestion(Q:Question){
    return this.http.post(this.url+"question/addQuestion",Q)
  }
  getAllUserQuestion():Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"question/Userquestions")
  }
}
