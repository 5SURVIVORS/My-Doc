import { Component, OnInit, Input } from '@angular/core';
import { ProfileDocService } from 'src/app/services/profileDoc.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() Admin: string;
  docData : any = [] ;

  
  constructor(private profileDoc: ProfileDocService) {}

  ngOnInit(): void {
    this.docData = this.profileDoc.getDoc()
  }
}
