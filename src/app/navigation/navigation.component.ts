import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthorizationService } from "../customService/authorization.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  authorizationService : AuthorizationService;

  constructor(private route:Router, private authService:AuthorizationService) {
    this.authorizationService= authService;
   }

  

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
