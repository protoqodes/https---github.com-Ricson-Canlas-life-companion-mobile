import { Component } from '@angular/core';

/**
 * Generated class for the ArticleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'article',
  templateUrl: 'article.html'
})
export class ArticleComponent {

  text: string;

  constructor() {
    console.log('Hello ArticleComponent Component');
    this.text = 'Hello World';
  }

}
