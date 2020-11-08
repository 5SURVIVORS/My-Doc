import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileDocService {
    docProfiles: any[];
    constructor(private http: HttpClient) { }


    public getDoc() {
        this.http
          .get<any[]>('http://localhost:3000/doctors/')
          .subscribe(
            (response) => {
              this.docProfiles = response;
              console.log(this.docProfiles)
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }
}