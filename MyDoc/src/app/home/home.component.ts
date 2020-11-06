import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  images = ['../../assets/img/slide1.jpg','../../assets/img/slide2.jpg','../../assets/img/slide3.jpg','../../assets/img/slide4.jpg'];
  public isCollapsed = true;
}
