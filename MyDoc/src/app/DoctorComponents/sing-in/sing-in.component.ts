import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
//import { AuthDocService } from '../../services/doc-auth.service';


@Component({
  selector: 'app-sing-in-doc',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInDocComponent implements OnInit {

  constructor(private router: Router) {
    // private authDoc: AuthDocService, Commented it for now because it give us an error that will not render the component also for line 34 ** Alex

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
    // this.authDoc.saveNewDoc(this.obj)
    this.router.navigate(['doctor'])
    console.log(this.obj)

  }

  ngOnInit(): void {
  }




}
