import { Component, OnInit, Input } from '@angular/core';
import {AuthAdminService } from '../../services/auth.admin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginAdminComponent implements OnInit {
  @Input() Admin: string;
  authStatus: boolean;


  constructor(private authService: AuthAdminService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['admin']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
