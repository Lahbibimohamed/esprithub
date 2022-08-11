import { Component } from '@angular/core';
import {Question} from "../../Entities/question";
import {QuestionServiceService} from "../../Service/question-service.service";
import {UserQuestion} from "../../Entities/user-question";

@Component({
  templateUrl: 'brand-buttons.component.html'
})
export class BrandButtonsComponent {
Q:Question;
  userquestions:UserQuestion[];
  constructor(private service:QuestionServiceService) { }

  ngOnInit(): void{
    this.service.getAllUserQuestion().subscribe(data=>{
      this.userquestions=data;
    })
  }
  addQuestion(){
    this.service.addQuestion(this.Q).subscribe();
  }


}
