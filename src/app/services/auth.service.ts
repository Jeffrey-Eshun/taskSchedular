import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://donzytodo.pythonanywhere.com/auth';

  user = new BehaviorSubject<any>(null);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  user$ = this.user.asObservable();
  isLoggedIn$ = this.isLoggedIn.asObservable();


  signin(data:any){
    return this.http.post(`${this.apiUrl}/signin/`, data, {
      withCredentials:true
    }).pipe(
      tap(()=>{
        this.isLoggedIn.next(true);
      })
    )
  }

  getUser(){
    return this.http.get(`${this.apiUrl}/get_user/`, {
      withCredentials:true
    }).pipe(
      tap((user:any)=>{
        this.user.next(user);
      })
    )
  }

  logOut(){
    return this.http.get(`${this.apiUrl}/logout/`, {
      withCredentials:true
      }).pipe(
        tap(()=>{
          this.user.next(null);
          this.isLoggedIn.next(false);
        })
      )
  }


}
