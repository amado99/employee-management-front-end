import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { EmployeeRs } from "src/app/models/EmployeeRs";
import { GenericResponse } from "src/app/models/GenericResponse";
import { NotificationEnum } from "src/app/models/NotificationEnum";

@Injectable({providedIn: "root"})
export class EmployeeService{

    private employeesUrl = "http://localhost:8080/api/v1/employees"; 
  
    constructor(private http: HttpClient) {}
  
    public getEmployees(): Observable<GenericResponse<EmployeeRs[]>> {
      const headersSend = new HttpHeaders().set("request-id", crypto.randomUUID());
      return this.http.get<GenericResponse<EmployeeRs[]>>(this.employeesUrl,{
        headers:headersSend
      });
    }

    public getEmployee(employeeId:number): Observable<GenericResponse<EmployeeRs>> {
      const headersSend = new HttpHeaders().set("request-id", crypto.randomUUID());
       headersSend.append("request-id",crypto.randomUUID());
        return this.http.get<GenericResponse<EmployeeRs>>(this.employeesUrl+"/"+employeeId,{
          headers:headersSend
        });
    }


}



  