import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {
  isPublished = true;
  isDraft = false;
  posts;
  status;

  constructor(
    private router: ActivatedRoute,
    postService: PostService) {
    this.posts = [];
    this.router.queryParamMap.subscribe(queryMap => {
       this.status = queryMap.get('status');
       this.activelink();
    });
    postService.getAll().subscribe(posts => {
      this.posts = posts.json();
    });
  }

  activelink() {
    if (this.status === 'draft') {
      this.isDraft = true;
      this.isPublished = false;
    } else {
      this.isDraft = false;
      this.isPublished = true;
    }
  }
}
