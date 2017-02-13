import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingsPage } from './../pages/settings/settings';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';
import { LibraryPage } from './../pages/library/library';
import { FavoritesPage } from './../pages/favorites/favorites';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
