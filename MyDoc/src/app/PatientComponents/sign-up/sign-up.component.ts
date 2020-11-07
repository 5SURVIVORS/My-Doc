import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthPatService } from '../../services/pat-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  obj = {
    name :"",
  password :"", 
  email :"",
  address : "", city : "", phoneNumber : 0, accountBanc : ""};

  constructor(private router: Router, private authPat : AuthPatService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.obj.name = form.value['name'];
    console.log(this.obj)
    this.obj.password = form.value['password'];
    this.obj.email = form.value['email'];
    this.obj.address = form.value['address'];
    this.obj.city = form.value['city'];
    this.obj.phoneNumber = form.value['tele']
    this.obj.accountBanc = form.value['accountBanc'];
    this.authPat.patSingUp(this.obj).subscribe(doctor=>{
      console.log(doctor, 'in submission')
    })
    this.router.navigate(['signInPat'])
}

}
