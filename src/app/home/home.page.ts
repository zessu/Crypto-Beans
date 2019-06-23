import { Component, OnInit } from '@angular/core';
import { supportedCurrencies } from 'src/app/supportedCrypto';
import { CoinpriceService } from '../coinprice.service';
import { Observable, Subscription } from 'rxjs';
import { Crypto } from 'src/app/types/crpyto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private subscription$: Subscription;
  private currencyToUse = 'USD';
  supportedCurrencies = supportedCurrencies;

  constructor(private coinPriceService: CoinpriceService) { }

  ngOnInit() {
    this.contructUrl();
  }

  contructUrl(): void {
    let originalString = '';
    supportedCurrencies.forEach((coin: Crypto, index) => {
      let str = ''.concat(coin.abbr);
      if (index !== supportedCurrencies.length - 1) {
        str = str.concat(',');
      }
      originalString = originalString.concat(str)
    });
    this.trackPrices(originalString);
  }

  trackPrices(url: string) {
    this.coinPriceService.getPrice(url).subscribe(
      (_res: Object) => {
        this.setPrices(_res);
      },
      _err => console.error(_err)
    )
  }

  setPrices(prices: any) {
    for (var key in prices) {
      supportedCurrencies.map(crypto => {
        if (crypto.abbr === key) {
          crypto.price = prices[key]['USD'];
        }
      });
    }
  }
}
