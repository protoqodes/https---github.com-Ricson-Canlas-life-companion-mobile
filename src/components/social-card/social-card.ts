import { Component } from '@angular/core';

/**
 * Generated class for the SocialCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'social-card',
  templateUrl: 'social-card.html'
})
export class SocialCardComponent {

  text: string;

  constructor() {
    console.log('Hello SocialCardComponent Component');
    this.text = 'Hello World';
  }

}
