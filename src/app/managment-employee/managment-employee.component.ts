import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../service/rest/EmployeeService';
import { EmployeeRs } from '../models/EmployeeRs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationEnum } from '../models/NotificationEnum';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-managment-employee',
  templateUrl: './managment-employee.component.html',
  styleUrls: ['./managment-employee.component.css']
})
export class ManagmentEmployeeComponent implements AfterViewInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<EmployeeRs>();
  displayedColumns: string[] = ['ID', 'NOMBRE', 'EDAD', 'SALARIO', 'SALARIO_ANUAL'];
  _snackBar = inject(MatSnackBar);
  employeeId: number = 0;


  constructor(public employeeService: EmployeeService) {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      element => {
        if (element.data != null) {
          this.dataSource.data =  element.data;
        }
      }, (error: HttpErrorResponse) => {
        this.handleErrorHttp(error);
      }
    );
  }

  getEmployeeById() {
    this.employeeService.getEmployee(this.employeeId).subscribe(element => {
      if (element.data != null) {
        this.dataSource.data = [element.data];
      }
    }, (error: HttpErrorResponse) => {
      this.handleErrorHttp(error);
    });
  }

  getEmployee(){
    if(this.employeeId == null){
        this.getEmployees();
        return;
    }
    this.getEmployeeById();
  }

  handleErrorHttp(error: HttpErrorResponse){
    if(error.status==500){
      this._snackBar.open(error.error.notifications[NotificationEnum.ERROR_SYSTEM],'Cerrar', { duration: 5000, panelClass: ['mat-warn']});
       return;
    } 
    this._snackBar.open(error.error.notifications[NotificationEnum.ERROR_NEGOCIO],'Cerrar', { duration: 5000, panelClass: ['mat-warn']});
  }

}
