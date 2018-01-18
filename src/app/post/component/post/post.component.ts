import { PostService } from './../../../shared/services/post.service';
import { Post } from './../../../shared/models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  // posts: Post[] = [];
  posts;
  constructor(postService: PostService) {
    this.posts = [];
    postService.getAll().subscribe(posts => {
      this.posts = posts.json();
    });
  }

}
