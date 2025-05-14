import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isLoading:boolean = false;

  signIn(formData:NgForm){
    this.isLoading = true;
    console.log(formData.value);
    this.authService.signin(formData.value).subscribe({
      next: (data) => {
        console.log(data);
        this.isLoading = false;
        formData.resetForm();
      },
      error: (err) => {
        if(err.error.status == "error"){
          alert(err.error.message);
        }else{
          alert("Something went wrong");
        }
        this.isLoading = false;
      }
    });
  }




}
