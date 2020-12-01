import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
  name: 'loginOr'
})
export class LoginPipe implements PipeTransform {
  // I dont think that I will use exactly this Custom pipe in my project but I created this pipe just to make the
  // likes to seem like they are increasing when u tap once and decreasing when u tap twice
  transform(value: string) {
    if (value){
      return value;
    }
    else {
      value = "Profile";
      return value;
    }
  }
}
