import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileContentComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ]
})
export class ProfileModule { }
