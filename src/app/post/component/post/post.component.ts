import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../../shared/services/post.service';
import { Post } from './../../../shared/models/post';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Post[] = [];
  norecord = false;
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
      this.getPosts(qry.params);
    });
  }

  getPosts(qry) {
    this.postService.getPostByQuery(qry).subscribe(res => {
      this.posts = res.posts;
      this.norecord = !res.total;
      this.length = res.total;
      window.scrollTo(0, 0);
    });
  }

  pageChange(event: PageEvent) {
    this.router.navigate(['/'], {
      queryParams: {
        pageIndex: event.pageIndex + 1,
        pageSize: event.pageSize
      }
    });
  }
}
