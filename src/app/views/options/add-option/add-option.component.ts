import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/Entities/options';
import { OptionsService } from 'src/app/Service/options.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent implements OnInit {
  option:Option;
    constructor(private optionsService:OptionsService ,private router : Router,private toastr: ToastrService) {
      this.option= new Option() ;
    }

  ngOnInit(): void {
  }
  save(){
    this.optionsService.saveOption(this.option).subscribe()
    this.router.navigate(["/theme/options"]);
    this.toastr.success("Option added Successfully");


  }

}
