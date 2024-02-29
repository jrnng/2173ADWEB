import { Injectable } from '@angular/core';

//import httpclient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  getUserRemotely() {
    throw new Error('Method not implemented.');
  }
  //
  constructor(private http:HttpClient) { }

  //
  getUserfromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
