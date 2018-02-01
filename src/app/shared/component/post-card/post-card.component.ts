import { Post } from './../../models/post';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input('post') post: Post;
  @Input('isOwner') isOwner;
  @Input('displayName') displayName;

  constructor() { }


}
