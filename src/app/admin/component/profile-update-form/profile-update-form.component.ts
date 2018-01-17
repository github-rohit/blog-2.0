import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-update-form',
  templateUrl: './profile-update-form.component.html',
  styleUrls: ['./profile-update-form.component.css']
})
export class ProfileUpdateFormComponent {

  hide = true;
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      aboutme: [''],
      website: [''],
      gender: [''],
      location: [''],
      facebook: [''],
      twitter: [''],
      google_plus: [''],
      linkedIn: [''],
      instagram: [''],
      tumblr: [''],
      pinterest: ['']
    });
  }

  submit() {
    console.log('SUBMIT');
  }

}
