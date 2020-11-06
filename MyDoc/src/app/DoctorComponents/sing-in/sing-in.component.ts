import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDocService } from '../../services/doc-auth.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-sing-in-doc',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInDocComponent implements OnInit {

  constructor(private router: Router, private authDoc : AuthDocService) {
    // private authDoc: AuthDocService, Commented it for now because it give us an error that will not render the component also for line 34 ** Alex

  }

  obj = {
    email: '',
    password: ''
  }


  onChangeRouter(form: NgForm) {
    this.obj.email = form.value['email'];
    this.obj.password = form.value['password'];
    this.authDoc.docSingIn(this.obj).subscribe(doctors => { console.log(doctors); });
    console.log(this.obj)
    this.router.navigate(['doctor'])

  }

  ngOnInit(): void {
  }




}
