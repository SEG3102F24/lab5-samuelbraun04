import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }
}
