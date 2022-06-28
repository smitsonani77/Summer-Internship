import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   @Input() loggedIn :boolean | undefined;
  
  //  parent to child
  @Input() hero: any;
  constructor() { }

  ngOnInit(): void {
    // console.warn(this.hero)
  }



  // child to parent
  @Output() parentFunction:EventEmitter<any> = new EventEmitter()
  sendData(){
    let data = {
      name : 'smit',
      age : 20
    }
    this.parentFunction.emit(data)
  }

}
