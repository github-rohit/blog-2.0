import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateFormComponent } from './component/profile-update-form/profile-update-form.component';
import { ProfileViewComponent } from './component/profile-view/profile-view.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { MyPostsComponent } from './component/my-posts/my-posts.component';

@NgModule({
  imports: [
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
    MyPostsComponent
  ],
  exports: [

  ]
})
export class AdminModule { }
