import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employeeTask } from 'src/app/model/employee_';
import { CrudService } from 'src/app/service/crud.service';
import { CustomValidator } from 'src/app/validators/custom-validator';
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
      fullname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidator.patternValidator(/[a-z]/,{hasSmallCase:true}),
        CustomValidator.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{hasSpecialCharacters:true})
      ])],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-zA-Z0-9]{1,4}$")]],
      password: [null, Validators.compose([
        Validators.required,
        CustomValidator.patternValidator(/\d/, { hasNumber: true }),
        CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidator.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{ hasSpecialCharacters: true }),
        Validators.minLength(8)
      ])],
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
