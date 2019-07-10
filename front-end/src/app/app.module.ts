import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { OrientationComponent } from './orientation/orientation.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './authorization/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './authorization/token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { TeacherorientationComponent } from './teacherorientation/teacherorientation.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    OrientationComponent,
    LoginComponent,
    HomeComponent,
    TeacherorientationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
