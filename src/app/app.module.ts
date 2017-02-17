import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingsPage } from './../pages/settings/settings';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';
import { LibraryPage } from './../pages/library/library';
import { FavoritesPage } from './../pages/favorites/favorites';
import { TabsPage } from './../pages/tabs/tabs';

import { QuotesService } from './../services/quotes';
import { SettingsService } from './../services/settings';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
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
    SettingsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},QuotesService,SettingsService]
})
export class AppModule {}
