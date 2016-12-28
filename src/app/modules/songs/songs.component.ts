import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SongsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
