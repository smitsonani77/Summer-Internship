import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  // interpolation
  title = 'Interpolation';

  // property binding
  imageURL = 'assets/motorola.png';

  // event binding
  count = 0;

  incrementCount() {
    this.count += 1;
  }

  // two way binding
  name: string = "";
  userName: string = "";
  arr = ["smit","veet","yash","vraj","bhautik","priya"];

  updateValue(userName: string): void {
    this.userName = userName;
    const idx = this.arr.indexOf(userName)
    
    if (idx >= 0 && idx <this.arr.length)
        alert(`Hello ${this.arr[idx]}`)

  }

  // getters and setters

  private _customerName:string=""

  
  public get customerName() : string {
    return this._customerName
  }

  public set customerName(value : string) {
    this._customerName = value;
    const idx = this.arr.indexOf(this._customerName)
    
    if (idx >= 0 && idx <this.arr.length)
        alert(`Hello ${this.arr[idx]}`)
  }
  
  // viewChild()
  @ViewChild('nameRef') nameElementRef:ElementRef | undefined

   ngAfterViewInit(){
     this.nameElementRef?.nativeElement.focus()
     console.log(this.nameElementRef)
   }

  constructor() {}

  ngOnInit(): void {}
}
