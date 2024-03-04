
import { Component, OnInit } from '@angular/core';
import { Psychologue } from '../../Models/Psychologue';
import {PsychologueService} from '../../services/psychologue.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-psychologue',
  templateUrl: './list-psychologue.component.html',
  styleUrls: ['./list-psychologue.component.css'],
})

export class ListPsychologueComponent implements OnInit {
 
    psychologues: Psychologue[] = [];
 
  
    constructor(private psychologueService: PsychologueService,private router: Router  ) { }
  
    ngOnInit(): void {
      
      console.log('ListPsychologueComponent initialized');

      this.getAllPsychologues();
    }
  
    getAllPsychologues(): void {
      this.psychologueService.getAllPsychologues().subscribe(
        
        (data) => {
          this.psychologues = data;
        },
        (error: any) => {
          console.error('Failed to retrieve psychologues:', error);
        }
        
      );
      console.log('ListPsychologueComponent initialized');
    }

}
