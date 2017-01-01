import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterStatusPipe } from './filter-status.pipe'
@NgModule({
    imports: [BrowserModule],
    declarations: [FilterStatusPipe],
    exports: [FilterStatusPipe]
})
export class FilterStatusPipeModule { }