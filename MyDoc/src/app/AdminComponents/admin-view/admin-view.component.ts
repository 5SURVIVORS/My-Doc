import { Component, OnInit, Input } from '@angular/core';
interface Doctor {
  id?: number;
  name: string;
  flag: string;
  category: string;
  price: number;
  comission: number
}
const DOCTORS: Doctor[] = [
  
  {
    name: 'doctor 1',
    flag: 'https://cdn.iconscout.com/icon/free/png-256/doctor-567-1118047.png',
    category: 'dentist',
    price: 120,
    comission:20
  },
  {
    name: 'doctor2',
    flag: 'https://cdn3.iconfinder.com/data/icons/doctor-icons/100/01-1Doctor-512.png',
    category: 'psycologist',
    price: 90,
    comission : 20
  }
];

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  @Input() id ;
  @Input() name ;
  @Input() category ;
  @Input() price;
  page = 1;
  pageSize = 4;
  collectionSize = DOCTORS.length;
  DOCTORS: Doctor[];



  constructor() { 
    // this.refreshDOCTORS();
  }

  ngOnInit(): void {
  }

  // refreshDOCTORS() {
  //   this.DOCTORS = DOCTORS
  //     .map((Doctor, i) => ({id: i + 1, ...Doctor}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

}
