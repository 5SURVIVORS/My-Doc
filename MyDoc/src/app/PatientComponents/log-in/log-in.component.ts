import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPatService } from '../../services/pat-auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private authPat: AuthPatService ) {
    
  }

  obj = {
    values: '',
    password: ''
  }


  onKey(event: any) { // without type info  
    this.obj.values += event.target.value
  }

  onKeyPassword(event: any) { // without type info 
    this.obj.password = event.target.value
  }

  onChangeRouter() {
    this.router.navigate(['profilePat'])


  }

  ngOnInit(): void {
  }

}
