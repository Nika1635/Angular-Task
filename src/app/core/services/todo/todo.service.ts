import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../interfaces/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  todoGet(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
