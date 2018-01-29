import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ChooseinteresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chooseintereset',
  templateUrl: 'chooseintereset.html',
})
export class ChooseinteresetPage {
  selectedAll = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseinteresetPage');
  }
  
  checkAll(){
      this.selectedAll= !this.selectedAll;
  }
}
