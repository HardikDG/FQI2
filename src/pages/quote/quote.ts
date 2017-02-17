import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  author: String;
  text: String;
  constructor(public navParams: NavParams, private viewCtrl:ViewController) {}

  ionViewDidLoad() {
      this.author = this.navParams.get('person');
      this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
