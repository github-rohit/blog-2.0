import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';

@Component({
  selector: 'my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {
  isPublished = true;
  isDraft = false;
  posts: Post[];
  status;

  // MatPaginator Inputs
  length = 0;
  pageSize = 10;
  pageSizeOptions = [10, 25, 100];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService) {
    this.posts = [];
    this.activatedRoute.queryParamMap.subscribe((qry: any) => {
      this.status = qry.get('status');
      this.getPosts(qry.params);
      this.activelink();
    });
  }

  getPosts(qry) {
    this.postService.getPostByQuery(qry).subscribe(res => {
      this.posts = res.posts;
      this.length = res.total;
    });
  }

  pageChange(event: PageEvent) {
    this.router.navigate(['/admin/myposts'], {
      queryParams: {
        status: this.status,
        pageIndex: event.pageIndex + 1,
        pageSize: event.pageSize
      }
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
