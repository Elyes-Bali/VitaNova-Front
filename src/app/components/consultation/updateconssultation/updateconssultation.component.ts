
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Psychologue, Consultation } from 'src/app/Models/Psychologue';
import { PsychologueService } from 'src/app/services/psychologue.service';
@Component({
  selector: 'app-updateconssultation',
  templateUrl: './updateconssultation.component.html',
  styleUrls: ['./updateconssultation.component.css']
})
export class UpdateconssultationComponent {
  consultationId!: number;
  consultation!: Consultation;
  psychologues: Psychologue[] = [];
  clients: Client[] = [];

  constructor(
    private route: ActivatedRoute,
    private psychologueService: PsychologueService,
    private router: Router
  ) {}

  ngOnInit() {
    this.consultationId = this.route.snapshot.params['id'];
    this.fetchConsultation();
    this.fetchPsychologues();
    this.fetchClients();
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

  fetchPsychologues() {
    this.psychologueService.getAllPsychologues().subscribe(
      data => {
        this.psychologues = data;
      },
      error => {
        console.error('Error fetching psychologues', error);
      }
    );
  }

  fetchClients() {
    this.psychologueService.getAllClient().subscribe(
      data => {
        this.clients = data;
      },
      error => {
        console.error('Error fetching clients', error);
      }
    );
  }

  updateConsultation() {
    this.psychologueService.updateconsultation(this.consultationId, this.consultation).subscribe(
      response => {
        console.log('Consultation updated successfully', response);
        // You may navigate to another page or perform other actions upon success
        this.router.navigate(['/consultations']);
      },
      error => {
        console.error('Error updating consultation', error);
      }
    );
  }
}
