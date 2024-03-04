import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Psychologue } from '../../Models/Psychologue';
import { PsychologueService } from '../../services/psychologue.service';


@Component({
  selector: 'app-detailpsycho',
  templateUrl: './detailpsycho.component.html',
  styleUrls: ['./detailpsycho.component.css']
})
export class DetailpsychoComponent implements OnInit {
  id: number=0;
  psychologue: Psychologue = new Psychologue();

  constructor(private route: ActivatedRoute, private psychologueService: PsychologueService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.psychologueService.getPsychologueById(this.id).subscribe(data => {
      this.psychologue = data;
    });
  }
}
