import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../config/routes';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        HomeComponent
    ],
    exports: [],
    providers: []
})
export class HomeModule { }