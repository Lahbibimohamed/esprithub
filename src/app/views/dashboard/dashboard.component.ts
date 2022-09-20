import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { UsersServicesService } from 'src/app/Service/users-services.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  userCount:any
constructor(private userService:UsersServicesService){}
  ngOnInit(): void {
    // generate random values for mainChart
    this.userService.countUser().subscribe
    (data => this.userCount=data)
  }
}
