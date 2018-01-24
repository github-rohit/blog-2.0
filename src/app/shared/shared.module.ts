import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommentService } from './services/comment.service';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { PostCardComponent } from './component/post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatComponentModule } from './component/mat-component/mat-component.module';
import { PostCommentComponent } from './component/post-comment/post-comment.component';
import { TinymceEditorComponent } from './component/tinymce-editor/tinymce-editor.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CategoryComponent } from './component/category/category.component';
import { CategoryService } from './services/category.service';
import { ReplaceWithDashPipe } from './pipes/replace-with-dash.pipe';
import { UserService } from './services/user.service';
import { ToastComponent } from './component/toast/toast.component';
import { RequestInterceptor } from './services/request-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  declarations: [
    PostCardComponent,
    PostCommentComponent,
    TinymceEditorComponent,
    TruncatePipe,
    CategoryComponent,
    ReplaceWithDashPipe,
    ToastComponent
  ],
  exports: [
    MatComponentModule,
    PostCardComponent,
    PostCommentComponent,
    TinymceEditorComponent,
    TruncatePipe,
    ReplaceWithDashPipe,
    CategoryComponent,
    ToastComponent
  ],
  providers: [
    PostService,
    CommentService,
    DataService,
    CategoryService,
    UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
      providers: [AuthService]
    }
  ]
})
export class SharedModule { }
