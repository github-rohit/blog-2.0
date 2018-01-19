import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateFormComponent } from './component/profile-update-form/profile-update-form.component';
import { ProfileViewComponent } from './component/profile-view/profile-view.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { MyPostsComponent } from './component/my-posts/my-posts.component';
import { AutoResizeTextareaDirective } from './directive/auto-resize-textarea.directive';
import {RlTagInputModule} from 'angular2-tag-input';

@NgModule({
  imports: [
    RlTagInputModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'admin/myposts',
      component: MyPostsComponent
    }, {
      path: 'admin/post/new',
      component: PostFormComponent
    }, {
      path: 'admin/profile/update',
      component: ProfileUpdateFormComponent
    }, {
      path: 'admin/profile',
      component: ProfileViewComponent
    }])
  ],
  declarations: [
    ProfileUpdateFormComponent,
    ProfileViewComponent,
    PostFormComponent,
    MyPostsComponent,
    AutoResizeTextareaDirective
  ],
  exports: [
    RlTagInputModule
  ]
})
export class AdminModule { }
