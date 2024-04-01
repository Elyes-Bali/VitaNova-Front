import { Component, OnInit } from '@angular/core';
import { Client, Psychologue, Consultation } from 'src/app/Models/Psychologue';
import { PsychologueService } from 'src/app/services/psychologue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addconssultation',
  templateUrl: './addconssultation.component.html',
  styleUrls: ['./addconssultation.component.css']
})
export class AddconssultationComponent implements OnInit {
  
  newConsultation: Consultation = {
    startTime: '',
    consultationdate: '',
    psychologue: new Psychologue(),
    client: {} as Client
  };

  clients: Client[] = [];
  selectedPsychologueId!: number;

  constructor(
    private psychologueService: PsychologueService,
    private router: Router,
    private snackBar: MatSnackBar, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Fetch the list of clients when the component is initialized
    this.fetchClients();

    // Retrieve the selected psychologue ID from the route parameters
    this.route.params.subscribe(params => {
      this.selectedPsychologueId = +params['psychologueId'];
      if (this.selectedPsychologueId) {
        // Fetch the selected psychologue from the service
        this.psychologueService.getPsychologueById(this.selectedPsychologueId).subscribe(
          psychologue => {
            // Assign the selected psychologue to newConsultation
            this.newConsultation.psychologue = psychologue;
          },
          error => console.error('Error fetching psychologue', error)
        );
      }
    });
  }

  fetchClients() {
    this.psychologueService.getAllClient().subscribe(
      data => this.clients = data,
      error => console.error('Error fetching clients', error)
    );
  }

  addConsultation() {
    this.psychologueService.addconsultation(this.newConsultation)
      .subscribe(response => {
        if (response) {
          console.log('Consultation added successfully', response);
          this.router.navigate(['/consultations']);
          // You may navigate to another page or perform other actions upon success
        } else {
          console.error('Error adding Consultation: Response is null');
          this.snackBar.open('Time slot is already taken.', 'Close', {
            duration: 5000 // Display the message for 5 seconds
          });
        }
      }, error => {
        console.error('Error adding Consultation', error);
        this.snackBar.open('Error: Consultation slot is not available.', 'Close', {
          duration: 5000 // Display the message for 5 seconds
        });
      });
  }
}
