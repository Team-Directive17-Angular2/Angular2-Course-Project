import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { SearchPipe, SortPipe } from '../../pipes';

@NgModule({
    declarations: [
        UsersComponent,
        SearchPipe,
        SortPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UsersModule { }
