import { Observable } from 'rxjs/Observable';
import { UserService } from './../../services/user.service';
import { async } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../../../shared/component/toast/toast.component';

@Component({
  selector: 'profile-update-form',
  templateUrl: './profile-update-form.component.html',
  styleUrls: ['./profile-update-form.component.css']
})
export class ProfileUpdateFormComponent implements OnInit {
  toast = {};
  user;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  submit() {
    this.userService.update('5a6363375254060f788b2fd2', this.form.value).subscribe(user => {
      this.toast = {
        classes: 'toast-success',
        message: 'Your profile has been updated successfully.'
      };
    }, error => {
      this.toast = {
        classes: 'toast-error',
        message: ':( OOPS something went wrong while updating your profile.'
      };
    });
  }

  async ngOnInit() {
   await this.userService.getById('5a6363375254060f788b2fd2').subscribe(user => {
     this.user = user[0];
     this.setFormValue();
   });
  }

  setFormValue() {

    this.form = this.fb.group({
      aboutme: [this.user.aboutme],
      website: [this.user.website],
      gender: [this.user.gender],
      location: [this.user.location],
      facebook: [this.user.facebook],
      twitter: [this.user.twitter],
      google_plus: [this.user.google_plus],
      linkedIn: [this.user.linkedIn],
      instagram: [this.user.instagram],
      tumblr: [this.user.tumblr],
      pinterest: [this.user.pinterest]
    });

  }

}
