import { Routes } from '@angular/router';
import {HomeComponent} from '../modules/home/home.component';
import {LoginComponent} from '../modules/auth/login/login.component';
import { RegisterComponent } from '../modules/auth/register/register.component';
import { LogoutComponent } from '../modules/auth/logout/logout.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { ContactComponent } from '../modules/contact/contact.component';
import { ArtistsComponent } from '../modules/artists/all-artists/artists.component';
import { DetailedArtistComponent } from '../modules/artists/detailed-artist/detailed-artist.component';
import { AlbumsComponent } from '../modules/albums/all-albums/albums.component';
import { DetailedAlbumComponent } from '../modules/albums/detailed-album/detailed-album.component';
import { SongsComponent } from '../modules/songs/all-songs/songs.component';
import { UsersComponent } from '../modules/users/all-users/users.component';
import { DetailedUserComponent } from '../modules/users/detailed-user/detailed-user.component';
import { AddArtistComponent } from '../modules/admin/addArtist/addArtist.component';
import { AddAlbumComponent } from '../modules/admin/addAlbum/addAlbum.component';
import { AddSongComponent  } from '../modules/admin/addSong/addSong.component';
import { UpdateRoleComponent } from '../modules/admin/updateUserRole/update-role.component'
import { MessagesComponent } from '../modules/messages/all-messages/messages.component';

import {AuthGuard} from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'artists', component: ArtistsComponent },
    { path: 'artists/:id', component: DetailedArtistComponent, canActivate: [AuthGuard] },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:id', component: DetailedAlbumComponent, canActivate: [AuthGuard] },
    { path: 'songs', component: SongsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:username', component: DetailedUserComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard] },
    { path: 'admin/add-artist', component:AddArtistComponent, canActivate:[AuthGuard,AdminGuard]},
    { path: 'admin/add-album', component:AddAlbumComponent, canActivate:[AuthGuard,AdminGuard]},
    { path: 'admin/add-song', component:AddSongComponent, canActivate:[AuthGuard,AdminGuard]},
    { path: 'admin/update-user-role', component:UpdateRoleComponent, canActivate:[AuthGuard,AdminGuard]},
    { path: 'admin/messages', component:MessagesComponent, canActivate:[AuthGuard,AdminGuard]},

    { path: '**', redirectTo: '' }

];