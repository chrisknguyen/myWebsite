import { Component, OnInit } from '@angular/core';
import { CoinDataService } from '../../shared/services/coin-data.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {
  listOfNumbers: number[];
  coins: Array<any>;
  observableX: Observable<any>;
  sortedList: Array<any>;

  constructor(private coinService: CoinDataService) {
  }

  ngOnInit(): void {
    this.getCoins();
  }

  findItem(findMe: any): void {
    if (typeof findMe === 'number') {
      if (this.numberRecursiveSearch(this.sortedList, findMe, 0, this.sortedList.length - 1, 0)) {
        console.log('RECURSIVE number Technique Element found!', findMe);
      } else {
        console.log('RECURSIVE number Technique Element NOT found!', findMe);
      }
    } else if (typeof findMe === 'string') {
      if (this.stringRecursiveSearch(this.sortedList, findMe, 0, this.sortedList.length - 1, 0)) {
        console.log('RECURSIVE string Technique Element found!', findMe);
      } else {
        console.log('RECURSIVE string Technique Element NOT found!', findMe);
      }
    }
  }

  getCoins(): void {
    const url = 'https://api.coingecko.com/api/v3/coins';
    this.observableX = this.coinService.get(url);
    this.observableX.subscribe((response: any) => {
      this.coins = response;
      this.sortedList = _.sortBy(this.coins, 'id');
      this.findItem('bitcoin');
      this.findItem(1);
    }, (error: any) => {
      console.log('error', error);
    });
  }

  numberRecursiveSearch(arr: Array<any>, x: number, start: number, end: number, hits: number): boolean {
    console.log('recursion hit: ', hits + ' times.');
    if (start > end) {
      return false;
    }

    const mid = Math.floor((start + end) / 2);
    if (arr[mid].market_data.market_cap_rank === x) {
      return true;
    }

    if (arr[mid].market_data.market_cap_rank > x) {
      return this.numberRecursiveSearch(arr, x, start, mid - 1, hits + 1);
    } else {
      return this.numberRecursiveSearch(arr, x, mid + 1, end, hits + 1);
    }
  }

  stringRecursiveSearch(arr: Array<any>, x: string, start: number, end: number, hits: number): boolean {
    //start cannot be greater than end. If so, there is no point in continuing with the method.
    if (start >= end) {
      return false;
    }

    //
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].id === x) {
      return true;
    }
    if (arr[mid].id > x) {
      return this.stringRecursiveSearch(arr, x, start, mid - 1, hits + 1);
    } else {
      return this.stringRecursiveSearch(arr, x, mid + 1, end, hits + 1);
    }
  }

  iterrativeSearch(): boolean {
    return false;
  }

  trackBySymbol(index: number, item: any): string {
    return item.symbol;
  }
}
