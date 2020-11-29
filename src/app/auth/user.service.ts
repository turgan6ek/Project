import { Injectable } from '@angular/core';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  id = 0;
  getUsers(){
    let userList : User[];
    userList = [
    new User("Admin", "Admin","12345678", "admin@gmail.com", true, this.id++),
    new User("Yerulan", "Turganbek","12345678", "turgan6ek@gmail.com", false, this.id++),
  ];
    return userList;
}
}
