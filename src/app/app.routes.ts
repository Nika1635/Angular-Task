import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { TodosComponent } from './pages/todos/todos.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { UserpostComponent } from './pages/userpost/userpost.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'todos/:userId', component: TodosComponent },
  { path: 'userposts/:userId', component: UserpostComponent},
  { path: 'promotions', component: PromotionsComponent},
  { path: '**', redirectTo: 'users' }
];