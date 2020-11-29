import { Component } from '@angular/core';
import {AuthenticationService} from './auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Router: Router, private auth: AuthenticationService) {
  }
  title = 'Project';
  username = localStorage.getItem('username');
}

