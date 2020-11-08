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

  constructor(private profileService: ProfileService) { }
  ngOnInit(): void {
    this.profiles = this.profileService.profiles;
  }



}

// search = (text$: Observable<string>) =>
//   text$.pipe(
//     debounceTime(200),
//     distinctUntilChanged(),
//     map(term => term.length < 2 ? []
//       : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
//   )