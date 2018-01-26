import { NotAuthGuard } from './core/services/not-auth-guard.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { PostComponent } from './post/component/post/post.component';
import { SignupComponent } from './core/component/signup/signup.component';
import { LoginComponent } from './core/component/login/login.component';
import { ForgotPasswordComponent } from './core/component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './core/component/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PostModule } from './post/post.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    PostModule,
    RouterModule.forRoot([
      { path: '', component: PostComponent },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard]
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [NotAuthGuard]
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
        canActivate: [NotAuthGuard]
      },
      {
        path: 'resetpassword',
        component: ResetPasswordComponent,
        canActivate: [NotAuthGuard]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
