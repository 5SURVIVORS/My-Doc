import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

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
