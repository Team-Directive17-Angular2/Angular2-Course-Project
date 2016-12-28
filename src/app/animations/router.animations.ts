import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'initial', width:'100%', height: '100%'}) ),
    state('*', style({position:'initial', width:'100%', height: '100%'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({position: 'fixed', display: 'inline-block', height: '100%', transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({position:'fixed', display: 'inline-block', height: '100%', transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ]),
  ]);
}