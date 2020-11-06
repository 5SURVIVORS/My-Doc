import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()

export class AuthPatService {

    constructor(private http: HttpClient) { }


    // saveNewPat(obj) {
    //     this.http
    //         .post('/patients/login', obj)
    //         .subscribe(
    //             () => {
    //                 console.log('sent');
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         );
    // }


}
