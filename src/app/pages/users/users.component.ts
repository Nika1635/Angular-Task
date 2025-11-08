import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { SearchComponent } from '../../core/components/search/search.component';
import { PostService } from '../../core/services/post/post.service';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { RouterLink } from "@angular/router";
import { UsersInterface } from '../../core/interfaces/users-interface';
import { PostInterface } from '../../core/interfaces/post-interface';

@Component({
  selector: 'app-users',
  imports: [SearchComponent, ModalComponent, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(private userData: UserService, private postData: PostService){}

  ngOnInit(): void {
    this.getUserData()
    this.postUsers()
  }

  public users: UsersInterface[] = []
  private originalUsers: UsersInterface[] = []

  public posts: any = []
  public postUserCombine: PostInterface[] = []

  public selectedPost: any = null
  public isModalOpen: boolean = false

  openPostDetails(post: number) {
    this.selectedPost = post
    this.isModalOpen = true
  }

  closeModal() {
    this.isModalOpen = false
    this.selectedPost = NaN
  }

  getUserData(){
    this.userData.getUsers().subscribe(data => {
      this.users = data
      this.originalUsers = data
    })
  }

  getPostData(){
    this.postData.getPosts().subscribe(data => {
      this.posts = data
      console.log(data)
    })
  }

  postUsers(){
    this.postData.getPosts().subscribe(posts => {
      this.posts = posts
      if (this.users.length === 0) {
        this.userData.getUsers().subscribe(users => {
          this.users = users;
          this.combinePostsAndUsers()
        })
      } else {
        this.combinePostsAndUsers()
      }
    })
  }

  //  გავაერთიანე ორი ობიექტი
  combinePostsAndUsers(){
    this.posts.forEach((post: any) => {
      const user = this.users.find((u: any) => u.id === post.userId)
      post.userName = user ? user.name : 'Unknown'
    })
    console.log(this.posts)
  }

  filterUserData(inputText: string){
    this.users = this.originalUsers.filter((user: any) =>
    user.name.toLowerCase().includes(inputText.toLocaleLowerCase()) ||
    user.email.toLowerCase().includes(inputText.toLocaleLowerCase()) ||
    user.company?.name?.toLowerCase().includes(inputText.toLocaleLowerCase()))
  }
}
