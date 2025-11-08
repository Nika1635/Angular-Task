import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../core/services/todo/todo.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  constructor(private todoData: TodoService, private route: ActivatedRoute, private getuser: UserService){}

  ngOnInit(): void {
    this.getId()
  }

  public todoList:any = []
  private id: any = null

  public name: string = ''

  getId() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['userId'])
      console.log(this.id)
      this.getTodoList(this.id)
      this.getName(this.id)
    })
  }

  getName(param: any){
    this.getuser.getUsersById(param).subscribe((item) => {
      this.name = item.name
    })
  }

  getTodoList(user: any) {
  this.todoData.todoGet().subscribe((item: any[]) => {
    this.todoList = item.filter((todo: any) => todo.userId === user)
    console.log(this.todoList)
  })
}
}
