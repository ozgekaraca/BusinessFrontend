import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EmployeeCardComponent } from './employees/employees.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminContentComponent,
    CategoriesComponent,
    EmployeeCardComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
