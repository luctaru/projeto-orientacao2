import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

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
      this.apiService.getOneStudent(params.id).subscribe(data => {
        console.log(data);
        if (!data.error) {
          this.old = data;
          console.log('entroudata');
          this.form.patchValue(data.aluno);
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
        this.apiService.insertStudent(this.form.value).subscribe();
        this.router.navigate(['/home']);
      } else {
        console.log('entrou2');
        this.apiService.updateStudent(this.old, this.form.value).subscribe();
        this.router.navigate(['/home']);
      }
    } else {
      this.snackBar.open('Informe todos os campos!', null, { duration: 2000 });
    }
  }

}
