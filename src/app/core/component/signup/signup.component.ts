import { DataService } from './../../../shared/services/data.service';
import { ComparePasswordValidation } from './../../validation/compare-password.validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
    private fb: FormBuilder,
    private http: Http
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
    if (!this.form.valid) {
      return;
    }

    this.http.post('/api/signup', this.form.value).subscribe(() => {
      this.success = true;
    }, (error: Response) => {
      if (error.status === 400) {
        this.form.controls['email'].setErrors(error.json());
      } else {
        throw error;
      }
    });
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
