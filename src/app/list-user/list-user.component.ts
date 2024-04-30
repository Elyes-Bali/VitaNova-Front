import { Component } from '@angular/core';
import { User } from '../models/user';
import {RoleService} from "../_services/role.service";
import {Router} from "@angular/router";
import {UserService} from "../_services/user.service";
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  status = false;
  sortOption: string = 'name';
  addToggle()
  {
    this.status = !this.status;
  }
  private role: string[] = [];
  isLoggedIn = false;

  currentPage: number = 1;
  itemsPerPage: number = 5; 
  users: any[] = [];
  searchTerm: string = '';
  roles: any[] = [];
  roleFilter: string = '';
  constructor(private userService: UserService,private roleService: RoleService, private router : Router,private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.getAllUsers()
    this.getRoles()
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.role = user.roles;
    }
  }

  isUserRoleAdmin(): boolean {
    return this.role.includes('ROLE_ADMIN');
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (users: any[]) => {
        this.users = users;
      },
      error: err => {
        console.error('Error fetching users:', err);
      }
    });
  }

  editUser(id: any) {
    this.router.navigate(['/edituser/'+ id]);
  }

  filterUsers(): any[] {
    return this.users.filter(user => {
      const usernameMatches = !this.searchTerm || user.username.toLowerCase().includes(this.searchTerm.toLowerCase());
      const roleMatches = !this.roleFilter || user.roles.some((role: { name: string; }) => role.name === this.roleFilter);
      return usernameMatches && roleMatches;
    });
  }

  getRoles() {
    this.roleService.getRoles().subscribe(res => {
      this.roles = res;
    })
  }

  confirmDelete(id: any): void {
    const confirmDelete = window.confirm('Are you sure you want to delete this User?');

    if (confirmDelete) {
      this.deleteUser(id);
    }
  }

  deleteUser(id: any): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log(`User with ID ${id} deleted successfully.`);
        this.getAllUsers();
      },
      (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
        this.getAllUsers();
      }
    );
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }


  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.users.length - 1);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  get totalPages(): number {
    return Math.ceil(this.filterUsers().length / this.itemsPerPage);
  }


  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }
  get paginatedUsers(): any[] {
    return this.filterUsers().slice(this.startIndex, this.endIndex + 1);
  }
}