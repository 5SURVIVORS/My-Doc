import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './PatientComponents/home-page/home-page.component';
import { SingInComponent } from './PatientComponents/sing-in/sing-in.component';
import { LogInComponent } from './PatientComponents/log-in/log-in.component';
import { ProfilComponent } from './PatientComponents/profil/profil.component';
import { MessagesComponent } from './PatientComponents/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SingInComponent,
    LogInComponent,
    ProfilComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
