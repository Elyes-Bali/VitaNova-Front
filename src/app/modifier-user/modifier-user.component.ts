import { Component } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../_services/user.service";
import {RoleService} from "../_services/role.service";

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent {
  user = {
    username: '',
    email: '',
    creationDate: '',
    nom: '',
    prenom: '',
    gender: '',
    desctiption:'',
    achievments: '',
    fears:'',
    age:'',
    activated: false,
    banned: false,
    roles: {}
  };
  userId!: any;
  roles: any[] = [];
  constructor(private userService: UserService, private roleService: RoleService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(user => {
        this.user = user;
      });
    }
    this.getRoles();
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  getRoles() {
    this.roleService.getRoles().subscribe(res => {
      this.roles = res;
    })
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(
      response => {
      },
      error => {
      }
    );
    this.router.navigate(['/listUser']);
  }
}


