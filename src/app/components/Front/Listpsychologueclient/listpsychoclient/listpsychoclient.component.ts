
import { Component, OnInit } from '@angular/core';
import { Psychologue, User } from '../../../../Models/Psychologue';
import {PsychologueService} from '../../../../services/psychologue.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listpsychoclient',
  templateUrl: './listpsychoclient.component.html',
  styleUrls: ['./listpsychoclient.component.css']
})
export class ListpsychoclientComponent {
  psychologues: Psychologue[] = [];
  status: boolean = true;
  searchTerm: string = '';
  rapport: User[] = []; // Holds the list of all products
  filteredProducts: Psychologue[] = [];


  constructor(private psychologueService: PsychologueService,private router: Router  ,private userservice :UserService) { }

  ngOnInit(): void {
    
    console.log('ListPsychologueComponent initialized');

    this.getAllPsychologues();
  }

  getAllPsychologues(): void {
    this.userservice.getUsersWithPsychiatristSpecialty().subscribe(
      (data) => {
        this.rapport = data;
      },
      (error) => {
        console.error('Failed to retrieve psychiatrists:', error);
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
      (rap?.email?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (rap?.gender?.toString()?.includes(this.searchTerm.toLowerCase().trim()) || false) 
      
    );
  }
  reserveConsultation(id?: number) {
    if (id !== undefined) {
      // Store the selected psychologue ID in local storage or a service
      localStorage.setItem('selectedPsychologueId', id.toString());
      // Navigate to addconsultation component
      this.router.navigate(['/addc', id]);
    } else {
      // Handle the case when psychologueId is undefined
      console.error('Psychologue ID is undefined');
    }}

}
