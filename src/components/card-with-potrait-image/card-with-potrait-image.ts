import { Component } from '@angular/core';

/**
 * Generated class for the CardWithPotraitImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-potrait-image',
  templateUrl: 'card-with-potrait-image.html'
})
export class CardWithPotraitImageComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithPotraitImageComponent Component');
    this.text = 'Hello World';
  }

}
