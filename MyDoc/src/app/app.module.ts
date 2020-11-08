import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProfileService } from './services/profile.service'; // profileService running with all components
import { ProfileDocService } from './services/profileDoc.service';


import { FormsModule } from '@angular/forms'; // this will be used for two ways binding if needed;


import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HomePageComponent } from './PatientComponents/home-page/home-page.component';

import { LogInComponent } from './PatientComponents/log-in/log-in.component';
import { ProfilComponent } from './PatientComponents/profil/profil.component';
import { MessagesComponent } from './PatientComponents/messages/messages.component';
import { AdminComponent } from './AdminComponents/admin/admin.component';
import { CitiesComponent } from './PatientComponents/cities/cities.component';
import { AuthAdminService } from './services/auth.admin.service';
import { HomePageDocComponent } from './DoctorComponents/home-page-doc/home-page-doc.component';
import { MessagesDocComponent } from './DoctorComponents/messages/messages.component';
import { ProfilDocComponent } from './DoctorComponents/profil/profil.component';
import { SingInDocComponent } from './DoctorComponents/sing-in/sing-in.component';
import { SingUpDocComponent } from './DoctorComponents/sing-up/sing-up.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginAdminComponent } from './AdminComponents/login/login.component';
import { AuthPatService } from './services/pat-auth.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthDocService } from './services/doc-auth.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SignUpComponent } from './patientComponents/sign-up/sign-up.component';
import { CoronaTestComponent } from './corona-test/corona-test.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { CoronaComponent } from './corona/corona.component';

import { FilterCityComponent } from './PatientComponents/filter-city/filter-city.component';
import { LoopComponent } from './PatientComponents/loop/loop.component';
import { AdminViewComponent } from './AdminComponents/admin-view/admin-view.component';
import {AgmCoreModule} from '@agm/core';










@NgModule({
  declarations: [

    AppComponent,
    HomePageComponent,
    LogInComponent,
    ProfilComponent,
    MessagesComponent,
    AdminComponent,
    CitiesComponent,
    HomePageDocComponent,
    MessagesDocComponent,
    ProfilDocComponent,
    SingInDocComponent,
    SingUpDocComponent,
    LoginAdminComponent,
    NavBarComponent,
    HomeComponent,
    SignUpComponent,
    CoronaTestComponent,
    AboutUsComponent,
   CoronaComponent,
    FilterCityComponent,
    LoopComponent,
    AdminViewComponent,
   
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDeGVs2-huRD24Jcrftsxu_2khOnc5pyIM"
    }),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'doctor', component: HomePageDocComponent },
      { path: 'signUpDoc', component: SingUpDocComponent },
      { path: 'signInDoc', component: SingInDocComponent },
      { path: 'patient', component: HomePageComponent },
      { path: 'profileDoc', component: ProfilDocComponent },
      { path: 'profilePat', component: ProfilComponent },
      { path: 'auth', component: LoginAdminComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'corona', component: CoronaTestComponent },
      { path: 'signUpPat', component: SignUpComponent },
      { path: 'signInPat', component: LogInComponent },
      { path: 'teem', component: AboutUsComponent },
      {path :'cities', component: CitiesComponent },
      {path :'filter', component: FilterCityComponent }


    ]),
    NgbModule,

  ],
  providers: [
    ProfileService,
    ProfileDocService,
    AuthAdminService,
    AuthDocService,
    AuthPatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
