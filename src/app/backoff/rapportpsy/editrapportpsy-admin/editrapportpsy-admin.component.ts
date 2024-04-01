import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Psychologue, RapportPsy } from 'src/app/Models/Psychologue';
import { PsychologueService } from 'src/app/services/psychologue.service';
import { RapportPsyService } from 'src/app/services/rapport-psy.service';

@Component({
  selector: 'app-editrapportpsy-admin',
  templateUrl: './editrapportpsy-admin.component.html',
  styleUrls: ['./editrapportpsy-admin.component.css']
})
export class EditrapportpsyAdminComponent {

  rapportPsyId: number=0; // Assuming your RapportPsy model has an 'id' property
  rapportPsy!: RapportPsy; 
  psychologues: Psychologue[] = [];
  clients: Client[] = [];
  status: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rapportPsyService: RapportPsyService,
    private psychologueService: PsychologueService
  ) {}

  ngOnInit() {
    // Retrieve the rapportPsyId from the route parameters
    this.route.params.subscribe(params => {
      this.rapportPsyId = params['id'];
      // Fetch the rapportPsy details using the service
      this.fetchRapportPsyDetails();
      this.fetchPsychologues();
    this.fetchClients();
    });
  }
  fetchPsychologues() {
    this.psychologueService.getAllPsychologues().subscribe(
      data => this.psychologues = data,
      error => console.error('Error fetching psychologues', error)
    );
  }

  fetchClients() {
    this.psychologueService.getAllClient().subscribe(
      data => this.clients = data,
      error => console.error('Error fetching clients', error)
    );
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

  updateRapportPsy() {
    this.rapportPsyService.editrapportPsychologue(this.rapportPsyId,this.rapportPsy)
      .subscribe(response => {
        console.log('RapportPsy updated successfully', response);
        // You may navigate to another page or perform other actions upon success
        this.router.navigate(['/rapportpsy']);
      }, error => {
        console.error('Error updating RapportPsy', error);
      });
  }
}
