import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-verifiaction-component',
  templateUrl: './verifiaction-component.component.html',
  styleUrls: ['./verifiaction-component.component.css']
})
export class VerifiactionComponentComponent {
  token= '' ;
  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  verifyEmail(token: string)
  {
    this.authService.verifyEmail(token).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/login']);
    }, (err: any) => {
      console.log(err);
    });
  }

}
