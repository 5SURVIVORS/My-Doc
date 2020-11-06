import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    const name = form.value['name'];
    const password = form.value['password'];
    const email = form.value['email'];
    const adress = form.value['adress'];
    const city = form.value['city'];
    const phone = form.value['tele']
    const accountBanc = form.value['accountBanc'];
}

}
