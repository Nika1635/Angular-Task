import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users' },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'todos/:userId', component: TodosComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: '**', redirectTo: 'users' }
];