import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgetpasswordcomponent',
  templateUrl: './forgetpasswordcomponent.component.html',
  styleUrls: ['./forgetpasswordcomponent.component.css']
})
export class ForgetpasswordcomponentComponent {
  email= '' ;
  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  forgetpassword(email: string)
  {
    this.authService.forgetpassword(email).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/resetpassword']);
    }, (err: any) => {
      console.log(err);
    });
  }

}
