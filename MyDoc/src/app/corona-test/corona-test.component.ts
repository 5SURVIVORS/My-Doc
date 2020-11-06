import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona-test',
  templateUrl: './corona-test.component.html',
  styleUrls: ['./corona-test.component.css']
})
export class CoronaTestComponent implements OnInit {
result : number = 0;
//selectedAnswer: string = '';
answerr: boolean = true ;
stage : number  = 0
current : any = null;
submitshow : boolean = false ;
nextshow : boolean = true ;
quizz : any = [
  {
    question:'Do You currently have any of the following symptoms :',
    answers:[
      {
        answer:'No symptom',
        symptom: 0 ,
      },
      {
        answer:'High temperature',
        symptom: 1 ,
      },
      {
        answer:'Genral weakness,feeling unwell',
        symptom: 1 ,
      },
      {
        answer:'Headache',
        symptom: 1 ,
      },
      {
        answer:'Cough',
        symptom: 2 ,
      },
      {
        answer:'Shortness of breath',
        symptom: 3 ,
      },
      {
        answer:'nausea,vomiting,diarrhoea',
        symptom: 1 ,
      },
      {
        answer:'Sudden loss of sense of smell and/or taste',
        symptom: 3 ,
      },
      {
        answer:'Sore throat',
        symptom: 1 ,
      },
    ]
  },

  {
    question:'do you have any of the following pre-existing conditions?',
    answers:[
      {
        answer:'High blood pressure',
        symptom: 1 ,
      },
      {
        answer:'Cardiovascular disease',
        symptom: 1 ,
      },
      {
        answer:'Diabetes',
        symptom: 1 ,
      },
      {
        answer:'Condition or therapy that weakens the immune system',
        symptom: 1 ,
      },
      {
        answer:'Cancer',
        symptom: 1 ,
      },
      {
        answer:'No pre-existing condition',
        symptom: 0 ,
      },
    ]
  },
  {
    question:'Recently did  you have ?',
    answers:[
      {
        answer:'direct contact with patients in a healthcare institution',
        symptom: 1 ,
      },
      {
        answer:'direct contact with patients who are nursed/cared for at home,',
        symptom: 1 ,
      },
      {
        answer:'direct contact with workers who of a healthecare institution ,',
        symptom: 1 ,
      },
      {
        answer:'Crowds or Public space or Public transport without protection measurements ',
        symptom: 1 ,
      },
      {
        answer:'None of the above',
        symptom: 0 ,
      },
      
    ]
  },
]

checkboxChangeHandler(event:any){
 
 if (event.target.checked ) {
this.result+= Number.parseInt (event.target.value) ;  
 }else {
  this.result-= Number.parseInt (event.target.value) ;
 }
 console.log(this.result);
 console.log(event.target.checked)
}

buttonOnClick(event:any){
  console.log(this.result);
  if (this.result === 0 ) {
    alert('It is fairly unlikely that you have contracted the new coronavirus.');
  }else if (this.result <= 5 ) {
    alert('we suggest that you book an appointment with a doctor, please sign up.');
  }else if(this.result >5){
    alert('You should immediately contact your local authorities for a PCR test !!!!')
  }
  }
  
nextClick(event:any){
  this.stage++ ; 
  if (this.stage===this.quizz.length-1) {
this.nextshow = false ;
this.submitshow = true ;
  }
  this.current = this.quizz[this.stage] ;
}



  constructor() { }

  ngOnInit(): void {
   this.current = this.quizz[0]
  }

}
