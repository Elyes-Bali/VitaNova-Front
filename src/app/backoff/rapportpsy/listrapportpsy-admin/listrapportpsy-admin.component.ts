
import { Component, OnInit } from '@angular/core';
import { Psychologue,RapportPsy } from '../../../Models/Psychologue';
import {RapportPsyService} from '../../../services/rapport-psy.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listrapportpsy-admin',
  templateUrl: './listrapportpsy-admin.component.html',
  styleUrls: ['./listrapportpsy-admin.component.css']
})
export class ListrapportpsyAdminComponent {


  searchTerm: string = ''; // Holds the search term entered by the user
  rapport: RapportPsy[] = []; // Holds the list of all products
  filteredProducts: RapportPsy[] = [];
  status: boolean = true;
  
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
