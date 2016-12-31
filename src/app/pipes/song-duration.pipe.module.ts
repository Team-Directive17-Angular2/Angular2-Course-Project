import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SongDurationPipe } from './song-duration.pipe'
@NgModule({
    imports: [BrowserModule],
    declarations: [SongDurationPipe],
    exports: [SongDurationPipe]
})
export class SongDurationPipeModule { }