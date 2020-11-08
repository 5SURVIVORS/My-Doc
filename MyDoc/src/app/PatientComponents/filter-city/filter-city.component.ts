import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-filter-city',
  templateUrl: './filter-city.component.html',
  styleUrls: ['./filter-city.component.css']
})
export class FilterCityComponent implements OnInit {

  obj = { city : ""}
  appareils:any;
  show:boolean = false;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.obj.city = form.value['city'];
this.profileService.getAppareilsFromServer(this.obj);
this.appareils = this.profileService.docByCity
console.log(this.appareils);
    this.show = true;


  }


}
