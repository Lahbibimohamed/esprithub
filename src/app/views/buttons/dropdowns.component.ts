import {Component, OnDestroy} from '@angular/core';
import {Response} from "../../Entities/response";
import {AnswerServiceService} from "../../Service/answer-service.service";
import {UserQuestion} from "../../Entities/user-question";


@Component({
  templateUrl: 'dropdowns.component.html',
  styleUrls: ['dropdowns.component.css']
})
export class DropdownsComponent {
A:Response=new Response();
userresponse:UserQuestion[];

  constructor(private service:AnswerServiceService) { }

  ngOnInit(): void{
    this.service.getQuestionAnswers(1).subscribe(listres=>{
      this.userresponse=listres;
    })
  }
  addAnswer(){
    console.log(this.A);
    this.service.addAnswer(this.A).subscribe();
  }


}
