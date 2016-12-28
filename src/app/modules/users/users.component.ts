import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
