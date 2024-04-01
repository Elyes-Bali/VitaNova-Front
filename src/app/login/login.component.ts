import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  constructor(private authService: AuthService, private storageService: StorageService,    private router: Router ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    console.log('works');
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.response = data;
        if(!data.mfaEnabled)
        {this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/psy']); // Redirect to /admin if role is admin
        }
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/psy']); // Redirect to /admin if role is admin
        }
        if (this.roles.includes('ROLE_CLIENT')) {
          this.router.navigate(['/consultations']); 

          // Redirect to /admin if role is admin
        }  else {
          this.reloadPage();
        }
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
          //this.reloadPage();
          
        },
        error: (err: any) => {
          this.isVerifySuccessful = false;
          this.isVerifyFailed = true; ;
        }
      });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
