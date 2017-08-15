import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const endpoints = {
  bbc: "bbc-news",
  recode: "recode",
  hN: "hacker-news"
}

@Injectable()
export class NewsService {

  constructor(
    private _http: Http
  ) { }

  gettingTheInformation(source) {
    const requester = `https://newsapi.org/v1/articles?source=${endpoints[source]}&sortBy=top&apiKey=4b51daabf2814f2b8f01a544c120c55b`;

    return this._http.get(requester)
    .map((response: Response ) => response.json())
    .toPromise()
  }

}
