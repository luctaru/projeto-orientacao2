import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent implements OnInit {


  form: FormGroup;

  editOrNot = false;
  old: any;

  students = [];
  teachers = [];

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      prof: [null, [Validators.required]],
      alu: [null, [Validators.required]]
    });
   }

  ngOnInit() {
    this.getTeachers();
    this.getStudents();

    this.route.params.subscribe(params => {
      this.apiService.getOneOrientation(params.id).subscribe(data => {
        console.log(data);
        if (!data.error) {
          this.old = data;
          console.log('entroudata');
          this.form.patchValue(data.orientacao);
        } else {
          this.editOrNot = true;
        }
      });
    });
  }

  save() {
    if (this.form.valid) {
      if (this.editOrNot) {
        console.log('entrou1');
        this.apiService.insertOrientation(this.form.value).subscribe();
        this.router.navigate(['/home']);
      } else {
        console.log(this.form.value);
        this.apiService.updateOrientation(this.old, this.form.value).subscribe();
        this.router.navigate(['/home']);
      }
    } else {
      this.snackBar.open('Informe todos os campos!', null, { duration: 2000 });
    }
  }

  getTeachers() {
    this.teachers = [
    ];

    this.apiService.getAllTeachers().subscribe(data => {
      data.professor.forEach(element => {
        this.teachers.push(element);
      });
    });
  }

  getStudents() {
    this.students = [
    ];

    this.apiService.getAllStudents().subscribe(data => {
      data.aluno.forEach(element => {
        this.students.push(element);
      });
    });
  }

}
