import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinpriceService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPrice(url: string, currency = 'USD'): Observable<any> {
    return this.http.get(environment.apiUrl(url, currency));
  }
}
