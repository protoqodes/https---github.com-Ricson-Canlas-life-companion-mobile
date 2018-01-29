import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { FitnessPage } from '../fitness/fitness';
import { ExpensePage } from '../expense/expense';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FitnessPage;
  tab3Root = ExpensePage;

  constructor() {
    
  }
}
