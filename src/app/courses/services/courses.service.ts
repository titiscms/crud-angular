import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs/operators';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    // Usando o pipe() do rxjs, é possível manipular a informação de maneira reativa antes de retornar o resultado
    return this.httpClient.get<Course[]>(this.API).pipe(
      // finaliza a inscrição na origem de dados
      take(1),
      // Apresenta a primeira resposta e também finaliza a inscrição na origem de dados
      first(),
      // Operador para atrasar a resposta em 5000 milisegundos
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
