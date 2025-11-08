import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersInterface } from '../../interfaces/users-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersInterface[]>{
    return this.http.get<UsersInterface[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUsersById(id: number): Observable<UsersInterface>{
    return this.http.get<UsersInterface>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
