import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  // form: FormGroup; 
  // comment = new FormControl("", Validators.required); 
  // name = new FormControl("", Validators.required); 
  // email = new FormControl("", [ 
  //   Validators.required,
  //   Validators.pattern("[^ @]*@[^ @]*")
  // ]);

  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({ 
  //     "comment": this.comment,
  //     "name": this.name,
  //     "email": this.email
  //   });
  // }
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)])
  });
  
  
  get firstName(){
    return this.profileForm.get('firstName')
  }

  get lastName(){
    return this.profileForm.get('lastName')
  }

  get email(){
    return this.profileForm.get('email')
  }

  get password(){
    return this.profileForm.get('password')
  }
  // name = new FormControl()
  // updateName(){
  //   this.name.setValue('Smit')
  // }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log("Form submitted!");
    console.warn(this.profileForm.value)
    this.profileForm.updateValueAndValidity()
  } 
}
