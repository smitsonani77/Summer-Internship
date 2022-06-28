import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthGuard, LoggedInAuthGuard } from './_guard/auth.guard';
import { AuthService } from './_guard/auth.service';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent,canActivate:[LoggedInAuthGuard]
  },
  {
    path:'signup',component:SignupComponent,canActivate:[LoggedInAuthGuard]
  },
  {
    path:'dashboard',component:EmployeeComponent,canActivate:[AuthGuard]
  },
  // { path: 'edit/:id', component: EditemployeeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthService,AuthGuard,LoggedInAuthGuard]
})
export class AppRoutingModule { }
