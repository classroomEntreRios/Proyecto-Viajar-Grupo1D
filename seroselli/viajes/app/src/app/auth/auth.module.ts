import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';


@NgModule({
  declarations: [LoginuserComponent, RegisterComponent, ResetPasswordComponent, LoginuserComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginuserComponent, 
    RegisterComponent, 
    ResetPasswordComponent
  ]
})
export class AuthModule { }
