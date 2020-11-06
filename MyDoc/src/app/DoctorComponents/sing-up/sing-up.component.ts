import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sing-up-doc',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpDocComponent implements OnInit {

obj = {name :"",
 password :"", 
 email :"",
 adress : "", city : "", phone : 0, accountBanc : "", Patients : "", price : 0, category : "", cabineName : "", urlCertificate :""};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)     
    this.obj.name = form.value['name'];
    console.log(this.obj)
    this.obj.password = form.value['password'];
    this.obj.email = form.value['email'];
    this.obj.adress = form.value['adress'];
    this.obj.city = form.value['city'];
    this.obj.phone = form.value['tele']
    this.obj.accountBanc = form.value['accountBanc'];
    this.obj.category = form.value['category'];
    this.obj.cabineName = form.value['cabineName'];
    this.obj.urlCertificate = form.value['urlCertificate'];
    this.obj.Patients = form.value['Patients'];
    this.obj.price = form.value['price'];
    this.router.navigate([''])
}
}
