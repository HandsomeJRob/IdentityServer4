import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  username = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkUserStatus();
  }


  public login() {

    console.log('login started');

    this.authService.startAuthentication();

  }

  public logout() {
    this.authService.logoff().then((result) => {
      console.log('JR logoff result', result);
    });
  }

  public checkUserStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();

    console.log('JR is logged in', this.isLoggedIn);

    if (this.isLoggedIn) {
      const claims = this.authService.getClaims();
      console.log('JR claims', claims);
    }
  }

}
