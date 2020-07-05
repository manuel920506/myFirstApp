import { User } from './classes/Usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  userSelected: User = new User();
  updateUser(user: User){
    this.showForm = true;
    this.userSelected = user;
  }
  newUser(){
    this.userSelected = new User();
    this.showForm = true;
  }
}
