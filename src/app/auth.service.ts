import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'mbah0397@gmail.com' && password === 'admin72') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Mohamed', email: 'mbah0397@gmail.com' });
    }
    return throwError(new Error('Mot de passe ou adresse mail est incorrect'));
  }
}
