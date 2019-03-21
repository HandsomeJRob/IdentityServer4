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

  public logOut() {

  }

  public checkUserStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
    const claims = this.authService.getClaims();

    console.log('JR claims', claims);

    
    


    // if (this.authService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.username = this.authService.getClaims().sub;

    //   console.log('JR is logged in: ', this.isLoggedIn);
    //   console.log('JR username: ', this.username);
    // }
  }

}
