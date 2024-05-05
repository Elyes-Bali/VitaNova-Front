import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  response: any = {
    mfaEnabled: false
  };
  otpCode = '';
  isVerifySuccessful = false;
  isVerifyFailed = false;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.response = data;
        if(!data.mfaEnabled)
        {this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      }},
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  verifyTfa() {
    const verifyRequest = {
      username: this.form.username,
      code: this.otpCode
    }
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (data: any) => {
          this.storageService.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          this.reloadPage();
        },
        error: (err: any) => {
          this.isVerifySuccessful = false;
          this.isVerifyFailed = true; ;
        }
      });
  }
  getRoleBasedRoute(): string {
    switch(this.roles[0]) {  // Assuming a single role per user
      case 'ROLE_ADMIN':
        return '/listUser';  // Replace with your admin dashboard route
      case 'ROLE_CLIENT':
        return '/';  // Replace with your client home route
      case 'ROLE_COACH':
        return '/';  // Replace with your coach dashboard route
        case 'ROLE_NUTRITOINISTE':
          return '/listUser'; 
      default:
        return '/';  // Default route if role doesn't match
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
}

//   getRoleBasedRoute(): string {
//     switch(this.roles[0]) {  // Assuming a single role per user
//       case 'ROLE_ADMIN':
//         return '/listUser';  // Replace with your admin dashboard route
//       case 'ROLE_CLIENT':
//         return '/';  // Replace with your client home route
//       case 'ROLE_COACH':
//         return '/';  // Replace with your coach dashboard route
//         case 'ROLE_NUTRITOINISTE':
//           return '/listUser'; 
//       default:
//         return '/';  // Default route if role doesn't match
//     }
//   }
//   reloadPage(): void {
//     window.location.reload();
//     this.getRoleBasedRoute();
//   }
// }
