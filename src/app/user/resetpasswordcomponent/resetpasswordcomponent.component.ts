import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-resetpasswordcomponent',
  templateUrl: './resetpasswordcomponent.component.html',
  styleUrls: ['./resetpasswordcomponent.component.css']
})
export class ResetpasswordcomponentComponent {
  
  token: any;
  password: any;
  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  resetpassword(token: any, password: any)
  {
    this.authService.resetpassword(token, password).subscribe(data => {
      console.log(data);
      this.route.navigate(['/login']);
    }, err => {
      console.log(err);
    });
  }

}
