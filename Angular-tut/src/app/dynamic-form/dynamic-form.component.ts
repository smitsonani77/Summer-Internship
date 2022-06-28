import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})

export class DynamicFormComponent implements OnInit {
  productForm:FormGroup;
  
  constructor(private fb:FormBuilder) { 
    this.productForm = this.fb.group({
      name:'',
      quantities:this.fb.array([])
    })
  }

  quantities():FormArray{
    return this.productForm.get('quantities') as FormArray
  }

   newQuantities():FormGroup{
    return this.fb.group({
      qty:'',
      price:''
    })
  }

  addQuantity(){
    this.quantities().push(this.newQuantities())
  }
  
  removeQuantity(i:number){
    this.quantities().removeAt(i)
  }

  onSubmit(){
    console.log(this.productForm.value)
  }

  ngOnInit(): void {
  } 
}



