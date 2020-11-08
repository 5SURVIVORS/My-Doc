import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileDocService {
    docProfiles: any[];
    profiles : any[];
    constructor(private http: HttpClient) { }


    public getDoc() {
        this.http
          .get<any[]>('http://localhost:3000/doctors/')
          .subscribe(
            (response) => {
              this.docProfiles = response;
              this.profiles = response;
              console.log(this.docProfiles)
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }
    getDocById(id: number) {
        const doc = this.docProfiles.find(
          (s) => {
            return s.id === id;
          }
        );
        return doc;
    }

    deleteById(obj){
    return this.http.post('http://localhost:3000/doctors/:id', obj)
    }
}