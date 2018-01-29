import { Component } from '@angular/core';

/**
 * Generated class for the CardWithTestimonialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-with-testimonial',
  templateUrl: 'card-with-testimonial.html'
})
export class CardWithTestimonialComponent {

  text: string;

  constructor() {
    console.log('Hello CardWithTestimonialComponent Component');
    this.text = 'Hello World';
  }

}
