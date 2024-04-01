import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Psychologue } from 'src/app/Models/Psychologue';
import { PsychologueService } from 'src/app/services/psychologue.service';

@Component({
  selector: 'app-deletepsycho',
  templateUrl: './deletepsycho.component.html',
  styleUrls: ['./deletepsycho.component.css']
})
export class DeletepsychoComponent {
  status: boolean = true;
  id: number=0;
  psychologue: Psychologue = new Psychologue();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private psychologueService: PsychologueService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.psychologueService.getPsychologueById(this.id).subscribe(data => {
      this.psychologue = data;
    });
  }

  deletePsychologue(): void {
    this.psychologueService.deletePsychologue(this.id).subscribe(() => {
      // Redirect to a page or component after the psychologue is deleted
      this.router.navigate(['/psy']); // Replace with your desired route
    });
  }
}
