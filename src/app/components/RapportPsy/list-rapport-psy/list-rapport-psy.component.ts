
import { Component, OnInit } from '@angular/core';
import {  Psychologue, RapportPsy } from '../../../Models/Psychologue';

import {PsychologueService} from '../../../services/psychologue.service';
import { Router } from '@angular/router';
import { RapportPsyService } from 'src/app/services/rapport-psy.service';

@Component({
  selector: 'app-list-rapport-psy',
  templateUrl: './list-rapport-psy.component.html',
  styleUrls: ['./list-rapport-psy.component.css']
})
export class ListRapportPsyComponent implements OnInit {
 
  rapportPsyList: RapportPsy[] = [];

  constructor(private rapportPsyService: RapportPsyService) { }

  ngOnInit(): void {
    console.log('ListRapportPsyComponent initialized');
    this.getAllRapportPsy();
  }

  getAllRapportPsy(): void {
    this.rapportPsyService.getAllRapportPsy().subscribe(
      (data) => {
        this.rapportPsyList = data;
      },
      (error: any) => {
        console.error('Failed to retrieve RapportPsy:', error);
      }
    );
  }
 
}
