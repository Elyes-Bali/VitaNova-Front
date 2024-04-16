import { Component } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { RapportPsy } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-adminlisrapportpsy',
  templateUrl: './adminlisrapportpsy.component.html',
  styleUrls: ['./adminlisrapportpsy.component.css']
})
export class AdminlisrapportpsyComponent {
  rapports: RapportPsy[] = [];

  constructor(private psychiatristService: PsychiatristService) { }

  ngOnInit(): void {
    this.getRapports();
  }

  getRapports(): void {
    this.psychiatristService.getAllRapports().subscribe(
      (data: RapportPsy[]) => {
        this.rapports = data;
      },
      (error) => {
        console.error('Error fetching rapports:', error);
      }
    );
  }

}
