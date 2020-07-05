import { UserInterface } from './../interfaces/user';
import { User } from '../classes/Usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
  users: Array<User> = [{
    id: 1,
    name: 'Manuel',
    lastname: 'Rodriguez',
    email: 'manuel.rodriguez15@libero.it',
    fiscalcode: 'RDRMLL92E06Z504K',
    province: 'Bologna',
    phone: '3349980678'
    },
    {
      id: 2,
      name: 'Manuel1',
      lastname: 'Rodriguez1',
      email: 'manuel.rodriguez15@libero.it',
      fiscalcode: 'RDRMLL92E06Z504K',
      province: 'Bologna',
      phone: '3349980678'
    },
    {
        id: 3,
        name: 'Manuel2',
        lastname: 'Rodriguez2',
        email: 'manuel.rodriguez15@libero.it',
        fiscalcode: 'RDRMLL92E06Z504K',
        province: 'Bologna',
        phone: '3349980678'
    },
    {
          id: 4,
          name: 'Manuel3',
          lastname: 'Rodriguez3',
          email: 'manuel.rodriguez15@libero.it',
          fiscalcode: 'RDRMLL92E06Z504K',
          province: 'Bologna',
          phone: '3349980678'
    },
    {
             id: 5,
            name: 'Manuel4',
            lastname: 'Rodriguez4',
            email: 'manuel.rodriguez15@libero.it',
            fiscalcode: 'RDRMLL92E06Z504K',
            province: 'Bologna',
            phone: '3349980678'
    }];
  constructor(){}
  getUsers() {
    return this.users;
  }
  getMaxId() {
    let max = 0;
    this.users.forEach(element => {
      if (element.id > max) {max = element.id; }
    });
    return max;
  }
  deleteUser(user){
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface){
   const idx = this.users.findIndex((v) => v.id === user.id);
   // alert(idx);
   if (idx !== -1){
    this.users[idx] = user;
   }
  }
  createUser(user: UserInterface){
    user.id = this.getMaxId() + 1;
    this.users.splice(0, 0, user);
   }
}
