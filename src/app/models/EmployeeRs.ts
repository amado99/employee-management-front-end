export class EmployeeRs {
    
    readonly employeeId: number;
    readonly employeeName: string;
    readonly employeeSalary: number;
    readonly employeeAge: number;
    readonly profileImage: string;
    readonly employeeSalaryAnnual: number;
  
    constructor(
      employeeId: number,
      employeeName: string,
      employeeSalary: number,
      employeeAge: number,
      profileImage: string,
      employeeSalaryAnnual: number
    ) {
      this.employeeId = employeeId;
      this.employeeName = employeeName;
      this.employeeSalary = employeeSalary;
      this.employeeAge = employeeAge;
      this.profileImage = profileImage;
      this.employeeSalaryAnnual = employeeSalaryAnnual;
    }
  }
  