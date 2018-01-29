import { Component } from '@angular/core';

/**
 * Generated class for the CardWithQuotesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-quotes',
  templateUrl: 'card-with-quotes.html'
})
export class CardWithQuotesComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithQuotesComponent Component');
    this.text = 'Hello World';
  }

}
