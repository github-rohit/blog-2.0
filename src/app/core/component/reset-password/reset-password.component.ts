import { ComparePasswordValidation } from './../../validation/compare-password.validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  hide = true;
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      password_again: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
    }, {
      validator: ComparePasswordValidation.MatchPassword
    });
  }

  submit() {
    console.log('SUBMIT');
    this.router.navigate(['/admin/myposts'], {
      queryParams: {
        status: 'published'
      }
    });
  }

  get password() {
    return this.form.get('password');
  }

  get passwordAgain() {
    return this.form.get('password_again');
  }
}
