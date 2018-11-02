import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl = 'http://localhost:3000';

  constructor(private  http:  HttpClient) { }

  get(url: any) {
      return this.http.get(this.baseUrl + url).pipe(map(res => res));
  }
}
