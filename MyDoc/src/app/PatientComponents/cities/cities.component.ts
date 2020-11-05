import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
selectedCity: string = '';
cities: any = [
  'Tunis',
  'Manouba',
  'Ariana',
  'Sousse',
  
];

radioChangeHandler(event:any){
  this.selectedCity = event.target.value;
  console.log(this.selectedCity)
}
  constructor() {

   }

  ngOnInit(): void {
    
  }

}
