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
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  submit() {
    this.success = true;
    console.log('SUBMIT');
  }

  get email() {
    return this.form.get('email');
  }

}
