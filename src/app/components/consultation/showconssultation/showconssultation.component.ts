import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consultation } from 'src/app/Models/Psychologue';
import { PsychologueService } from 'src/app/services/psychologue.service';

@Component({
  selector: 'app-showconssultation',
  templateUrl: './showconssultation.component.html',
  styleUrls: ['./showconssultation.component.css']
})
export class ShowconssultationComponent {
  consultationId!: number;
  consultation!: Consultation;

  constructor(
    private route: ActivatedRoute,
    private psychologueService: PsychologueService
  ) {}

  ngOnInit() {
    this.consultationId = this.route.snapshot.params['id'];
    this.fetchConsultation();
  }

  fetchConsultation() {
    this.psychologueService.getconsultationById(this.consultationId).subscribe(
      data => {
        this.consultation = data;
      },
      error => {
        console.error('Error fetching consultation', error);
      }
    );
  }
}
