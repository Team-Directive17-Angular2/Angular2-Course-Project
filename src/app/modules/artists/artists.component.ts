import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ArtistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
