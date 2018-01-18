import { ActivatedRoute } from '@angular/router';
import { CommentService } from './../../../shared/services/comment.service';
import { PostService } from './../../../shared/services/post.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';

@Component({
  selector: 'post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent {
  post: Post;
  postId: string;

  constructor(private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute) {

    this.postId = this.route.snapshot.paramMap.get('id');

    postService.get(this.postId).subscribe(post => {
      this.post = post.json();
    });

  }
}
