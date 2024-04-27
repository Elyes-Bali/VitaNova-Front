import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PsychiatristService } from '../services/psychiatrist.service';
import { Question } from '../models/user';

@Component({
  selector: 'app-chatiebotie',
  templateUrl: './chatiebotie.component.html',
  styleUrls: ['./chatiebotie.component.css']
})
export class ChatiebotieComponent implements OnInit {
  @ViewChild('conversation') conversation!: ElementRef;
  @ViewChild('inputForm') inputForm!: ElementRef;
  @ViewChild('inputField') inputField!: ElementRef;

  questions: Question[] = [];

  constructor(private psychologueService: PsychiatristService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.psychologueService.getAllQuestions()
      .subscribe(questions => {
        this.questions = questions;
        // After loading questions, display them in the conversation
        this.displayQuestions();
      });
  }

  displayQuestions(): void {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.questions.forEach(question => {
      const message = document.createElement('div');
      message.classList.add('chatbot-message');
      message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${question.text}</p>`;
      this.conversation.nativeElement.appendChild(message);
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const input = this.inputField.nativeElement.value;
    this.inputField.nativeElement.value = '';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    this.conversation.nativeElement.appendChild(message);

    const response = this.generateResponse(input);

    message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    this.conversation.nativeElement.appendChild(message);
    message.scrollIntoView({ behavior: 'smooth' });
  }

  generateResponse(input: string): string {
    const responses: string[] = [
      // Your responses here...
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }
}
