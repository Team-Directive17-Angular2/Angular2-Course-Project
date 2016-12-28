import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination';

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
        FormsModule,
        Ng2PaginationModule
    ]
})
export class UsersModule { }
