
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
 
  // rapportPsyList: RapportPsy[] = [];
  // filteredRapportPsyList: RapportPsy[] = [];
  // selectedPsychologueName: string = '';

  // constructor(private rapportPsyService: RapportPsyService) { }

  // ngOnInit(): void {
  //   console.log('ListRapportPsyComponent initialized');
  //   this.getAllRapportPsy();
  // }

  // getAllRapportPsy(): void {
  //   this.rapportPsyService.getAllRapportPsy().subscribe(
  //     (data) => {
  //       this.rapportPsyList = data;
  //     },
  //     (error: any) => {
  //       console.error('Failed to retrieve RapportPsy:', error);
  //     }
  //   );
  // }

  searchTerm: string = ''; // Holds the search term entered by the user
  rapport: RapportPsy[] = []; // Holds the list of all products
  filteredProducts: RapportPsy[] = [];
 
  
  constructor(private rapportPsyService: RapportPsyService) { }

  ngOnInit(): void {
    this.getAllRapportPsy();
  }

  getAllRapportPsy(): void {
    this.rapportPsyService.getAllRapportPsy().subscribe(
      (data) => {
        this.rapport = data;
        this.filterProducts(); // Call filterProducts method after getting products
      },
      (error: any) => {
        console.error('Failed to retrieve products:', error);
      }
    );
  }

  filterProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = this.rapport;
      return;
    }

    this.filteredProducts = this.rapport.filter(rap =>
      // (rap?.dateRappPs?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (rap?.description?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (rap?.client?.toString()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
       (rap?.psychologue?.toString()?.includes(this.searchTerm.toLowerCase().trim()) || false)
    );
  }

}
