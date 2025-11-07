import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(public userData: UserService){}

    ngOnInit(): void {
      this.getUserData()
    }

    public Users: any = []


  getUserData(){
    this.userData.getUsers().subscribe(data => {
      this.Users = data
      console.log(data)
    })
  }
}
