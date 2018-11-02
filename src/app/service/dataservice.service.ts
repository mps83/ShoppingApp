import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private subject = new Subject<any>();
  sharedList: any = [];

  constructor() { }

  sendMessage(message: string) {
    this.subject.next(this.sharedList = message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
