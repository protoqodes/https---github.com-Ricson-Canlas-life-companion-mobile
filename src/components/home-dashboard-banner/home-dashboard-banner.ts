import { Component } from '@angular/core';

/**
 * Generated class for the HomeDashboardBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-dashboard-banner',
  templateUrl: 'home-dashboard-banner.html'
})
export class HomeDashboardBannerComponent {

  text: string;

  constructor() {
    console.log('Hello HomeDashboardBannerComponent Component');
    this.text = 'Hello World';
  }

}
