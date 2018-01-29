import { Component } from '@angular/core';

/**
 * Generated class for the ArticleScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'article-scroll',
  templateUrl: 'article-scroll.html'
})
export class ArticleScrollComponent {

  text: string;

  constructor() {
    console.log('Hello ArticleScrollComponent Component');
    this.text = 'Hello World';
  }

}
