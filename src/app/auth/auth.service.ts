import { Injectable } from '@angular/core';
import {UserService} from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private UserService : UserService) {
  }
  userList = this.UserService.getUsers();

  login(username: string, password: string) {
    for (let user of this.userList) {
      if (username == user.email && password == user.password) {
        localStorage.setItem('currentUser', "loggedin");
        localStorage.setItem('username',username);
        console.log("Correct")
        return true;
      }
    }

  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
}
