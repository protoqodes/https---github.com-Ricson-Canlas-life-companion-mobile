import { Component } from '@angular/core';

/**
 * Generated class for the CardWithOpinionPollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-opinion-poll',
  templateUrl: 'card-with-opinion-poll.html'
})
export class CardWithOpinionPollComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithOpinionPollComponent Component');
    this.text = 'Hello World';
  }

}
