import { Component } from '@angular/core';

/**
 * Generated class for the CardWithVideoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-video',
  templateUrl: 'card-with-video.html'
})
export class CardWithVideoComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithVideoComponent Component');
    this.text = 'Hello World';
  }

}
