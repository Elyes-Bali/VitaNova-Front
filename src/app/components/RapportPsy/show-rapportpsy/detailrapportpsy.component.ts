import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RapportPsy } from 'src/app/Models/Psychologue';
import { RapportPsyService } from 'src/app/services/rapport-psy.service';

@Component({
  selector: 'app-show-rapportpsy',
  templateUrl: './detailrapportpsy.component.html',
  styleUrls: ['./detailrapportpsy.component.css']
})
export class ShowRapportpsyComponent implements OnInit {
  
  rapportPsyId: number=0; // Assuming your RapportPsy model has an 'id' property
  rapportPsy: RapportPsy | null = null;

  constructor(
    private route: ActivatedRoute,
    private rapportPsyService: RapportPsyService
  ) {}

  ngOnInit() {
    // Retrieve the rapportPsyId from the route parameters
    this.route.params.subscribe(params => {
      this.rapportPsyId = params['id'];
      // Fetch the rapportPsy details using the service
      this.fetchRapportPsyDetails();
    });
  }

  fetchRapportPsyDetails() {
    this.rapportPsyService.getrapportById(this.rapportPsyId).subscribe(
      data => {
        this.rapportPsy = data;
      },
      error => {
        console.error('Error fetching RapportPsy details', error);
      }
    );
  }
  generatePdf(): void {
    if (this.rapportPsy) {
      this.rapportPsyService.generatePdf(this.rapportPsy.idRapportPsy!)
        .subscribe(response => {
          console.log('PDF generated successfully:', response);
          // Handle success, e.g., show a success message to the user
        }, error => {
          console.error('Error generating PDF:', error);
          // Handle error, e.g., show an error message to the user
        });
    } else {
      console.error('RapportPsy is not defined');
    }
  }

}
