import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sing-in-doc',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInDocComponent implements OnInit {
  
  constructor(private router : Router) {

   }

  obj={values :'',
  password:''}
  

  onKey(event: any) { // without type info
    this.obj.values += event.target.value
  }

  onKeyPassword(event: any) { // without type info
    this.obj.password = event.target.value 
  }

  onChangeRouter(){
    
    this.router.navigate(['admin'])
    console.log(this.obj)
   
  }

  ngOnInit(): void {
  }

  
  

}
