import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona-test',
  templateUrl: './corona-test.component.html',
  styleUrls: ['./corona-test.component.css']
})
export class CoronaTestComponent implements OnInit {
result : number = 0;
selectedAnswer: string = '';
answerr: boolean = true ;
Answers: any = [
  'fever',
  'dry cough',
  'tiredness',
  'sore throat',
  'diarrhoea',
  'conjunctivitis',
  'headache',
  'loss of taste or smell',
  'a rash on skin, or discolouration of fingers or toes',
  
];

checkboxChangeHandler(event:any){
 this.result +=1 ;
 //console.log(this.result);
}

buttonOnClick(event:any){
  console.log(this.result);
  if (this.result === 0 ) {
    alert('you dont have any symptoms ');
  }else if (this.result <= 3 ) {
    alert('we suggest thet you book a doctor ');
  }else if(this.result >3){
    alert('You should go to the nearest hospital for a PCR test !!!')
  }
  }
  


  // if (this.selectedAnswer = event.target.value) {
  //   counter++ ; 
  //    counter = this.result  ;
  // }
   
  /////************ */
//   event.target.value = this.answerr ;
//    let counter = 0
//   console.log(this.answerr) ;
//   while ( this.answerr  && counter<=1) {
//     counter++ ;
//     console.log(counter)
//   }

// }
  ////********** */


  constructor() { }

  ngOnInit(): void {
  }

}
