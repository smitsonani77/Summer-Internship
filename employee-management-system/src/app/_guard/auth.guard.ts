import { Injectable } from '@angular/core';
import {  ActivatedRoute, CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){
  }
 
  canActivate(): boolean{
     
    if (this.auth.isLoggedIn()) {
      return true
    }
    else{
      this.router.navigate(['login'])
      window.alert(`Please Login first`)
      return false
    }

    // window.alert('You don\'t have permission to view this page');
    // this.router.navigate([''])
    //   .then(() => {
    //     window.location.reload();
    //   });
    // return true; 
  }
  
}


// After login 
@Injectable({
  providedIn:'root'
})
export class LoggedInAuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){
  }
  canActivate():boolean{
    if(this.authService.isLoggedIn()){
      // window.alert(`You already logged in`)
      console.warn(`You already logged in`)
      this.router.navigate(['/dashboard'])
      return false
    }
    return true
  } 
  
}