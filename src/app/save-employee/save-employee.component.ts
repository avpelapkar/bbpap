import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {

  title : string = "Edit Employee";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  sub: any;
  action : string = 'edit';
  isEditMode : boolean = true;
  empoyeeId		:	string;
  badge			:	string;
  initial			:	string;
  pin				:	string;
  email			:	string;
  firstName		:	string;	
  lastName		:	string;
  gender			:	string;
  phoneNumber		:	string;
  groupId			:	string;
  jobCode			:	string;
  addressLine1	:	string;	
  addressLine2	:	string;
  addressLine3	:	string;
  city			:	string;
  state			:	string;
  countryCode		:	string;
  zip				:	string;
  status			:	number;	
  pointEligibility :	boolean; 

  constructor(private route:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params =>{
      this.action = params['action'];
  });

    if(this.action=='edit'){
      this.isEditMode = true;
    }else{
      this.isEditMode = false;
      this.title = "Create a new employee";
    }
  }

  addEmployee(){
    alert('sd');
  }

}
