import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  constructor() { }
  child1Subject = new Subject<any>();
  child2Subject = new Subject<any>();

  child2DataChanges(value: any) {
    this.child2Subject.next(value);
  }
  child1DataChanges(value: any) {
    this.child1Subject.next(value);
  }
}
