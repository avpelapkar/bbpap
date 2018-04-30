import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeanDataExchange } from '../BeanDataExchange' ;


@Component({
  selector: 'app-point-details',
  templateUrl: './point-details.component.html',
  styleUrls: ['./point-details.component.css']
})
export class PointDetailsComponent implements OnInit {
  eventPointAdjustData : BeanDataExchange;
  displayPointAdjustComponent : boolean = false;
  isDisabled : boolean = false;

  employeeId:any;
  employeeName:any;
  points:number;
  company:any;
  subCompany:any;
  
  pointTranHistory:any;

  sub: any;

  constructor(private route:Router, private activatedRoute : ActivatedRoute) { 

  }

  ngOnInit() {
     this.sub = this.activatedRoute.params.subscribe(params =>{
      this.employeeId = params['employeeId'];
      this.employeeName = params['employeeName'];
      this.points = parseInt(params['points']);
      this.company = params['company'];
      this.subCompany = params['subCompany'];

      this.fetchPointTranHistory();
  });
  }

  displayPointAdjust(){
    this.displayPointAdjustComponent = true;
  }
  fetchPointTranHistory(){
    this.pointTranHistory = [
      {
        reason: 'returned',
        docType: 'RT',
        docNumber: '10',
        point:"10",
        createDate:"APR-15-2018"
      },{
        reason: 'invoice',
        docType: 'INV',
        docNumber: '458',
        point:"10",
        createDate:"APR-10-2018"
      },{
        reason: 'booking',
        docType: 'DT',
        docNumber: '1250',
        point:"10",
        createDate:"APR-01-2018"
      }
  ];
  } 

  receiveMessage($event){
    this.eventPointAdjustData = $event;
    this.displayPointAdjustComponent = false;
    this.points = this.points + parseInt(this.eventPointAdjustData.param2);

    this.pointTranHistory.unshift({
      reason: this.eventPointAdjustData.param1,
      docType: '',
      docNumber: '',
      point: this.eventPointAdjustData.param2,
      createDate:"APR-26-2018"
    });
  }

    /**  btnClick= function () {
        this.route.navigateByUrl('pointAdjust/'+ this.employeeId +'/'+this.company+'/'+this.subCompany);
        
        //this.route.navigate(['./pointAdjust', this.employeeId, this.company, this.subCompany, { relativeTo: this.activatedRoute } ]);
        this.isDisabled = true;
    }**/
}
