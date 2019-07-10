import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTeachers() {
    return this.http.get<any>(`${environment.apiUrl}/professores`);
  }

  getAllStudents() {
    return this.http.get<any>(`${environment.apiUrl}/alunos`);
  }

  getAllOrientation() {
    return this.http.get<any>(`${environment.apiUrl}/orientacoes`);
  }

  getOneTeacher(id) {
    return this.http.get<any>(`${environment.apiUrl}/professores/${id}`);
  }

  getOneStudent(id) {
    return this.http.get<any>(`${environment.apiUrl}/alunos/${id}`);
  }

  getOneOrientation(id) {
    return this.http.get<any>(`${environment.apiUrl}/orientacoes/${id}`);
  }

  insertTeacher(body) {
    console.log(body);
    return this.http.post(`${environment.apiUrl}/professores`, body);
  }

  insertStudent(body) {
    return this.http.post(`${environment.apiUrl}/alunos`, body);
  }

  insertOrientation(body) {
    return this.http.post(`${environment.apiUrl}/orientacoes`, body);
  }

  updateTeacher(old, body) {
    console.log(old);
    return this.http.put(`${environment.apiUrl}/professores/${old.professor.ra}`, body);
  }

  updateStudent(old, body) {
    return this.http.put(`${environment.apiUrl}/alunos/${old.aluno.ra}`, body);
  }

  updateOrientation(old, body) {
    return this.http.put(`${environment.apiUrl}/orientacoes/${old.orientacao._id}`, body);
  }

  deleteTeacher(body) {
    return this.http.delete(`${environment.apiUrl}/professores`, body);
  }

  deleteStudent(body) {
    return this.http.delete(`${environment.apiUrl}/alunos`, body);
  }

  deleteOrientation(body) {
    return this.http.delete(`${environment.apiUrl}/orientacoes/${body}`);
  }

  getTeacherOrientation(id) {
    return this.http.get<any>(`${environment.apiUrl}/orientacoes/professor/${id}`);
  }

}
