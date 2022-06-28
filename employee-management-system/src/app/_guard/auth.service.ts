import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // isLoggedIn(): boolean {
  //   if (sessionStorage.getItem("id")) {
  //     return true;
  //   }
  //   return false;
  // }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
 
}
