import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-listpsyfront-component',
  templateUrl: './listpsyfront-component.component.html',
  styleUrls: ['./listpsyfront-component.component.css']
})
export class ListpsyfrontComponentComponent {

  users: User[] = [];

  constructor(private userService: PsychiatristService, private router: Router) { }

  ngOnInit(): void {
    this.getPsychiatristUsers();
  }

  getPsychiatristUsers(): void {
    this.userService.getPsychiatrists()
      .subscribe(users => this.users = users);
  }
  reserveConsultation(psychiatristId: number): void {
    this.router.navigate(['/addconsultation', psychiatristId]);
  }
  getStars(rating: number | undefined): any[] {
    const stars = Math.round(rating || 0);
    return Array(stars).fill(0);
  }
}
