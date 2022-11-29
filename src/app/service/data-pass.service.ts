import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  constructor(private http: HttpClient) { }
  child1Subject = new Subject<any>();
  child2Subject = new Subject<any>();

  child2DataChanges(value: any) {
    this.child2Subject.next(value);
  }
  child1DataChanges(value: any) {
    this.child1Subject.next(value);
  }

  test():Observable<any> {
    return this.http.get(environment.api)
  }


}
