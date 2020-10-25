import {Injectable} from "@angular/core";

@Injectable()
export class LoggingPlant {

  log(message: string) {
    console.log('LoggingPlant.service log message: ',
      message);
  }
}
