
import { Component, OnInit } from '@angular/core';

import {PsychologueService} from '../../../services/psychologue.service';
import { Router } from '@angular/router';
import { Consultation } from 'src/app/Models/Psychologue';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-listconssultation',
  templateUrl: './listconssultation.component.html',
  styleUrls: ['./listconssultation.component.css']
})
export class ListconssultationComponent {
  
  consultations: Consultation[] = [];

  constructor(private psychologueService: PsychologueService,private router: Router,private storageService: StorageService  ){ }

  ngOnInit(): void {
      console.log('ListConsultationComponent initialized');
     
      const userId = this.storageService.getUser().id;
      this.getAllConsultations(userId);
  }

  getAllConsultations(userId:number): void {
      this.psychologueService.getConsultationsByUserId(userId).subscribe(
          (data) => {
              this.consultations = data;
          },
          (error: any) => {
              console.error('Failed to retrieve consultations:', error);
          }
      );
  }

}
