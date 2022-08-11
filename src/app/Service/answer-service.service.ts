import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Response} from "../Entities/response";
import {Observable} from "rxjs";
import {UserQuestion} from "../Entities/user-question";

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {

  url : string = 'http://127.0.0.1:8082/EspritHub/';

  constructor(private http: HttpClient) { }

  addAnswer(A:Response){

    return this.http.post(this.url+"question/addAnswer",A);
  }

  getQuestionAnswers(id):Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"response/QuestionAnswers",{params:{id:id}});

  }

  getQuestionAnswersNotApproved(id):Observable<UserQuestion[]>{
    return this.http.get<UserQuestion[]>(this.url+"response/QuestionAnswersNotApproved",{params:{id:id}});

  }

  approveAnswer(id){
    return this.http.post(this.url+"response/ApproveAnswer",{params:{id:id}})
  }

  deleteAnswer(id){
    return this.http.post(this.url+"response/CancelAnswer",{params:{id:id}})
  }
}
