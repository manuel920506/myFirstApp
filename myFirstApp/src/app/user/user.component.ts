import { User } from '../classes/Usuario';
import { UserService } from '../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input('user-data') user: User;
@Output('onDeleteUser') onDeleteUser = new EventEmitter();
@Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private UserServise: UserService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.onDeleteUser.emit(this.user);
    // this.UserServise.deleteUser(this.user);
  }
  updateUser(){
    this.onSelectUser.emit(this.user);
  }
}
