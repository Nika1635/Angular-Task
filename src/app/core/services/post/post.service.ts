import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>("https://jsonplaceholder.typicode.com/posts")
  }


}
