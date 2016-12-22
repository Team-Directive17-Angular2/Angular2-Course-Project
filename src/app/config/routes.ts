//import { pages } from './../pages/index';
import { Routes } from '@angular/router';
import {HomeComponent} from '../components/home.component/home.component';
import {LoginComponent} from '../components/login.component/login.component';
import { RegisterComponent } from '../components/register.component/register.component'
import {AuthGuard} from '../guards/auth.guard';
export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: '' }
    
];