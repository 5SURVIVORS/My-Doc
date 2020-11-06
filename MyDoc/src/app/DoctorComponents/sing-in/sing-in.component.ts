import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthDocService } from '../../services/doc-auth.service';


@Component({
  selector: 'app-sing-in-doc',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInDocComponent implements OnInit {

  constructor(private router: Router,private authDocService : AuthDocService) {
    // private authDoc: AuthDocService, Commented it for now because it give us an error that will not render the component also for line 34 ** Alex

  }

  obj = {
    email: '',
    password: ''
  }

  onChangeRouter(form: NgForm) {
   
    this.obj.password = form.value['password'];
    this.obj.email = form.value['email'];
    this.router.navigate(['doctor'])
    console.log(this.obj)
    this.authDocService.docSignIn(this.obj).subscribe(doctor=>{
      
      console.log(doctor)
    })

  }

  ngOnInit(): void {
  }




}
