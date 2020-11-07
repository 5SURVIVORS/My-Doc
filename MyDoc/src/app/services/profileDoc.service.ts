import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable()
export class ProfileDocService {
    docProfiles = [];
    constructor(private http: HttpClient) { }


    public getDoc() {
        return this.http.get('http://localhost:3000/doctors/').subscribe((data: []) => { this.docProfiles = data });
    }
}