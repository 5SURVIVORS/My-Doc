import { Component, OnInit, Input } from '@angular/core';



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
buttonOnClick(event:any){
console.log('button clicked !');
let city = this.selectedCity
console.log(city)
}



  constructor() {

   }

  
  ngOnInit() {
    
  }

}
