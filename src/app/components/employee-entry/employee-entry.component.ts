import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class EmployeeEntryComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
  };

  constructor(private employeeService: EmployeeService) {}

  saveEmployee() {
    this.employeeService
      .addEmployee(this.employee)
      .then(() => {
        console.log('Employee saved');
        // Reset the form
        this.employee = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
        };
      })
      .catch((error) => console.error('Error saving employee:', error));
  }
}
