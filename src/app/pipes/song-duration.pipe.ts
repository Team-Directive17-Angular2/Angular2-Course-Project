import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'songDuration'
})
export class SongDurationPipe implements PipeTransform{
    transform(duration: string){
        if(!duration){
            return null;
        }

        let time = Number(duration);

        duration = "" + Math.floor(time / 60) + ":";

        duration += time % 60 < 10 ? "0" + time % 60 : time % 60;

        return duration;
    }
}