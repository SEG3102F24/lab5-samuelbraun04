import { Routes } from '@angular/router';
import { EmployeeEntryComponent } from './components/employee-entry/employee-entry.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employee-entry', pathMatch: 'full' },
  { path: 'employee-entry', component: EmployeeEntryComponent },
  { path: 'employee-list', component: EmployeeListComponent },
];
