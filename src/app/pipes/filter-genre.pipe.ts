import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterGenre'
})
export class FilterGenrePipe implements PipeTransform{
    transform(collection: any[], genre: string){
        if(!collection){
            return null;
        }

        if(!genre || genre === 'All'){
            return collection;
        }

        return collection.filter(c => c.genres.includes(genre));
    }
}