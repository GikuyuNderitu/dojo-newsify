import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-story',
  templateUrl: './news-story.component.html',
  styleUrls: ['./news-story.component.css']
})
export class NewsStoryComponent implements OnInit {

  @Input() story: object;
  
  constructor() { }

  ngOnInit() {
  }

}
