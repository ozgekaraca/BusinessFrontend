import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EmployeeCardComponent } from './admin/employees/employees.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'navbar', component: NavbarComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'about', component: AboutComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'footer', component: FooterComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  {path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'employeecard', component: EmployeeCardComponent },
  { path: 'categoriescard', component: EmployeeCardComponent },
  {path:'myprofile', component:MyprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
