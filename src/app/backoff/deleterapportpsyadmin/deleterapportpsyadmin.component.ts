import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportPsy } from 'src/app/Models/Psychologue';
import { RapportPsyService } from 'src/app/services/rapport-psy.service';

@Component({
  selector: 'app-deleterapportpsyadmin',
  templateUrl: './deleterapportpsyadmin.component.html',
  styleUrls: ['./deleterapportpsyadmin.component.css']
})
export class DeleterapportpsyadminComponent {
  rapportPsyId!: number;
  rapportPsy!: RapportPsy;
  status: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rapportPsyService: RapportPsyService,
  ) { }

  ngOnInit(): void {
    this.rapportPsyId = this.route.snapshot.params['id'];

    this.rapportPsyService.getrapportById(this.rapportPsyId).subscribe(data => {
      this.rapportPsy = data;
    });
  }

  deleteRapportPsy(): void {
    this.rapportPsyService.deleterapportPsychologue(this.rapportPsyId).subscribe(() => {
      // Redirect to a page or component after the rapport psy is deleted
      this.router.navigate(['/rapport-psys']); // Replace with your desired route
    });
  }

}
