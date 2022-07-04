import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employeeTask } from 'src/app/model/employee_';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  taskObj: employeeTask = new employeeTask();
  taskArr: employeeTask[] = []; // to show the data in table
  submitted = false; // form is submitted or not

  //filter 
  term: string;
  // firstName:any

  // Search(){
  //   if(this.firstName = "")
  //     return this.ngOnInit()
  //   else 
  //   {
  //       this.taskArr = this.taskArr.filter(
  //         res => {
  //           return res.fname.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
  //         }
  //       )
  //   }
  // } 

  constructor(private fb: FormBuilder, private curdSurvice: CrudService) {
  }


  ngOnInit(): void {
    // this.taskObj = new Task();
    this.taskArr = [];

    this.getAllEmployee();

    // console.warn("user id is ",this.route.snapshot.paramMap.get('id'))

    this.employeeForm = this.fb.group({
      emp_id: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ],
      ],
      fname: ['', Validators.required],
      lname:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }


  get f() {
    return this.employeeForm.controls;
  }


  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.employeeForm.invalid) 
        return;

      // display form values on success
      alert(
        'SUCCESS!! :-)\n\n' + JSON.stringify(this.employeeForm.value, null, 4)
      )
  }

  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
  }
  
  getAllEmployee() {
    this.curdSurvice.getAllTask().subscribe(
      (res) => {
        this.taskArr = res;
      },
      (err) => {
        alert('Unable to get list of tasks' + err);
      }
    );
  }

  addEmployee() {
    this.curdSurvice.addTask(this.employeeForm.value).subscribe(
      (res) => {
        
        this.employeeForm.reset();

        // to display all the data
        // this.ngOnInit()
        this.getAllEmployee();

        console.log(res);
        // alert(`employee added successfully`)
      },
      (err) => {
        alert('Unable to add new task' + err);
      }
  );
}

  editEmployee(row: employeeTask) {
    this.taskObj.id = row.id;
    this.employeeForm.controls['emp_id'].setValue(row.emp_id);
    this.employeeForm.controls['fname'].setValue(row.fname);
    this.employeeForm.controls['lname'].setValue(row.lname)
    this.employeeForm.controls['email'].setValue(row.email);
    this.employeeForm.controls['salary'].setValue(row.salary);
  }

  updateEmployee() {
    this.taskObj.emp_id = this.employeeForm.value.emp_id;
    this.taskObj.fname = this.employeeForm.value.fname;
    this.taskObj.lname = this.employeeForm.value.lname;
    this.taskObj.email = this.employeeForm.value.email;
    this.taskObj.salary = this.employeeForm.value.salary;

    this.curdSurvice.editTask(this.taskObj, this.taskObj.id).subscribe(
      (res) => {
        // this.ngOnInit()
        this.employeeForm.reset();
        this.getAllEmployee();
        alert(`Update successfully`);
      },
      (err) => {
        alert(`Unable to update the employee details` + err);
      }
    );
  }

  deleteEmployee(row: employeeTask) {
    // this.curdSurvice.deleteTask(this.taskObj).subscribe(
    //   (res) => {
    //     alert('Employee is deleted')
    //     // this.ngOnInit()
    //     this.getAllEmployee()
    //   },
    //   (err) => {
    //     alert("Failed to delete task");
    //   }
    // )

    this.curdSurvice.deleteEmployee(row.id).subscribe(
      (res) => {
        // alert('Employee is deleted');
        //     // this.ngOnInit()
        this.getAllEmployee();
      },
      (err) => {
        alert('Failed to delete task' + err);
      }
    );
  }

  clearALL() {
    for (let emp of this.taskArr) {
      this.deleteEmployee(emp);
    }
  }

  
  // logout

  logout(){
    // window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
  }
  
} 
