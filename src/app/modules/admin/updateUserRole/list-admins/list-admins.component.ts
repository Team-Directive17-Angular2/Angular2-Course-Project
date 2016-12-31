import { Component, ViewEncapsulation, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-list',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminsListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() admins: any[];
    @Output() removedFromAdmins = new EventEmitter<any>();

    ngOnInit() {

    }

    removeFromAdmins(username:String){
      let removed = this.admins.find(x => x.username == username);
      this.removedFromAdmins.emit(removed);
    }

}