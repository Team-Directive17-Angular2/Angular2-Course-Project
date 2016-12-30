import { NgModule } from '@angular/core';

import { DefaultImageDirective } from './default-image-backup.directive';

@NgModule({
    imports: [],
    declarations: [
        DefaultImageDirective,
    ],
    providers: [],
    exports: [ DefaultImageDirective ]
})
export class DirectivesModule { }
