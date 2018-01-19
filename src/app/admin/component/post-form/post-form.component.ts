import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnDestroy {

  form: FormGroup;
  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder
  ) {
    this.renderer.addClass(document.body, 'body-white');
    this.form = fb.group({
      title: ['', [
        Validators.required]
      ],
      description: [''],
      image: [''],
      category: [''],
      tags: [[]]
    });
  }

  keyupHandlerFunction($event) {
    console.log($event);
  }

  save() {
    console.log(this.form);
  }

  get title() {
    return this.form.get('title');
  }

  get image() {
    return this.form.get('image');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'body-white');
  }
}
