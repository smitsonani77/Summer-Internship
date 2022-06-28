import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employeeTask } from 'src/app/model/employee_';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  obj:employeeTask = new employeeTask()

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private curdService:CrudService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname: ['', [Validators.required,Validators.minLength(4),Validators.pattern("[A-Za-z]*")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required,Validators.pattern("[0-9]{10}")]],
    });
  }

  signUp() {
    this.curdService.signUp(this.signUpForm.value)
    .subscribe(
      (res) => {
        alert('Sign Up successfully');
        this.signUpForm.reset();
        this.router.navigate(['login']);
      },
      (err) => {
        alert('Something went wrong');
      }
      );
      // this.obj = this.signUpForm.value
      // console.log(this.obj)
  }

  get f() {
    return this.signUpForm.controls;
  }
}
