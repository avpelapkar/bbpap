import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeanDataExchange } from '../../BeanDataExchange' ;

@Component({
  selector: 'app-point-adjust',
  templateUrl: './point-adjust.component.html',
  styleUrls: ['./point-adjust.component.css']
})
export class PointAdjustComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<BeanDataExchange>();
  eventData : BeanDataExchange = new BeanDataExchange();

  employeeId:any;
  employeeName:any;
  pointToBeAdj:number;
  company:any;
  subCompany:any;
  sub: any;
  reasonCode : string;
  
  constructor(private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params =>{
      //this.employeeId = params['employeeId'];
     // this.employeeName = params['employeeName'];
      //this.pointToBeAdj = params['points'];
     // this.company = params['company'];
     //  this.subCompany = params['subCompany'];
    });   
  }

  adjustPoint(){
    //this.router.navigateByUrl('/point-details/'+ this.employeeId+'/'+this.employeeName+'/'+this.pointToBeAdj +'/'+this.company+'/'+this.subCompany);
    this.sendMessageToParent();
  }

  sendMessageToParent(){
    this.eventData.param1 = this.reasonCode;
    this.eventData.param2 = this.pointToBeAdj;
    this.messageEvent.emit(this.eventData);
  }

}
