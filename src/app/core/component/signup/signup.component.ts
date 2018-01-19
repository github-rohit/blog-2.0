import { ComparePasswordValidation } from './../../validation/compare-password.validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  success = false;
  hide = true;
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
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
    this.success = true;
  }

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordAgain() {
    return this.form.get('password_again');
  }

}
