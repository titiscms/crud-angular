import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.courses = [];
    // this.coursesService = new CoursesService();
    // Para usar o Observable, precisa instanciar courses no construtor
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    // deixando aqui, será feita a atribuição da lista de cursos apenas quando o componente for inicializado no html.
    // não fará muita diferença deixando aqui ou no construtor, gosto pessoal.
    // this.courses = this.coursesService.list();
  }

}
