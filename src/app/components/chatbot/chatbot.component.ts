import { Component } from '@angular/core';
import { Psychologue } from '../../Models/Psychologue';
import { PsychologueService } from '../../services/psychologue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  questions: any[] = [];
  selectedQuestionId: number | undefined;
  answerText: string | undefined;
  selectedQuestion: any | undefined;
  answer!: string;
  
 constructor(private psychologueService: PsychologueService ) { }

  ngOnInit(): void {
    this.loadQuestions();
  }
  

  loadQuestions(): void {
    this.psychologueService.getAllQuestions()
      .subscribe(questions => {
        this.questions = questions;
      });
  }
   
  getQuestionText(): string {
    const selectedQuestion = this.questions.find(question => question.idquestion === this.selectedQuestionId);
    return selectedQuestion ? selectedQuestion.text : '';
  }

  getAnswer(): void {
    if (this.selectedQuestionId) {
      this.psychologueService.getAnswerByQuestionId(this.selectedQuestionId)
        .subscribe(
          answer => {
            this.answerText = answer.text;
            console.log("works")
            
          },
          error => {
            console.error('Error fetching answer:', error);
          }
        );
    } else {
      console.log('No question selected.');
    }
  
  }
  selectQuestion(question: any): void {
    this.selectedQuestion = question;
    this.selectedQuestionId = question.idquestion;
  }
  

}
