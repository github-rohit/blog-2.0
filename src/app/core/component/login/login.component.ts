import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      password: ['', [
        Validators.required
      ]]
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

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
