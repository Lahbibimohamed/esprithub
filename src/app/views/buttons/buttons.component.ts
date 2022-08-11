import { Component } from '@angular/core';
import {QuestionServiceService} from "../../Service/question-service.service";
import {Question} from "../../Entities/question";

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  Q:Question=new Question();
  constructor(private service:QuestionServiceService) { }
  addQuestion(){
    this.service.addQuestion(this.Q).subscribe();
  }

}
