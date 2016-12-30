import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() users: any[];
    @Input() searchPattern: string;
    @Input() parameters: string[];
    @Input() sortType;
    @Input() sortOrder;

    ngOnInit() {
    }

}
