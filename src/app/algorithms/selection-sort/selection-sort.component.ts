import { Component, OnInit } from '@angular/core';
import { CoinDataService } from '../../shared/services/coin-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.scss']
})
export class SelectionSortComponent implements OnInit {
  coins: Array<any>;
  sortedCoins: Array<any>;
  priceChange24: Array<{ test: string }>;
  observableX: Observable<any>;

  constructor(private coinService: CoinDataService) {
  }

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    const url = 'https://api.coingecko.com/api/v3/coins';
    this.observableX = this.coinService.get(url);
    this.observableX.subscribe(response => {
      this.selectionSort(response);
      // console.log('this.sortedCoins', this.sortedCoins);
      // this.showPriceChange24(response);
    }, response => {
      console.log('error', response);
    });
  }

  showPriceChange24(coins: any): void {
    coins.forEach((coin: any) => {
      console.log(coin.name + ': ' + coin.market_data.price_change_24h + '/' + coin.market_data.price_change_percentage_24h);
    });
  }

  selectionSort(coins: any): void {
    const sortedCoins: any[] = [];
    coins.forEach((coin: any, i: number, arr: []) => {
      if (coin.market_data.price_change_24h)
        sortedCoins.push(coin);
    });

    for (let i = 0; i < coins.length; i++) {
      // console.log(coins[i]);
      const coin = coins[i].market_data.price_change_24h;
      const nextCoin = coins[i + 1].market_data.price_change_24h;

      if (coin > nextCoin) {
        coins[i] = nextCoin;
      } else {
        coins[i + 1] = coin;
      }
    }

    console.log('selectionSort() coins', coins);
  }

}
