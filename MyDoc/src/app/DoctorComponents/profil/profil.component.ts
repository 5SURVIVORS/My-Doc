import { Component, OnInit } from '@angular/core';
import { ProfileDocService } from 'src/app/services/profileDoc.service'

@Component({
  selector: 'app-profil-doc',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilDocComponent implements OnInit {
  docProfiles: any[];

  constructor(private profileDocService: ProfileDocService) { }

  ngOnInit(): void {
    this.docProfiles = this.profileDocService.docProfiles;
  }
}
