import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

private _stories;

  @Input() set stories (arr) {
    // - arr
    //  -- responseobjects
    //    -- articles Array
    //      --

    // For each of the response objects
    // push response[i].articles

    this._stories = []

    for(let i = 0; i < arr.length; i++) {
      this._stories = this._stories.concat(arr[i].articles);
    }
    console.log(this._stories);
  }


  constructor() { }

  ngOnInit() {
  }



  

}
