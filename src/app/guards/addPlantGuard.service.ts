import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable, Input} from '@angular/core';
import {AddNewComponent} from '../add-new/add-new.component';
import {Observable} from 'rxjs';

@Injectable()
export class addPlantGuardService implements CanActivateChild {
  @Input() isAdmin : boolean;
  constructor(isAdmin : boolean) {
   this.isAdmin = isAdmin;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('Do you have a permission to edit the list of pages?');
    //Actually I have to check whether the user is admin or not and depending on that give permission to change(add) plants.
  }

  }
