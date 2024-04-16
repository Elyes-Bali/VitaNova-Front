import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: any = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
    mfaEnabled: false
  };
  isSignupSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  passwordMatch = true;

  response: any = {
  mfaEnabled : false,
  secretImageUri: null
};
  otpCode = '';
  isVerifySuccessful = false;
  isVerifyFailed = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.password !== this.form.confirmPassword) {
      this.passwordMatch = false;
      return;
    }

    const {username, email, password, mfaEnabled} = this.form;

    console.log(username, email, password, mfaEnabled);
    this.authService.register(username, email, password, mfaEnabled).subscribe({
      next: data => {
        this.response = data;
        this.isSignupSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
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
      this.isVerifySuccessful = true;
      this.isVerifyFailed = false
        },
        error: (err: any) => {
          this.isVerifySuccessful = false;
          this.isVerifyFailed = true;        }
      });
  }
}
