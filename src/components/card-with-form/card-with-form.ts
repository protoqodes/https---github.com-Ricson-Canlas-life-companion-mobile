import { Component } from '@angular/core';

/**
 * Generated class for the CardWithFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-form',
  templateUrl: 'card-with-form.html'
})
export class CardWithFormComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithFormComponent Component');
    this.text = 'Hello World';
  }

}
