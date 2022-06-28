import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  service_URL  = 'http://localhost:3000/tasks'
  constructor(private http:HttpClient) { }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.service_URL,task)
  }

  getAllTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.service_URL)
}

  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.service_URL + '/' + task.id)
  }

  editTask(task:Task):Observable<Task>{
    return this.http.put<Task>(this.service_URL + '/' + task.id,task)
  }
}
