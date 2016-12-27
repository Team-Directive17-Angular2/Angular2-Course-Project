//import { pages } from './../pages/index';
import { Routes } from '@angular/router';
import {HomeComponent} from '../components/home.component/home.component';
import {LoginComponent} from '../components/login.component/login.component';
import { RegisterComponent } from '../components/register.component/register.component';
import { LogoutComponent } from '../components/logout.component/logout.component';
import { ProfileComponent } from '../components/profile.component/profile.component';
import {AuthGuard} from '../guards/auth.guard';
export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'profile/:name', component:ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }

];