import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortPipe } from './sort.pipe'
@NgModule({
    imports: [BrowserModule],
    declarations: [SortPipe],
    exports: [SortPipe]
})
export class SortPipeModule { }