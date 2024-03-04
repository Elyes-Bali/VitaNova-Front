import { Component } from '@angular/core';
import { Psychologue } from '../../../Models/Psychologue';
import { PsychologueService } from '../../../services/psychologue.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addpsycho',
  templateUrl: './addpsycho.component.html',
  styleUrls: ['./addpsycho.component.css']
})
export class AddPsychoComponent {
  newPsychologue: Psychologue = {
    nom: '',
    prenom: '',
    email: '',
    phonenumber: '',
    chats: [],
    rapportPsy: [],
    notifications: [],
    clients: []
  };

  constructor(private psychologueService: PsychologueService,    private router: Router,) { }

  addPsychologue() {
    
    this.psychologueService.addPsychologue(this.newPsychologue)
      .subscribe(
        response => {
          console.log('Psychologue added successfully:', response);
          // Reset the form or perform any additional logic
          this.newPsychologue = {
            nom: '',
            prenom: '',
            email: '',
            phonenumber: '',
            chats: [],
            rapportPsy: [],
            notifications: [],
            clients: []
          };
        },
        error => {
          console.error('Error adding psychologue:', error);
          // Handle the error or display an error message
        }

      );
      this.router.navigate(['/psy']);
  }
}