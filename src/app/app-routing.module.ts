import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { SportsComponent } from './dashboard/sports/sports.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '' , component : LoginComponent},
  { path : 'dashboard' , component : DashboardComponent},
  { path : 'aboutUs' ,  component : AboutUsComponent},
  { path : 'employee' ,  component : EmployeeComponent},
  { path : 'sports' , component : SportsComponent},
  { path : 'feedback' , component : FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
