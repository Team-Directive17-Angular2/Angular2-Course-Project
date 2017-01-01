import { Component, ViewEncapsulation, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() messages: any[];
    @Input() status: string;
    @Input() searchPattern: string;
    @Input() parameters: string[];
    @Input() sortType;
    @Input() sortOrder;

    ngOnInit() {

    }
}