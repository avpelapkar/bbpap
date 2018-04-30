import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  roleMatch(allowedRoles) : boolean{
    var isMatch = false;
    var userRoles : string[] = JSON.parse(localStorage.getItem('userRoles'));    
    allowedRoles.forEach(element => {      
      if(userRoles.indexOf(element) > -1){
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
