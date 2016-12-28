import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(collection: any[], sortType: string, sortOrder: string) {
        if (!collection) {
            return null;
        }

        console.log(sortType);
        console.log(sortOrder);
        sortType = sortType.replace(/^./, (m) => { return m.toLowerCase(); }).replace(/\s/, "");
        sortOrder = sortOrder.toLowerCase();
        let order = sortOrder === 'descending' ? -1 : 1;

        return collection.sort((x, y) => {
            let result;

            result = x[sortType].localeCompare(y[sortType]);

            return result * order;
        });
    }
}