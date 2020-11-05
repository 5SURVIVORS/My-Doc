import {HttpClientModule} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Subject} from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DocAuthService {

  constructor(private httpClient : HttpClientModule) { }


//   saveNewDoc(obj) {
//     this.httpClient
//       .post('', obj)
//       .subscribe(
//         () => {
//           console.log('Enregistrement terminé !');
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
// }


}
