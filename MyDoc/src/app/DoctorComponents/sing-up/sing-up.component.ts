import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthDocService } from '../../services/doc-auth.service';

@Component({
  selector: 'app-sing-up-doc',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpDocComponent implements OnInit {

obj = {name :"",
 password :"", 
 email :"",
 address : "", city : "", phoneNumber : 0, accountBanc : "",  price : 0, category : "", cabineName : "", urlCertificate :""};

  constructor(private router: Router , private authDocService : AuthDocService) { }

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
    this.obj.category = form.value['category'];
    this.obj.cabineName = form.value['cabineName'];
    this.obj.urlCertificate = form.value['urlCertificate'];
    this.obj.price = Number(form.value['price']);
    this.authDocService.docSingUp(this.obj).subscribe(doctor=>{
      console.log(doctor, 'in submission')
    })
    this.router.navigate(['signInDoc'])
}
}
