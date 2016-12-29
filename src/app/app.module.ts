import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HomeModule } from './modules/home/home.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationModule } from './modules/navigation/app-nav.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ContactModule } from './modules/contact/contact.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { SongsModule } from './modules/songs/songs.module';
import { UsersModule } from './modules/users/users.module';
import { appRoutes } from './config/routes';
import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import {NavComponent} from './modules/navigation/app-nav.component';
import {FooterComponent} from './modules/footer/app-footer.component';
import { DefaultImageDirective } from './directives/default-image-backup.directive';

//  Services
import {AuthenticationService} from './services/authentication.service'
import { UserService } from './services/user.service';
import {GlobalEventsManager} from './services/globalEventsManager'
import { IsAdminEventsManager } from './services/isAdminEventManager';
//  Guards
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HomeModule,
    AuthModule,
    NavigationModule,
    ProfileModule,
    ContactModule,
    ArtistsModule,
    AlbumsModule,
    SongsModule,
    UsersModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DefaultImageDirective
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthenticationService,
    AuthGuard,
    AdminGuard,
    GlobalEventsManager,
    IsAdminEventsManager,
    UserService
  ]
})
export class AppModule { }