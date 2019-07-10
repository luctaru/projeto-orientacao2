import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  form: FormGroup;

  editOrNot = false;
  old: any;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      ra: [null, [Validators.required]]
    });

    this.route.params.subscribe(params => {
      this.apiService.getOneTeacher(params.id).subscribe(data => {
        console.log(data);
        if (!data.error) {
          this.old = data;
          console.log('entroudata');
          this.form.patchValue(data.professor);
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
        this.apiService.insertTeacher(this.form.value).subscribe();
        this.router.navigate(['/home']);
      } else {
        console.log(this.old);
        this.apiService.updateTeacher(this.old, this.form.value).subscribe();
        this.router.navigate(['/home']);
      }
    } else {
      this.snackBar.open('Informe todos os campos!', null, { duration: 2000 });
    }
  }

}
