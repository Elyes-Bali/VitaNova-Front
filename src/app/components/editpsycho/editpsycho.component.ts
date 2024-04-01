import { Component, OnInit } from '@angular/core';
import { Psychologue } from '../../Models/Psychologue';
import { PsychologueService } from '../../services/psychologue.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editpsycho',
  templateUrl: './editpsycho.component.html',
  styleUrls: ['./editpsycho.component.css']
})
export class EditpsychoComponent {
  id: number=0;
  psychologue: Psychologue = new Psychologue();
  status: boolean = true;
 

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

  updatePsychologue(): void {
    this.psychologueService.editPsychologue(this.id, this.psychologue).subscribe(() => {
      // Redirect to the psychologue details page or another appropriate location after update
      this.router.navigate(['/show-psy/', this.id]);
    });
  }
}
