import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DataService } from '../shared/services/data.service';
import { AuthorComponent } from './component/author/author.component';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'author/:id/:name',
      component: AuthorComponent
    }])
  ],
  declarations: [
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AuthorComponent,
    PageLoaderComponent
  ],
  providers: [
    DataService
  ],
  exports: [
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    PageLoaderComponent
  ]
})
export class CoreModule { }
