import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagmentEmployeeComponent } from './managment-employee/managment-employee.component';

const routes: Routes = [
  { path: '', component: ManagmentEmployeeComponent },
  { path: 'employee', component: ManagmentEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
