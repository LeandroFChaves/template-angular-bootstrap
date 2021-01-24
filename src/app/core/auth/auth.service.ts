import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private route: Router) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(): void {
    this.loggedIn.next(true);
  }

  logout(): void {
    this.loggedIn.next(false);
    this.route.navigate(['login']);
  }
}
