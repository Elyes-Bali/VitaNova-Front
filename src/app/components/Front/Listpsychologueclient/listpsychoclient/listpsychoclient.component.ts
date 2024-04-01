
import { Component, OnInit } from '@angular/core';
import { Psychologue } from '../../../../Models/Psychologue';
import {PsychologueService} from '../../../../services/psychologue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpsychoclient',
  templateUrl: './listpsychoclient.component.html',
  styleUrls: ['./listpsychoclient.component.css']
})
export class ListpsychoclientComponent {
  psychologues: Psychologue[] = [];
  status: boolean = true;
  searchTerm: string = '';
  rapport: Psychologue[] = []; // Holds the list of all products
  filteredProducts: Psychologue[] = [];


  constructor(private psychologueService: PsychologueService,private router: Router  ) { }

  ngOnInit(): void {
    
    console.log('ListPsychologueComponent initialized');

    this.getAllPsychologues();
  }

  getAllPsychologues(): void {
    this.psychologueService.getAllPsychologues().subscribe(
      
      (data) => {
        this.rapport = data;
      },
      (error: any) => {
        console.error('Failed to retrieve psychologues:', error);
      }
      
    );
    console.log('ListPsychologueComponent initialized');
  }
  filterProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = this.rapport;
      return;
    }

    this.filteredProducts = this.rapport.filter(rap =>
      // (rap?.dateRappPs?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (rap?.specialty?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (rap?.gender?.toString()?.includes(this.searchTerm.toLowerCase().trim()) || false) 
      
    );
  }
  reserveConsultation(psychologueId?: number) {
    if (psychologueId !== undefined) {
      // Store the selected psychologue ID in local storage or a service
      localStorage.setItem('selectedPsychologueId', psychologueId.toString());
      // Navigate to addconsultation component
      this.router.navigate(['/addc', psychologueId]);
    } else {
      // Handle the case when psychologueId is undefined
      console.error('Psychologue ID is undefined');
    }}

}
