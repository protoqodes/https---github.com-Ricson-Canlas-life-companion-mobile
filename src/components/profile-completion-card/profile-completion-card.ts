import { Component } from '@angular/core';

/**
 * Generated class for the ProfileCompletionCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-completion-card',
  templateUrl: 'profile-completion-card.html'
})
export class ProfileCompletionCardComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileCompletionCardComponent Component');
    this.text = 'Hello World';
  }

}
