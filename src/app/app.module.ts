import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './component/employe/employe.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EditComponent } from './component/edit/edit.component';
import { UploadComponent } from './component/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeComponent,
    AddEmployeeComponent,
    EditComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
