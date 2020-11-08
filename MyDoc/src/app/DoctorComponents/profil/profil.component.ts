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
  docData = this.profileDoc.profiles[0];


  // @input() docc.name: string
  // @input() docc.email: string
  // @input() docc.city: string
  // @input() docc.phoneNumber: string
  // @input() docc.category: string;
  // @input() docc.cabineName: string;
  // @input() docc.price: number

  nameDoc = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    const doc = this.fetchDocs()
    setTimeout(
      () => {
        resolve(this.profileDoc.profiles[0].name);
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
    const doc = this.fetchDocs()
    setTimeout(
      () => {
        resolve(JSON.stringify(this.profileDoc.profiles[0]));
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
        console.log(this.profileDoc.profiles);
      }, 2000)
  }

}
