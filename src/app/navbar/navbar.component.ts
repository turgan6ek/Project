import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Router: Router, public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  username = localStorage.getItem('username');
}
