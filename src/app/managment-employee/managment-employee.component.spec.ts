import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentEmployeeComponent } from './managment-employee.component';

describe('ManagmentEmployeeComponent', () => {
  let component: ManagmentEmployeeComponent;
  let fixture: ComponentFixture<ManagmentEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagmentEmployeeComponent]
    });
    fixture = TestBed.createComponent(ManagmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
