import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
// import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  isAuth = false;
  profiles: any[];
  Info;
  Category;
  City;

  // namePat = new Promise((resolve, reject) => {
  //   setTimeout(
  //     () => {
  //       this.isAuth = true;
  //     }, 4000
  //   );
  //   const doc = this.fetchDocs()
  //   setTimeout(
  //     () => {
  //       resolve(this.profileDoc.docProfiles[0].name);
  //     }, 2000
  //   );;
  // });

  notifications = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    const doc = this.randomNumber()
    setTimeout(
      () => {
        resolve(doc);
      }, 2000
    );;
  });
  constructor(private profileService: ProfileService) { }
  ngOnInit(): void {
    this.profiles = this.profileService.profiles;
  }

  randomNumber() {
    let result;
    return result = Math.ceil(Math.random() * 10);
  }
  onSearchCategory(event) {
    this.Category = event.target.value;
  }
  onSearchCity(event) {
    this.City = event.target.value;
  }

  clicked() {
    // let output = [];
    // let na = "";
    // for (let i = 0; i < this.profileService.profiles.length; i++) {
    //   for (let j = 0; j < this.profileService.profiles[i].length; i++) {
    //     output.push(this.profileService.profiles[j]["name"])
    alert(" Will receive a notification wait for his response")
  }
  // }
  // }

  onCl() {
    this.profileService.getDocByCategory({ docType: this.Category, city: this.City }).subscribe((doc) => { this.Info = doc; }
    )
    console.log(this.Info)
  }


}

// search = (text$: Observable<string>) =>
//   text$.pipe(
//     debounceTime(200),
//     distinctUntilChanged(),
//     map(term => term.length < 2 ? []
//       : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
//   )