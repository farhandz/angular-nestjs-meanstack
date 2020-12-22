import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { EmployeComponent } from './component/employe/employe.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EditComponent } from './component/edit/edit.component';
import { UploadComponent } from './component/upload/upload.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: 'employe',
    component: EmployeComponent
  },
  {
    path: 'employe-add',
    component: AddEmployeeComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'upload/:id',
    component: UploadComponent
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
