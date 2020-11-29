import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService: UserService) { }
  userList = this.UserService.getUsers();

  matchLogin(login, password) {

  }
  ngOnInit(): void {
  }

}
