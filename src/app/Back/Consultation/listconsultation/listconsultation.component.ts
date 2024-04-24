import { Component } from '@angular/core';
import { Consultation } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-listconsultation',
  templateUrl: './listconsultation.component.html',
  styleUrls: ['./listconsultation.component.css']
})
export class ListconsultationComponent {
  consultations!: Consultation[];
  filteredConsultations!: Consultation[];
  filterTerm: string = '';
  status: boolean = false;
  
 
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(private consultationService: PsychiatristService) { }

  ngOnInit(): void {
    this.getConsultationsByUserId();
  }

  getConsultationsByUserId(): void {
    this.consultationService.getAllConsultations()
      .subscribe(
        (data: Consultation[]) => {
          this.consultations = data;
          this.applyFilters(); // Apply filters initially
        },
        (error) => {
          console.error('Error fetching consultations:', error);
        }
      );
  }

  applyFilters(): void {
    if (!this.filterTerm) {
      // If filter term is empty, show all consultations
      this.filteredConsultations = this.consultations;
    } else {
      // Filter consultations by psychiatrist username or client username
      this.filteredConsultations = this.consultations.filter(consultation =>
        consultation.psychiatrist.username?.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        consultation.client.username?.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }
  }
}
