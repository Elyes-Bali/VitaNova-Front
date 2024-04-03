import { Component, OnInit } from '@angular/core';
import { Client, Psychologue, Consultation, User } from 'src/app/Models/Psychologue';
import { PsychologueService } from 'src/app/services/psychologue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

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
    client: {} as Client,
    user : {} as User,
  };

  clients: Client[] = [];
  selectedPsychologueId!: number;
  selectedUserId!: number;

  constructor(
    private psychologueService: PsychologueService,
    private router: Router,
    private snackBar: MatSnackBar, 
    private route: ActivatedRoute,
    private userService :UserService
  ) {}

  ngOnInit() {
    // Fetch the list of clients when the component is initialized
    

    // Retrieve the selected psychologue ID from the route parameters
    this.route.params.subscribe(params => {
      console.log('User ID:', params['userId']); // Add this line to check the value of the user ID
  
      this.selectedUserId = +params['userId'];
      if (this.selectedUserId) {
        console.error('works user')
        // Fetch the selected user from the service
        this.userService.getuserId(this.selectedUserId).subscribe(
          user => {
            // Assign the selected user to newConsultation
            this.newConsultation.user = user;
  
            // Update the user field in the form
            this.newConsultation.user.nom = user.nom;
          },
          error => console.error('Error fetching user', error)
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
