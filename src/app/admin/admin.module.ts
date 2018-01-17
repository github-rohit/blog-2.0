import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateFormComponent } from './component/profile-update-form/profile-update-form.component';
import { ProfileViewComponent } from './component/profile-view/profile-view.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'admin/profile/update',
      component: ProfileUpdateFormComponent
    }, {
      path: 'admin/profile',
      component: ProfileViewComponent
    }])
  ],
  declarations: [
    ProfileUpdateFormComponent,
    ProfileViewComponent
  ],
  exports: [

  ]
})
export class AdminModule { }
