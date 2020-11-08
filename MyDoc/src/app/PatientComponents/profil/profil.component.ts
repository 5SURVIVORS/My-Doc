import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Observable } from 'rxjs';
// import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profiles: any[];
  Info;
  Category;
  City;

  constructor(private profileService: ProfileService) { }
  ngOnInit(): void {
    this.profiles = this.profileService.profiles;
  }
  onSearchCategory(event) {
    this.Category = event.target.value;
  }
  onSearchCity(event) {
    this.City = event.target.value;
  }

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