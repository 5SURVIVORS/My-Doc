import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginAdminComponent implements OnInit {
  @Input() Admin: string;


  constructor() { }

  ngOnInit(): void {
  }

}
