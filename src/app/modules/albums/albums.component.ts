import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
