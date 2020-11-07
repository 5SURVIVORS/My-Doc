import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
@Injectable()


export class ProfileService {
    profiles = [
        {
            name: "example name",
            disease: "example disease"
        }
    ]

    docByCity= [];
    constructor(private http: HttpClient) { }

    public getDoc(obj) {
        return this.http.post('http://localhost:3000/doctors/docstatet', obj).subscribe((data: []) => { this.docByCity = data });
    }



}