import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  user:any
  isAuthenticated:boolean = false;

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });

    this.authService.getUser().subscribe({
      next: (response:any) => {
        this.user = response.user;
        console.log("Response from header component:" , response.user.username);
      },
      error: (error) =>{
        console.log(error);

      }
    });


  }



  logOut(){
    this.authService.logOut().subscribe({
      next:(response:any)=>{
        console.log(response);
      },
      error: (error) =>{
        console.log(error);

      }
    })

  }

}
