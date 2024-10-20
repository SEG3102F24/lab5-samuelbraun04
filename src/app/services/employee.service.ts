import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesCollection;

  constructor(private firestore: Firestore) {
    this.employeesCollection = collection(this.firestore, 'employees');
  }

  addEmployee(employee: Employee): Promise<any> {
    return addDoc(this.employeesCollection, employee);
  }

  getEmployees(): Observable<Employee[]> {
    return collectionData(this.employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
  }
}
