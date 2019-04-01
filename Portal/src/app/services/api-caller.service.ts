import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public callApi(): Observable<any> {
    if (this.authService.isLoggedIn()) {
      const headers = new HttpHeaders({ Authorization: this.authService.getAuthorizationHeaderValue() });

      return this.http.get('http://localhost:5001/identity', { headers });
    } else {
      console.log('not logged in');
      return EMPTY;
    }
  }

  public callAdminApi(): Observable<any> {
    if (this.authService.isLoggedIn()) {
      const headers = new HttpHeaders({ Authorization: this.authService.getAuthorizationHeaderValue() });

      return this.http.get('http://localhost:5001/identity/admins', { headers });
    } else {
      console.log('not logged in');
      return EMPTY;
    }
  }


}
