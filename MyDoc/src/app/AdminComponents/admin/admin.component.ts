import { Component, OnInit, Input } from '@angular/core';

import {ProfileDocService } from '../../services/profileDoc.service';

@Component({ 
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  Doctors:any;
  show : boolean = false;
  @Input() Admin: string;
  
  

  ngOnInit(): void {
    this.fetchDocs();
    setTimeout(
      () => {
        this.Doctors = this.profileDoc.docProfiles;    
        console.log(this.Doctors);    
        this.show = true;
      }, 2000
    );
   
   
  }
  constructor(private profileDoc : ProfileDocService) {
   
    
   }
  
  fetchDocs(){
   this.profileDoc.getDoc();
}


 
}
