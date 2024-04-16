import { Component } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { Consultation } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-list-consultation',
  templateUrl: './list-consultation.component.html',
  styleUrls: ['./list-consultation.component.css']
})
export class ListConsultationComponent {
  consultations!: Consultation[];

  constructor(private consultationService: PsychiatristService, private storageService: StorageService) { }
  ngOnInit(): void {
  if (this.storageService.isLoggedIn()) {
    const user = this.storageService.getUser(); // Get user information from session
    const clientId = user?.id; // Assuming user object has an 'id' property for client ID
    if (clientId) {
      this.getConsultationsByUserId(clientId); // Pass the client ID to fetch consultations
    } else {
      console.error('Client ID not found in session.');
    }
  } else {
    console.error('User not logged in.');
  }
}

getConsultationsByUserId(userId: number): void {
  this.consultationService.getConsultationsByUserId(userId)
    .subscribe(
      (data: Consultation[]) => {
        this.consultations = data;
      },
      (error) => {
        console.error('Error fetching consultations:', error);
      }
    );
}

}