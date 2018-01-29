import { Component } from '@angular/core';

/**
 * Generated class for the CardWithPotraitImageScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-potrait-image-scroll',
  templateUrl: 'card-with-potrait-image-scroll.html'
})
export class CardWithPotraitImageScrollComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithPotraitImageScrollComponent Component');
    this.text = 'Hello World';
  }

}
