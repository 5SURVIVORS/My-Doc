

import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Subject} from  'rxjs';

@Injectable()

export class AuthDocService {

  constructor(private http : HttpClient) { }


saveNewDoc(obj) {
this.http
   .post('/doctors/login', obj)
    .subscribe(
        () => {
          console.log('sent');
        },
        (error) => {
          console.log(error);
        }
      );
}


}
