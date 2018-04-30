import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../customService/authorization.service";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: any[] ;

  authorizationService : AuthorizationService;

  constructor(private authService:AuthorizationService) {
    this.authorizationService= authService;
   }
   emp : string[] = ["4988361059","8532154491"];
  ngOnInit() {
    
  }

  ngOnComplete(){
    $('#employeeId').autocomplete({
      source: this.emp
    });
  }
  
  search(){
    this.ngOnComplete();
    this.employeeList =
    [
      {
        employeeId: '4988361059',
        groupId : 'FA',
        jobCode : 'TL',
        firstName: 'Amey',
        lastName : 'Pelapkar',
        email: 'ameyp@gmail.com',
        phoneNumber : '+91 7897 5895 89',
        address_line1: 'Rockport',
        address_line2: 'Dallas',
        address_line3: 'Texas',
        city: 'Dallas',
        state: 'TX',
        countryCode : 'USA',
        zip: '75089',
        availablePoints: '120'
      },
      {
        employeeId: '8532154491',
        groupId : 'CS',
        jobCode : 'TL',
        firstName: 'Sandip',
        lastName : 'Tripathi',
        email: 'sandipt@gmail.com',
        phoneNumber : '+91 7987 5898 52',
        address_line1: 'Royal Avenue',
        address_line2: 'Lotus Plaza',
        address_line3: 'connecticut',
        city: 'connecticut',
        state: 'US',
        countryCode : 'USA',
        zip: '78952',
        availablePoints: '230'
      }
    ]
  }

}
