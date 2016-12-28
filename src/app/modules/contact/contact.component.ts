import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
