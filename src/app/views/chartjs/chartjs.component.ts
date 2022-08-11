import { Component } from '@angular/core';
import {AnswerServiceService} from "../../Service/answer-service.service";
import {UserQuestion} from "../../Entities/user-question";

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {
resnotapp:UserQuestion[];
constructor(private service:AnswerServiceService){

}

  ngOnInit(): void{
  this.service.getQuestionAnswersNotApproved(1).subscribe(data=>{
    this.resnotapp=data;
  })
  }

  approveAnswer(id){
  this.service.approveAnswer(id).subscribe();
  }

  cancelAnswer(id){
  this.service.deleteAnswer(id).subscribe();
  }


}
