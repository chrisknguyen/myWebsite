import { Component, OnInit } from '@angular/core';
import { CoinDataService } from '../../shared/services/coin-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {
  listOfNumbers: number[];

  constructor(private coinService: CoinDataService) {
  }

  ngOnInit(): void {
    this.listOfNumbers = [100, 12, 14, 13, 14, 15, 22, 24, 23, 61, 52, 45, 67, 2, 3, 4, 66, 42, 47, 72, 23, 11, 10, 8, 7, 5, 6, 99, 100, 200, 199, 112, 111, 113, 115, 165, 164, 163, 154, 124, 101, 102, 103, 104, 105, 130, 131, 132, 133, 134, 135, 136];

    const sortedList = _.sortBy(this.listOfNumbers);
    const findNumb = 115;

    if (this.recursiveSearch(sortedList, findNumb, 0, sortedList.length - 1, 0)) {
      console.log('RECURSIVE Technique Element found!', findNumb);
    } else {
      console.log('RECURSIVE Technique Element NOT found!', findNumb);
    }

    this.getCoins();
  }

  getCoins(): void {
    const url = 'https://api.coingecko.com/api/v3/coins';
    this.coinService.get(url).subscribe((response) => {
      console.log('response', response);
    }, (error) => {
      console.log('error', error);
    });
  }

  recursiveSearch(arr: Array<number>, x: number, start: number, end: number, hits: number): boolean {
    console.log('recursion hit: ', hits + ' times.');
    if (start > end) {
      return false;
    }

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      return true;
    }

    if (arr[mid] > x) {
      return this.recursiveSearch(arr, x, start, mid - 1, hits + 1);
    } else {
      return this.recursiveSearch(arr, x, mid + 1, end, hits + 1);
    }
  }

  iterrativeSearch(): boolean {
    return false;
  }
}
