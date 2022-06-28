import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';
  addTaskDesc:string = ''
  editTaskValue : string = '';
  editTaskDesc:string = ''
  

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.addTaskDesc = ''
    this.editTaskDesc = ''
    this.taskObj = new Task();
    this.taskArr = [];

    this.getAllTask();
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

  addTask() {
    // console.warn(this.taskArr.value)
    this.taskObj.task_name = this.addTaskValue
    this.taskObj.task_desc = this.addTaskDesc

    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit()
      this.addTaskValue = '';
      this.addTaskDesc = ''

    }, err => {
      alert('Unable to add new task');
    })
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.taskObj.task_desc = this.editTaskDesc

    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }

  deleteTask(task : Task) {
    this.crudService.deleteTask(task).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }

  call(task : Task) {
    this.taskObj = task;
    this.editTaskValue = task.task_name;
    this.editTaskDesc = task.task_desc
  }

  clearAll(){
    for(let task of this.taskArr) {
      this.deleteTask(task);
    }
  }

}