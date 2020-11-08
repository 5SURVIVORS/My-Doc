import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class AuthDocService {



  constructor(private http: HttpClient) { }

  public docSignIn(info) {
    return this.http.post('http://localhost:3000/doctors/login', info)

  }
  public docSingUp(options) {
    return this.http.post('http://localhost:3000/doctors/register', options)
  }

}
