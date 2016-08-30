/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss',
    './scss/app.scss',
    './scss/demo.scss',
    './scss/master.scss',
    './scss/icomoon.scss',
  ],  
  templateUrl: './app.template.html'
})
export class App {
 
  name = 'Home Page';
 
  constructor() {
  }

  ngOnInit() {
   
  }

}
