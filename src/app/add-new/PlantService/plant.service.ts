import {Plant} from './Plant.model';
import {Injectable} from '@angular/core';
import {LoggingPlant} from './logging.plant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PlantService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private plantLog: LoggingPlant) { }
  id = 0;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getPlants():Observable<Plant>{
    return this.http.get<Plant>(this.apiUrl +'/plants');
  }
  createPlant(plant): Observable<Plant>{
    return this.http.post<Plant>(this.apiUrl+'/plants', JSON.stringify(plant),this.httpOptions);
  }

}
