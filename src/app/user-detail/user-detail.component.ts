import { User } from '../classes/Usuario';
import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy1: User;
  private originalUser: User;
@Input() set user(user: User){
  this.originalUser = user;
  this.userCopy1 = Object.assign({}, user);
 // alert('sono dentro il settaggio delle variabili iniziali.');
}
get user(){
 // alert('sono dentro il settaggio il get user()');
  return this.originalUser;
}
  constructor(private userService: UserService) {
    this.userService = this.userService;
   }
  ngOnInit(): void {
  }
  maxId(){
   return 0;
  }
  saveUser(){
  if (this.user.id > 0){
    this.userService.updateUser(this.user);
  }else{
     this.userService.createUser(this.user);
     this.user = new User();
  }
  }
  resetForm(form){
    if (this.user.id === 0){
      this.user = new User();
    } else {
      this.originalUser = this.userCopy1;
      // form.reset();
    }
  }
}
