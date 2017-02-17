import { Quote } from './../data/quote.interface';
export class  QuotesService {
    private favoriteQuotes: Quote[] = [];

    addToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavorites() {
      return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote:Quote){
      return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}