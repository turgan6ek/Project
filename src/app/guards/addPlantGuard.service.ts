import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class addPlantGuardService implements CanActivate {
  constructor() {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("Its working");
        return null;
    }


  }
