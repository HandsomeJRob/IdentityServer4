import { Injectable, OnInit } from '@angular/core';
import { UserManager, UserManagerSettings, User, WebStorageStateStore } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private manager = new UserManager(this.getClientSettings());
  private user: User = null;

  public constructor() { }

  public ngOnInit(): void {
    console.log('JR getting user');

    this.manager.getUser().then(user => {
      this.user = user;
    });
  }


  public getClientSettings(): UserManagerSettings {
    return {
      authority: 'http://localhost:5000/',
      client_id: 'portal',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type: 'code',
      scope: 'openid profile api1',
      filterProtocolClaims: true,
      loadUserInfo: true
    };
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  logoff(): Promise<void> {
    return this.manager.signoutRedirect();
  }

  completeAuthentication(): Promise<void> {
    console.log('JR completing auth');

    return this.manager.signinRedirectCallback().then(user => {
      console.log('JR user', user);

      this.user = user;
    });
  }
}
