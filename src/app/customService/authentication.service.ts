import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

 //------------Properties------------------
 readonly rootUrl="";
 
   //------------Helper Methods--------------
   constructor(private http: HttpClient ) { }
 
   //-------------HTTP Methods---------------
   authenticate(email: string , password: string){
     var body={
       Email : email,
       Password : password
     }
     return this.http.post(this.rootUrl+ '/api/authenticate',body);
   }

}
