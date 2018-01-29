import { HttpClient } from '@angular/common/http';
import { ComparePasswordValidation } from './../../validation/compare-password.validation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  success = false;
  error = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  submit() {
    
    if (!this.form.valid) {
      return;
    }

    this.http.post('/api/forgotpassword', this.form.value).subscribe(() => {
      this.success = true;
    }, error => {
      this.error = true;
    });
  }

  get email() {
    return this.form.get('email');
  }

}
