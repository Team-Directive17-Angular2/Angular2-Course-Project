import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../animations/router.animations';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class ErrorComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}