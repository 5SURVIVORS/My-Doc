import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Subject} from  'rxjs';

@Injectable()

export class AuthDocService {



  constructor(private http : HttpClient) { }

public docSignIn (info){

  return this.http.post('/doctors/login',info)

}
}
