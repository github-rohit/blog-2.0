import { SignupComponent } from './core/component/signup/signup.component';
import { LoginComponent } from './core/component/login/login.component';
import { ForgotPasswordComponent } from './core/component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './core/component/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AdminModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'resetpassword', component: ResetPasswordComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
