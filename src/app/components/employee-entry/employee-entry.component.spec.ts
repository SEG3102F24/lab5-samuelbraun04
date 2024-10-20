import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEntryComponent } from './employee-entry.component';

describe('EmployeeEntryComponent', () => {
  let component: EmployeeEntryComponent;
  let fixture: ComponentFixture<EmployeeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
