import { Component } from '@angular/core';

/**
 * Generated class for the ToolCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tool-card',
  templateUrl: 'tool-card.html'
})
export class ToolCardComponent {

  text: string;

  constructor() {
    console.log('Hello ToolCardComponent Component');
    this.text = 'Hello World';
  }

}
