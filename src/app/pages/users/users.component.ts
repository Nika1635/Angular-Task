import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { SearchComponent } from '../../core/components/search/search.component';

@Component({
  selector: 'app-users',
  imports: [SearchComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(public userData: UserService){}

    ngOnInit(): void {
      this.getUserData()
    }

    public Users: any = []
    private originalUsers: any = []


  getUserData(){
    this.userData.getUsers().subscribe(data => {
      this.Users = data
      this.originalUsers = data
      console.log(data)
    })
  }

  filterUserData(inputText: string){
    this.Users = this.originalUsers.filter((user: any) =>
    user.name.toLowerCase().includes(inputText.toLocaleLowerCase()) ||
    user.email.toLowerCase().includes(inputText.toLocaleLowerCase()) ||
    user.company?.name?.toLowerCase().includes(inputText.toLocaleLowerCase()))
  }
}
