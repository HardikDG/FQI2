import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Quote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private quoteService: QuotesService) { }
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote: Quote) {
    let alert = this.alertCtrl.create({
      title: 'Add quote?',
      subTitle: 'Are you sure to make it favorite',
      buttons: [{
        text:'Yes',
        handler:() => {
          this.quoteService.addToFavorites(selectedQuote);
        }
      },{
        text:'No',
        role: 'cancel',
        handler:() => {
          console.log("No click");
        }
      }]
    });
    alert.present();
  }

  onRemoveFromFavorite(selectedQuote: Quote) {
    this.quoteService.removeQuoteFromFavorites(selectedQuote);
  }

  isFavorite(quote:Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }

}
