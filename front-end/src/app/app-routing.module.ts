import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { OrientationComponent } from './orientation/orientation.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authorization/auth.guard';
import { TeacherorientationComponent } from './teacherorientation/teacherorientation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'teachers', component: TeacherComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'orientations', component: OrientationComponent, canActivate: [AuthGuard] },
  { path: 'teachers/:id', component: TeacherComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'orientations/:id', component: OrientationComponent, canActivate: [AuthGuard] },
  { path: 'teacherOrientation/:id', component: TeacherorientationComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
