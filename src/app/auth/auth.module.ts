import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ButtonsModule} from 'ng-uikit-pro-standard';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth.service';


@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonsModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthModule {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
