import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacherorientation',
  templateUrl: './teacherorientation.component.html',
  styleUrls: ['./teacherorientation.component.css']
})
export class TeacherorientationComponent implements OnInit {

  orientations = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.apiService.getTeacherOrientation(params.id).subscribe(data => {
        console.log(data);
        data.orientacao.forEach(element => {
          this.orientations.push(element);
        });
        console.log(this.orientations);
      });
    });
  }

}
