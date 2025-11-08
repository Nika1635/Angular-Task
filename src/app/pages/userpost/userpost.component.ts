import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { PostService } from '../../core/services/post/post.service';
import { CardComponent } from '../../core/components/card/card.component';
import { PostInterface } from '../../core/interfaces/post-interface';
import { TodoInterface } from '../../core/interfaces/todo-interface';

@Component({
  selector: 'app-todos',
  imports: [CardComponent],
  templateUrl: './userpost.component.html',
  styleUrl: './userpost.component.css'
})
export class UserpostComponent implements OnInit {
  constructor(private postData: PostService, private route: ActivatedRoute, private getuser: UserService){}

  ngOnInit(): void {
    this.getId()
  }

  public posts:PostInterface[] = []
  private id: number = 0

  public name: string = ''

  getId() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['userId'])
      console.log(this.id)
      this.getName(this.id)
      this.getPosts(this.id)
    })
  }

  getName(param: number){
    this.getuser.getUsersById(param).subscribe((item) => {
      this.name = item.name
    })
  }

  getPosts(user: number) {
  this.postData.getPosts().subscribe((item: PostInterface[]) => {
    this.posts = item.filter((todo) => todo.userId === user)
    console.log(this.posts)
  })
}
}
