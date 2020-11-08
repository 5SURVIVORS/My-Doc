import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
@Injectable()


export class ProfileService {
  profiles = []
  docByCity = [];
  // docFilter =[];
  constructor(private http: HttpClient) { }

  public getDoc(obj) {
    return this.http.post('http://localhost:3000/doctors/docstate', obj)
  }

  getAppareilsFromServer(obj) {
    this.http
      .post<any[]>('http://localhost:3000/doctors/docstate', obj)
      .subscribe(
        (response) => {
          this.docByCity = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  public getDocByCategory(options) {
    return this.http.post('http://localhost:3000/doctors/docstate', options)
  }

}

// .subscribe(
//   (response) => {
//     this.docFilter = response;
//     console.log(this.docFilter)
//   },
//   (error) => {
//     console.log('Erreur ! : ' + error);
//   }
// );