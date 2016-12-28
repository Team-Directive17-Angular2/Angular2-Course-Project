import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(collection: any[], parameters: any[], searchWord:string){
        if(!collection){
            return null;
        }

        searchWord = searchWord.toLowerCase();
            return collection.filter(element => {
                let isFound = false;
                for (let parameter of parameters) {
                    if(element[parameter].toLowerCase().indexOf(searchWord) >= 0) {
                        isFound = true;
                        break;
                    }
                }
                return isFound;
            });
    }
}