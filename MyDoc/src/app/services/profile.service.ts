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


}