import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../customService/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  



  constructor( private route:Router, private authService : AuthenticationService) { }
//private authService : AuthenticationService, 
  ngOnInit() {
  }

  authenticate(email:string, password:  string){
   /* this.authService.authenticate(email,password).subscribe(
      (data:any) =>{
        localStorage.clear();
        localStorage.setItem('userToken',JSON.stringify(data));
        this.route.navigate(['/point']);
      }
    );*/
    localStorage.clear();
    localStorage.setItem('userToken', 'default');
    localStorage.setItem('userRoles','["united-admin","int-admin"]');//"int-admin","united-admin"    
    this.route.navigate(['/point/findEmployee']);
  }
}
