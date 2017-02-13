
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  testpage;
  params;
  constructor(public navCtrl: NavController) {
    this.params = "test";
  }

}
