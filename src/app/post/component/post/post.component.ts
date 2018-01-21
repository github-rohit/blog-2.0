import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private router: ActivatedRoute,
    private postService: PostService) {
    this.posts = [];
    this.router.queryParamMap.subscribe((qry) => {
      console.log(qry.get('limit'));
    });
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

}
