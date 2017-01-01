import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform{
    transform(collection: any[], status: string){
        if(!collection){
            return null;
        }

        return collection.filter(c => c.status === status);
    }
}