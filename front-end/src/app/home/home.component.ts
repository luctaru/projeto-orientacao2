import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teachers: any;
  students: any;
  orientations: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.render();
  }

  render() {
    this.getTeachers();
    this.getStudents();
    this.getOrientations();
  }

  getTeachers() {
    this.apiService.getAllTeachers().subscribe(data => {
      this.teachers = [];
      data.professor.forEach(element => {
        this.teachers.push(element);
      });
    });
  }

  getStudents() {
    this.students = [];
    this.apiService.getAllStudents().subscribe(data => {
      const aux = data.aluno;
      aux.forEach(element => {
        this.students.push(element);
      });
      console.log(this.students);
    });
  }

  getOrientations() {
    this.orientations = [];
    this.apiService.getAllOrientation().subscribe(data => {
      data.orientacao.forEach(element => {
        this.orientations.push(element);
      });
    });
  }

  editTeacher(teacher: any) {
    console.log(teacher);
    this.router.navigate(['/teachers', teacher._id]);
  }

  editStudent(student: any) {
    console.log(student);
    this.router.navigate(['/students', student._id]);
  }

  editOrientation(orientation: any) {
    this.router.navigate(['/orientations', orientation._id]);
  }

  removeTeacher(teacher: any) {
    this.apiService.deleteTeacher(teacher).subscribe();
    this.render();
  }

  removeStudent(student: any) {
    this.apiService.deleteStudent(student).subscribe();
    this.render();
  }

  removeOrientation(orientation: any) {
    this.apiService.deleteOrientation(orientation._id).subscribe();
    this.render();
  }

  redirectToProfOri(teacher: any) {
    console.log(teacher);
    this.router.navigate(['/teacherOrientation', teacher._id]);
  }
}
