import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { LoginComponent } from './features/auth/views/login/login.component';
import { ContainerComponent } from './features/container/container.component';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';
import { HomeComponent } from './features/home/views/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'cbt',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
        { path: ':id/emp-details', component: EmployeeDetailsComponent, canActivate : [AuthGuard] }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
