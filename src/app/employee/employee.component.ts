import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: object;
  constructor() {

   }

  ngOnInit() {
    this.employee = [{Id: 1, Name: 'harsh', Salary: 1000, Department: 'ML'},
    {Id: 2, Name: 'Abhishek', Salary: 2000, Department: 'AI'},
    {Id: 3, Name: 'Harshal', Salary: 1000, Department: 'DevOps'},
    {Id: 4, Name: 'Shubham', Salary: 2000, Department: 'AI'},
    {Id: 5, Name: 'Mohit', Salary: 1000, Department: 'ML'}];

  }

}
