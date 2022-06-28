import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { employeeTask } from '../model/employee_';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  service_URL = "http://localhost:3000/employee"

  constructor(private http : HttpClient) {
   }

   getAllTask():Observable<employeeTask[]>{
      return this.http.get<employeeTask[]>(this.service_URL)
   }

   addTask(task:employeeTask):Observable<employeeTask>{
    return this.http.post<employeeTask>(this.service_URL,task)
   }

   editTask(task:employeeTask,id:number):Observable<employeeTask>{
      return this.http.put<employeeTask>(this.service_URL + '/' + task.id,task)
   }

   deleteTask(task:employeeTask):Observable<employeeTask>{
      return this.http.delete<employeeTask>(this.service_URL + '/' + task.id)
   }

   login():Observable<employeeTask[]>{
      return this.http.get<employeeTask[]>("http://localhost:3000/signUpEmployee")
   }

   signUp(task:employeeTask):Observable<employeeTask[]>{
      return this.http.post<employeeTask[]>('http://localhost:3000/signUpEmployee',task)
   }




   // using pipes
   postEmployee(data : any){
      return this.http.post<any>(this.service_URL,data)
      .pipe(map(
         (res:any) => {
            return res
         }
      ))
   }

   getEmployee(){
      this.http.get<any>(this.service_URL)
      .pipe(map(
         (res:any) => {
            return res
         }
      ))
   }

   updateEmployee(data:any,id:number){
      return this.http.put(this.service_URL + '/' + id,data)
      .pipe(map(
         (res:any) => {
            return res
         }
      ))
   }


   deleteEmployee(id:number){
      return this.http.delete(this.service_URL + '/' + id)
      .pipe(map(
         (res:any) => {
            return res
         }
      ))
   }


}
