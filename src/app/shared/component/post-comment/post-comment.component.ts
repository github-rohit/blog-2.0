import { CommentService } from './../../services/comment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('post-id') postId: any;
  comments: any[] = [];
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private commentService: CommentService) {
    this.form = fb.group({
      comment: ['', [
        Validators.required]]
    });
  }

  submit() {
    console.log('create');
  }

  ngOnInit() {
    this.commentService.getById(this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }

}
