import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FollowListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() followList: any[];

    ngOnInit() {
    }

}
