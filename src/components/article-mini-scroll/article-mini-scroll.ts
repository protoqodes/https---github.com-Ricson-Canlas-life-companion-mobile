import { Component } from '@angular/core';

/**
 * Generated class for the ArticleMiniScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'article-mini-scroll',
  templateUrl: 'article-mini-scroll.html'
})
export class ArticleMiniScrollComponent {

  text: string;

  constructor() {
    console.log('Hello ArticleMiniScrollComponent Component');
    this.text = 'Hello World';
  }

}
