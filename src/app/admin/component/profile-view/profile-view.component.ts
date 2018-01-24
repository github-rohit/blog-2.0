import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  userId: string;
  user;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {

    this.userService.getById('5a6363375254060f788b2fd2').subscribe((user) => {
      this.user = user[0];
    }, error => {

    });
  }

  ngOnInit() { }

}
