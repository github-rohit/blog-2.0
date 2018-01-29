import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn;
  user;
  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private router: Router) { }

  logout() {
    this.http.post('/api/logout', {}).subscribe(() => {
      this.isLoggedIn = false;
      this.user = false;
      this.auth.logout();
      this.router.navigateByUrl('/login');
    }, error => {

    });
  }

  afterLogin() {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.user = this.isLoggedIn ? this.auth.user : {};
  }

  ngOnInit() {
    this.afterLogin();
  }

}
