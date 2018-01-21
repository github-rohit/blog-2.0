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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentModule,
    HttpModule,
    RouterModule.forChild([])
  ],
  declarations: [
    PostCardComponent,
    PostCommentComponent,
    TinymceEditorComponent,
    TruncatePipe,
    CategoryComponent
  ],
  exports: [
    MatComponentModule,
    PostCardComponent,
    PostCommentComponent,
    TinymceEditorComponent,
    TruncatePipe,
    CategoryComponent
  ],
  providers: [
    PostService,
    CommentService,
    DataService,
    CategoryService
  ]
})
export class SharedModule { }
