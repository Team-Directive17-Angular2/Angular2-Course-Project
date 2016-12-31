import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterGenrePipe } from './filter-genre.pipe'
@NgModule({
    imports: [BrowserModule],
    declarations: [FilterGenrePipe],
    exports: [FilterGenrePipe]
})
export class FilterGenrePipeModule { }