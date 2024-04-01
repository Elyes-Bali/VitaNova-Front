import { Component, OnInit } from '@angular/core';
import { Client, Psychologue, RapportPsy } from 'src/app/Models/Psychologue';
import { RapportPsyService } from 'src/app/services/rapport-psy.service';
import { PsychologueService } from 'src/app/services/psychologue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rapport-psy',
  templateUrl: './add-rapport-psy.component.html',
  styleUrls: ['./add-rapport-psy.component.css']
})
export class AddRapportPsyComponent implements OnInit {

  newRapportPsy: RapportPsy = {
    description: '',
    dateRappPs: new Date(),
    psychologue: undefined,
    client: undefined
  };
  psychologues: Psychologue[] = [];
  clients: Client[] = [];
  status: boolean = true;

  constructor(
    private rapportPsyService: RapportPsyService,
    private psychologueService: PsychologueService,
    private router: Router,
    
  ) {}

  ngOnInit() {
    // Fetch the list of psychologues and clients when the component is initialized
    this.fetchPsychologues();
    this.fetchClients();
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

  addRapportPsy() {
    this.rapportPsyService.addrapportPsy(this.newRapportPsy)
      .subscribe(response => {
        console.log('RapportPsy added successfully', response);
        // You may navigate to another page or perform other actions upon success
      }, error => {
        console.error('Error adding RapportPsy', error);
      });
      this.router.navigate(['/rapportpsy']);
  }
}
    


