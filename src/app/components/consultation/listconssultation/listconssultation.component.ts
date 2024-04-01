
import { Component, OnInit } from '@angular/core';

import {PsychologueService} from '../../../services/psychologue.service';
import { Router } from '@angular/router';
import { Consultation } from 'src/app/Models/Psychologue';

@Component({
  selector: 'app-listconssultation',
  templateUrl: './listconssultation.component.html',
  styleUrls: ['./listconssultation.component.css']
})
export class ListconssultationComponent {
  
  consultations: Consultation[] = [];

  constructor(private psychologueService: PsychologueService,private router: Router  ){ }

  ngOnInit(): void {
      console.log('ListConsultationComponent initialized');
      this.getAllConsultations();
  }

  getAllConsultations(): void {
      this.psychologueService.getallconsultation().subscribe(
          (data) => {
              this.consultations = data;
          },
          (error: any) => {
              console.error('Failed to retrieve consultations:', error);
          }
      );
  }

}