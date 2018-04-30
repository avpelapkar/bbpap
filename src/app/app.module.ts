import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from '././user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';

import { routes } from './route';
import { PointComponent } from './point/point.component';

import { AuthenticationService } from "./customService/authentication.service";
import { AuthorizationService } from "./customService/authorization.service";

import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from "./auth/auth.guard";
import { EmployeeComponent } from './employee/employee.component';
import { PointDetailsComponent } from './point-details/point-details.component';
import { ReasonCodeComponent } from './reason-code/reason-code.component';
import { PointAdjustComponent } from './point/point-adjust/point-adjust.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    PointComponent,
    NavigationComponent,
    EmployeeComponent,
    PointDetailsComponent,
    ReasonCodeComponent,
    PointAdjustComponent,
    SaveEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthorizationService, HttpClient, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
