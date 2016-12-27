import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { appRoutes } from './config/routes';
import { HomeModule } from './modules/home/home.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationModule } from './modules/navigation/app-nav.module';
import { ProfileModule } from './modules/profile/profile.module';

import { AppComponent } from './app.component';
import {NavComponent} from './modules/navigation/app-nav.component';

//  Services
import {AuthenticationService} from './services/authentication.service'
import { UserService } from './services/user.service';
import {GlobalEventsManager} from './services/globalEventsManager'
//  Guards
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HomeModule,
    AuthModule,
    NavigationModule,
    ProfileModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    NavComponent
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