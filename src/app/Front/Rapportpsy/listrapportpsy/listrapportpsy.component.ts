import { Component } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { RapportPsy } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-listrapportpsy',
  templateUrl: './listrapportpsy.component.html',
  styleUrls: ['./listrapportpsy.component.css']
})
export class ListrapportpsyComponent {
  rapports!: RapportPsy[];

  constructor(private psychiatristService: PsychiatristService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      const user = this.storageService.getUser(); // Get user information from session
      const psychiatristId = user?.id; // Assuming user object has an 'id' property for psychiatrist ID
      if (psychiatristId) {
        this.getRapportsByPsychiatristId(psychiatristId); // Pass the psychiatrist ID to fetch rapports
      } else {
        console.error('Psychiatrist ID not found in session.');
      }
    } else {
      console.error('User not logged in.');
    }
  }

  getRapportsByPsychiatristId(psychiatristId: number): void {
    this.psychiatristService.getRapportPsyByPsychiatristId(psychiatristId)
      .subscribe(
        (data: RapportPsy[]) => {
          this.rapports = data;
        },
        (error) => {
          console.error('Error fetching rapports:', error);
        }
      );
  }
}
