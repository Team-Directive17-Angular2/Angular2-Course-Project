import { Routes } from '@angular/router';
import {HomeComponent} from '../modules/home/home.component';
import {LoginComponent} from '../modules/auth/login/login.component';
import { RegisterComponent } from '../modules/auth/register/register.component';
import { LogoutComponent } from '../modules/auth/logout/logout.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import {AuthGuard} from '../guards/auth.guard';
export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'profile/:name', component:ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }

];