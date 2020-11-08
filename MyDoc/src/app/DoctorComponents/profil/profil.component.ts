import { Component, OnInit } from '@angular/core';
//declare input and loop with ngfor to append the data in the dom
import { ProfileDocService } from 'src/app/services/profileDoc.service'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { promise } from 'protractor';

@Component({
  selector: 'app-profil-doc',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilDocComponent implements OnInit {
  model: NgbDateStruct;
  public isCollapsed = false;
  isAuth = false;
  docInfo = {
    name: "",
    email: "",
    city: "",
    phoneNumber: "",
    category: "",
    cabineName: "",
    price: 0,
  }



  // @input() docInfo.name: string
  // @input() docInfo.email: string
  // @input() docInfo.city: string
  // @input() docInfo.phoneNumber: string
  // @input() docInfo.category: string;
  // @input() docInfo.cabineName: string;
  // @input() docInfo.price: number

  nameDoc = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    const doc = this.fetchDocs()
    setTimeout(
      () => {
        resolve(this.profileDoc.docProfiles[0].name);
      }, 2000
    );;
  });

  lastUpdate = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  docProf = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    const docProf = this.fetchDocs()
    setTimeout(
      () => {
        resolve(this.profileDoc.docProfiles[0]);
      }, 2000
    );;
  });

  constructor(private profileDoc: ProfileDocService) { }

  ngOnInit(): void {
    this.fetchDocs()

  }

  private fetchDocs() {
    this.profileDoc.getDoc()
    setTimeout(
      () => {
        console.log(this.profileDoc.docProfiles);
        this.docInfo = this.profileDoc.docProfiles[0];
      }, 2000)
  }

}
