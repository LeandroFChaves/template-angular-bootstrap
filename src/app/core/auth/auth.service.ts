import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private route: Router, private jwtHelper: JwtHelperService) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(): void {
    // Token fake gerado online no site http://jwtbuilder.jamiekurtz.com/
    const tokenFake =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpYXQiOjE2MTE1MjM1ODQsImV4cCI6MTY0MzA1OTU4NCwiYXVkIjoiIiwic3ViIjoiIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGVzIjoiYWRtaW4ifQ.6yUVhaz8eSBjl_ecbUwbUsyNm3qO9txdvftiFm1lAbw';
    this.setToken(tokenFake);

    this.loggedIn.next(true);
  }

  refreshToken(): Observable<any> {
    return of({});
  }

  logout(): void {
    this.loggedIn.next(false);
    localStorage.clear();

    this.route.navigate(['login']);
  }

  isTokenExpired(): boolean {
    const token = this.getToken();

    return this.jwtHelper.isTokenExpired(token);
  }

  getDecodeToken(): any {
    const token = this.getToken();

    return this.jwtHelper.decodeToken(token);
  }

  private getToken(): any {
    return localStorage.getItem('access_token');
  }

  private setToken(token: any): void {
    localStorage.setItem('access_token', token);
  }
}
