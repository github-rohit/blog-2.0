import { HttpClient } from '@angular/common/http';
import { ComparePasswordValidation } from './../../validation/compare-password.validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  getSubscription: Subscription;
  submitSubscription: Subscription;
  hide = true;
  form: FormGroup;
  id;
  invalidUrl;
  isValid;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.form = fb.group({
      id: [this.id],
      passwd: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      passwd_again: ['', [
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

    this.submitSubscription = this.http.post('/api/resetpassword', this.form.value).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {

    });
  }

  get password() {
    return this.form.get('passwd');
  }

  get passwordAgain() {
    return this.form.get('passwd_again');
  }

  ngOnInit() {
    this.getSubscription = this.http.get('/api/resetpassword/' + this.id).subscribe(() => {
      this.isValid = true;
    }, res => {
      if (res.error.invalid) {
        this.invalidUrl = true;
      }
    });
  }

  ngOnDestroy() {
    this.getSubscription.unsubscribe();
    this.submitSubscription.unsubscribe();
  }
}
