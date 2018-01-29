import { Component } from '@angular/core';

/**
 * Generated class for the CardWithLandscapeImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-landscape-image',
  templateUrl: 'card-with-landscape-image.html'
})
export class CardWithLandscapeImageComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithLandscapeImageComponent Component');
    this.text = 'Hello World';
  }

}
