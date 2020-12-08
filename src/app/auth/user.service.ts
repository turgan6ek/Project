import { Injectable } from '@angular/core';
import {User} from './User.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  id = 0;
  getUsers():Observable<User>{
    return this.http.get<User>(this.apiUrl +'/users');
  }

}
