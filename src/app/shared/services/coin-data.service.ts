import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  constructor(private http: HttpClient) {
  }

  public get<T>(baseUrl: string): Observable<any> {
    return this.http.get(baseUrl);
  }
}
