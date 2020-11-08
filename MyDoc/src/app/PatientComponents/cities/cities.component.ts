import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from '../../services/profile.service'

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent  {

  showTunis :boolean = false ;
  showManouba :boolean = false ;
  showAriana :boolean = false ;
  showSousse :boolean = false ;
  selectedCity: string = '';

cities: any = [
  'Tunis',
  'Manouba',
  'Ariana',
  'Sousse',
  
];

obj = {city : ""}
@Input() Doc:any;
//function that handle the selected city in the radio and return it's value 
radioChangeHandler(event:any){

  this.selectedCity = event.target.value;

  if(this.selectedCity === "Tunis"){
    this.showTunis = true ;
    this.showManouba = false ;
    this.showAriana = false ;
    this.showSousse = false ;
  }
  
 if (this.selectedCity==='Manouba'){
  this.showTunis = false ;
  this.showManouba = true ;
  this.showAriana = false ;
  this.showSousse = false ;

  }
   if (this.selectedCity==='Ariana'){
    this.showTunis = false ;
    this.showManouba = false ;
    this.showAriana = true ;
    this.showSousse = false ;
  }
 if (this.selectedCity==='Sousse'){
  this.showTunis = false ;
  this.showManouba = false ;
  this.showAriana = false ;
  this.showSousse = true ;
  }
  console.log(this.selectedCity)
}
//function that should send a post request to the server



<<<<<<< HEAD
  constructor() {
=======


  constructor( private router: Router, private profileService: ProfileService) {
>>>>>>> b978f7bcf9921a5996cd1a630db05a67695fc8ff


   }

   buttonOnClick(event:any){
    console.log('button clicked !');
    let city = this.selectedCity;
    this.obj.city = this.selectedCity
    console.log(city)
    this.router.navigate(['filter'])
      
   }


  ngOnInit() {
    
  }

}
