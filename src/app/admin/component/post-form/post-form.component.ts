import { CategoryService } from './../../../shared/services/category.service';
import { Post } from './../../../shared/models/post';
import { Router } from '@angular/router';
import { PostService } from './../../../shared/services/post.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ReplaceWithDashPipe } from '../../../shared/pipes/replace-with-dash.pipe';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {
  category;
  form: FormGroup;
  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.renderer.addClass(document.body, 'body-white');
    this.form = fb.group({
      created_by: ['5a6363375254060f788b2fd2'],
      title: ['', [
        Validators.required]
      ],
      description: ['', [
        Validators.required]],
      image: [''],
      category: ['Uncategorized'],
      tags: [[]]
    });
  }

  keyupHandlerFunction($event) {
    this.form.controls['description'].setValue($event);
  }

  save($event) {
    this.form.value['status'] = $event;
    this.postService.create(this.form.value).subscribe((post: Post) => {
      const title = new ReplaceWithDashPipe().transform(this.form.value.title);
      this.router.navigate(['/' + post._id + '/' + title]);
    }, (error) => {
      console.log(error);
    });
  }

  get title() {
    return this.form.get('title');
  }

  get image() {
    return this.form.get('image');
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((category) => {
      this.category = category;
    }, (error) => {

    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'body-white');
  }
}
