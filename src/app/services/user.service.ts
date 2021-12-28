import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: Iuser) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
      console.log("If true " + users);
    }
    else {
      users = [user];
      console.log("If false " + users);
    }
    console.log(users);
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
