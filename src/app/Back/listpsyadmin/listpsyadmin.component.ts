import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-listpsyadmin',
  templateUrl: './listpsyadmin.component.html',
  styleUrls: ['./listpsyadmin.component.css']
})
export class ListpsyadminComponent {
  users: User[] = [];

  constructor(private userService: PsychiatristService, private router: Router) { }

  ngOnInit(): void {
    this.getPsychiatristUsers();
  }

  getPsychiatristUsers(): void {
    this.userService.getPsychiatrists()
      .subscribe(users => this.users = users);
  }

}
