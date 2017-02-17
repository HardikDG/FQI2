import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { Quote } from './../../data/quote.interface';
import { QuotePage } from './../quote/quote';

import { SettingsService } from './../../services/settings';
import { QuotesService } from './../../services/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService, private modalCtrl: ModalController,private settingsService:SettingsService) { }
  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavorites();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if (remove) {
        this.onRemoveFromFavorite(quote);
      }
    })
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavorites();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altBack' : 'quoteBack';
  }

}
