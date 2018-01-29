import { Component } from '@angular/core';

/**
 * Generated class for the ToolsScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tools-scroll',
  templateUrl: 'tools-scroll.html'
})
export class ToolsScrollComponent {

  text: string;

  constructor() {
    console.log('Hello ToolsScrollComponent Component');
    this.text = 'Hello World';
  }

}
