import { AuthService } from './../../../shared/services/auth.service';
import { CategoryService } from './../../../shared/services/category.service';
import { Post } from './../../../shared/models/post';
import { Router, ActivatedRoute } from '@angular/router';
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
  post: Post;
  postId: string;
  toast = {};
  user;
  category;
  form: FormGroup;
  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    this.user = this.auth.user;
    this.renderer.addClass(document.body, 'body-white');
    this.createForm();
  }

  keyupHandlerFunction($event) {
    this.form.controls['description'].setValue($event);
  }

  createForm() {
    this.form = this.fb.group({
      created_by: [this.user._id],
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

  save($event) {
    this.form.value['status'] = $event;
    this.postService.create(this.form.value).subscribe((post: Post) => {
      const title = new ReplaceWithDashPipe().transform(this.form.value.title);
      this.router.navigate(['/' + post._id + '/' + title]);
    }, (error) => {
      this.toast  = {
        classes: 'toast-error',
        message: ':( OOPS something went wrong while saving post.'
      };
    });
  }

  get title() {
    return this.form.get('title');
  }

  get image() {
    return this.form.get('image');
  }

  get description() {
    return this.form.get('description');
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.categoryService.getAll().subscribe((category) => {
      this.category = category;
    }, (error) => {

    });
    if (this.postId) {
      this.postService.getById(this.postId).subscribe(post => {
        this.post = post[0];
        this.form.setValue({
          created_by: this.user._id,
          title: this.post.title,
          description: this.post.description,
          image: this.post.image,
          category: this.post.category.toString(),
          tags: this.post.tags
        });
      }, error => {

      });
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'body-white');
  }
}
