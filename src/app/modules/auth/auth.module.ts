import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from '../../config/routes';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from '../../services/authentication.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  providers: [
      AuthenticationService,
      NotificationsService
  ]
})
export class AuthModule { }