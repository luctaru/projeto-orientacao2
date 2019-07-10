import { Component } from '@angular/core';
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-orientacao';

  constructor(
    private authService: AuthService
  ) {

  }

  logout() {
    this.authService.logout();
  }
}

