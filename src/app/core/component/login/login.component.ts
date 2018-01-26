import { AuthService } from './../../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  returnUrl;
  hide = true;
  form: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
    this.form = fb.group({
      email: ['', [
        Validators.required,
        Validators.email]],
        passwd: ['', [
        Validators.required
      ]]
    });
  }

  routeToAdmin() {
    if (this.returnUrl) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.router.navigate(['/admin/myposts'], {
        queryParams: {
          status: 'published' 
        }
      });      
    }
  }

  submit() {
    this.http.post('/api/login', this.form.value).subscribe((res: any) => {
      this.authService.token = res.token;
      this.routeToAdmin();
    }, (res) => {
      if (res.error) {
        this.form.setErrors(res.error);
      }
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('passwd');
  }

}
