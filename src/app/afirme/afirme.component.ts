import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './afirme-menu';

@Component({
  selector: 'ngx-afirme',
  styleUrls: ['afirme.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class AfirmeComponent implements OnInit {

  menu = MENU_ITEMS;

  ngOnInit() {
    if (window['dataLayer']) {
      window['dataLayer'].push({'event': 'optimize.activate'});
    }
  }
}
