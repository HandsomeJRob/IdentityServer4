import { Injectable, OnInit } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private manager = new UserManager(this.getClientSettings());
  private user: User = null;

  constructor() { }

  ngOnInit(): void {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  public isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  public getClaims(): any {
    return this.user.profile;
  }

  public getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  public startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  public completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

  private getClientSettings(): UserManagerSettings {
    return {
      authority: 'http://localhost:5000/',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type: "id_token token",
      scope: "openid profile api1",
      filterProtocolClaims: true,
      loadUserInfo: true
    };
  }
}
