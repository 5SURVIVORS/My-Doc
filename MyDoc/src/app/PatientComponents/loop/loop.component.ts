import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {
  @Input() name: string;
  @Input() city: string;
  constructor() { }

  ngOnInit(): void {
  }
//component for rendering doc
}
