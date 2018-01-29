import { Component } from '@angular/core';

/**
 * Generated class for the CardWithLandscapeImageScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-landscape-image-scroll',
  templateUrl: 'card-with-landscape-image-scroll.html'
})
export class CardWithLandscapeImageScrollComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithLandscapeImageScrollComponent Component');
    this.text = 'Hello World';
  }

}
