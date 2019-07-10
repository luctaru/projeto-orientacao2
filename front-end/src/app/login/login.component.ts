import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../authorization/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  authSubscription: Subscription;

  login: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  logIn() {
    if (this.form.valid) {
      console.log('entrou');
      this.authSubscription = this.authService.login(this.form.value).subscribe(
        data => {
          console.log(data);
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.authService.showMenuEmitter.emit(true);
          this.router.navigate(['/home']);
        },
        error => {
          console.log( error );
        }
      );
    }
  }

}
