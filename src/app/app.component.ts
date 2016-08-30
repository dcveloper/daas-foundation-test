/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation,  ViewContainerRef } from '@angular/core';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';


import * from './asset/js/init';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
   directives: [MODAL_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'   
  ],  
  templateUrl: './app.template.html'
})
export class App   {
  now: "Hello World!";
  name = 'Home Page';
 
  constructor(public viewContainerRef:ViewContainerRef) {
    viewContainerRef = viewContainerRef;
  }

  ngOnInit() {  

  }

 

}
