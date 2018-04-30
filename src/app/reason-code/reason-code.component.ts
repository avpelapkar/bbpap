import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason-code',
  templateUrl: './reason-code.component.html',
  styleUrls: ['./reason-code.component.css']
})
export class ReasonCodeComponent implements OnInit {

  codePattern = "^([+]|[-]|[|]){1}$";

  codes : any[] ;

  constructor() { }

  ngOnInit() {
    this.getCodes();
  }

  add(){
    this.codes.unshift({
      code:'',
      description : ''      
    });
  }

  save(indx : number){
    alert('Saved!!');
  }

  remove(indx : number){
    this.codes.splice(indx,1);
  }

  getCodes(){
    this.codes = [
      {
        code:'INT',
        description : 'Initial',
        initial:'+',
        pending:'',
        redeemed:'',
        returned:'',
      },{
        code:'BKG',
        description : 'Booking',
        initial:'',
        pending:'+',
        redeemed:'',
        returned:'',
      },{
        code:'ORD',
        description : 'Ordered',
        initial:'',
        pending:'-',
        redeemed:'+',
        returned:'',
      },{
        code:'RET',
        description : 'Returned',
        initial:'',
        pending:'',
        redeemed:'-',
        returned:'+',
      },{
        code:'ADJ',
        description : 'Adjust',
        initial:'|',
        pending:'',
        redeemed:'',
        returned:'',
      }
    ];
  }

}
