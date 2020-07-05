import { User } from '../classes/Usuario';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector : 'app-users',
  templateUrl: './users.component.html',
  styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit {
title = 'Users';
users: User[] = [];
@Output() updateUser = new EventEmitter<User>();
constructor(private service: UserService){
}
ngOnInit(){
  this.users = this.service.getUsers();
}
onDeleteUser(user: User){
  this.service.deleteUser(user);
  // alert(user.lastname);
}
onSelectUser(user: User){
  const userCopy = Object.assign({}, user);
  this.updateUser.emit(userCopy);
}
}
