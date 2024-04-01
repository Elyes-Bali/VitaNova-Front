import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PsychologueService } from 'src/app/services/psychologue.service';
import { Consultation } from 'src/app/Models/Psychologue';

@Component({
  selector: 'app-deleteconssultation',
  templateUrl: './deleteconssultation.component.html',
  styleUrls: ['./deleteconssultation.component.css']
})
export class DeleteconssultationComponent {
  consultationId!: number;
  consultation!: Consultation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private psychologueService: PsychologueService,
  ) { }

  ngOnInit(): void {
    this.consultationId = this.route.snapshot.params['id'];

    this.psychologueService.getconsultationById(this.consultationId).subscribe(data => {
      this.consultation = data;
    });
  }

  deleteConsultation(): void {
    this.psychologueService.deleteconsultation(this.consultationId).subscribe(() => {
      // Redirect to a page or component after the consultation is deleted
      this.router.navigate(['/consultations']); // Replace with your desired route
    });
  }

}
