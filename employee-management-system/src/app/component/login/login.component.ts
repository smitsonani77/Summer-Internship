import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  constructor(private fb:FormBuilder,private router:Router,private curdService:CrudService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
      });
  }

  login(){
      this.curdService.login()
      .subscribe(
        res => {

            // replace any with perticuler type
            const user = res.find((a:any) => {
              return (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password);
            });

            if(user){
              alert('Login Success')
              this.loginForm.reset()
              this.router.navigate(['dashboard'])
            }
            else{
              alert('Invalid email or Password')
            }
        },
        err =>
        { 
            alert('Something went Wrong')
        }
      )

      
      if(this.loginForm.valid){
        localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o")  
        // this.loginForm.value.email = "smit.sonani@gmail.com" ? localStorage.setItem('userType','smit') : localStorage.setItem('userType','admin')
      }
  }

  get f(){
    return this.loginForm.controls;
  }

}
