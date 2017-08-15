import { Component } from '@angular/core';
import { NewsService } from './services/news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newsStories = [];

  constructor(
    private _ns: NewsService
  ) {}

  newClick(obj) {
    console.dir(obj);
    const newRequests = [];
    for(let key in obj) {
      if(obj[key]) {
        newRequests.push(this._ns.gettingTheInformation(key))
      }
    }

    Promise.all(newRequests)
    .then(data => {
      this.newsStories = data;
      console.log('New data received:');
    })
    .catch(err => {
      console.error(err)
    })    
  }
}
