import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component'
import { PointComponent } from "./point/point.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PointDetailsComponent } from "./point-details/point-details.component";
import { AuthGuard } from "./auth/auth.guard";
import { ReasonCodeComponent } from "./reason-code/reason-code.component";
import { PointAdjustComponent } from "./point/point-adjust/point-adjust.component";
import { SaveEmployeeComponent } from "./save-employee/save-employee.component";

export const routes: Routes = [
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },

  //{path: '', redirectTo : '/login'},
  //{path: '**', redirectTo : '/login'},

  {
    path: 'point', canActivate: [AuthGuard],
    children: [{
      path: 'findEmployee', component: EmployeeComponent, canActivate: [AuthGuard]
    }]
    //, children: [{path: 'pointAdjust', component : PointAdjustComponent , canActivate : [AuthGuard]}]
  },

  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },

  { path: 'reason-code', component: ReasonCodeComponent, canActivate: [AuthGuard] },

  {
    path: 'point-details/:employeeId/:employeeName/:points', component: PointDetailsComponent, canActivate: [AuthGuard]
    , children: [{ path: 'pointAdjust/', component: PointAdjustComponent, canActivate: [AuthGuard] }]
  },

  { path: 'point/employee-details/:employeeId/:employeeName', component: PointDetailsComponent, canActivate: [AuthGuard] },

  { path: 'employee/add', component: SaveEmployeeComponent, canActivate: [AuthGuard] },
  
  { path: 'employee/add/:action', component: SaveEmployeeComponent, canActivate: [AuthGuard] }



];