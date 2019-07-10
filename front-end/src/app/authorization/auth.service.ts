import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpConf = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(body) {
    console.log(body);
    // const body = {
    //   email: emailUser,
    //   password: pass
    // };
    return this.http.post(`${environment.apiUrl}/auth/autenticar`, body, this.httpConf);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
