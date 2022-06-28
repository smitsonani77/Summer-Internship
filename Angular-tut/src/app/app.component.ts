import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-tut';
  // data send from parent to child

  // userLoggedIn = false

  // users = {
  //   'name' : 'smit',
  //   'age':20,
  //   'address':'surat'
  // }
  // users = [
  //   {
  //     name : 'smit',
  //     age:20,
  //     address:'surat'
  //   },
  //   {
  //     name : 'yash',
  //     age:22,
  //     address:'nadiad'
  //   },
  //   {
  //     name : 'vinay',
  //     age:19,
  //     address:'noida'
  //   },
  //   {
  //     name : 'raj',
  //     age:24,
  //     address:'anand'
  //   }
  // ];



    // data send from child to parent
    // name:any
    // age:any
    // parentFunction(data:any){
    //   // console.warn(`${data.name} and ${data.age}`)
    //   this.name = data.name
    //   this.age = data.age
    // }

    color = '';
}


