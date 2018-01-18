import { CommentService } from './../../services/comment.service';
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

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getCommentForPost(this.postId).subscribe(comments => {
      this.comments = comments.json();
    });
  }

}
