import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild} from '@angular/router';
@Injectable({ providedIn: 'root' })
export class addPlantGuardService implements CanActivateChild {
  constructor(private _router: Router) { }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>|boolean {
    if (localStorage.getItem('username')=="admin@admin.com") {
      return true;
    }
    this._router.navigate(['']);
    return false;
  }
}
