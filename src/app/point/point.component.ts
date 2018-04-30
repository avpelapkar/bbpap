import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../customService/authorization.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  employeeId:any;
  employeeName : any;
  company:any;
  subCompany:any;
  
  sub: any;



  authorizationService : AuthorizationService;
 
  constructor( private authService:AuthorizationService, private activatedRoute : ActivatedRoute) {
    this.authorizationService= authService; 
  }
  
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params =>{
      this.employeeId = params['employeeId'];
      this.employeeName = params['employeeName'];
      this.company = params['company'];
      this.subCompany = params['subCompany'];
    });
  }  

}
