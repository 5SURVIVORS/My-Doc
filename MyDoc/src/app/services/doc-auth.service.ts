import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Subject} from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthDocService {



  constructor(private http : HttpClient) { }

public docSignIn (info){
  return this.http.post('/doctors/login',info)

}
public docSingUp(options){
  return this.http.post('/doctors/register', options)
}

}
