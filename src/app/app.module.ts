import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { appRoutes } from './config/routes';

import { AppComponent } from './app.component';

//  Pages
import {HomeComponent} from './components/home.component/home.component';
import {LoginComponent} from './components/login.component/login.component';
import {NavComponent} from './components/app-nav.component/app-nav.component';
import { RegisterComponent } from './components/register.component/register.component';
import { ProfileComponent } from './components/profile.component/profile.component';
import { LogoutComponent } from './components/logout.component/logout.component';
//  Services
import {AuthenticationService} from './services/authentication.service'
import { UserService } from './services/user.service';
//import {UserService} from './services/user.service';
import {GlobalEventsManager} from './services/globalEventsManager'
//  Guards
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NavComponent,
    RegisterComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthenticationService,
    AuthGuard,
    GlobalEventsManager,
    UserService
  ]
})
export class AppModule { }