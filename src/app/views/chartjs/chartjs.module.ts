import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import {FormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    FormsModule,
    CommonModule

  ],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
