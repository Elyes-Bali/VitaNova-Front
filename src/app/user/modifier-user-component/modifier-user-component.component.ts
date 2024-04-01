import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-modifier-user-component',
  templateUrl: './modifier-user-component.component.html',
  styleUrls: ['./modifier-user-component.component.css']
})
export class ModifierUserComponentComponent {
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
