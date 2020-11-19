import {CanActivateChild} from '@angular/router';
import {Injectable, Input} from '@angular/core';
import {AddNewComponent} from '../add-new/add-new.component';

@Injectable()
export class addPlantGuardService implements CanActivateChild {
  @Input() isAdmin : boolean;
  constructor(isAdmin : boolean) {
   this.isAdmin = isAdmin;
  }
  canActivateChild(): boolean {
// Check weather route can be activated;
    if (this.isAdmin)
    return true;
    else
      return false;
// false if you want to cancel navigation;
  }
  }
