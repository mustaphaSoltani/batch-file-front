import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchFileService {
  link = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  startJob(): Observable<any> {
    return this.http.get(this.link + '/invokeJob');
  }

  getSumValueByOrigin(): Observable<any> {
    return this.http.get(this.link + '/data');
  }

  getSumValuesByYear(year: any, startDate: any, endDate: any): Observable<any> {
    return this.http.get(this.link + '/sumValue?year=' + year + '&startDate=' + startDate + '&endDate=' + endDate);
  }
  getAllSources(): Observable<any>{
    return this.http.get(this.link + '/origin');
  }

  getSumValueByDateAndOrigin(year: any, startDate: any, endDate: any, origin: any): Observable<any>{
    return this.http.get(this.link + '/dataByOrigin?year=' + year + '&startDate=' + startDate + '&endDate=' + endDate  + '&origin=' + origin);
  }
}
