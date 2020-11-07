import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()

export class AuthPatService {

    constructor(private http: HttpClient) { }


    public patSignIn (info){
        return this.http.post('http://localhost:3000/patients/login',info)
      
      }
      public patSingUp(options){
        return this.http.post('http://localhost:3000/patients/register', options)
      }


}
