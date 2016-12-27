import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';

import { UserService } from '../../services/user.service';

@NgModule({
   declarations: [
        ProfileComponent
    ],
  imports: [CommonModule],
  exports: [],
  providers: []
})
export class ProfileModule { }