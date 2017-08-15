import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsStoryComponent } from './news-feed/news-story/news-story.component';

import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    NewsFeedComponent,
    NewsStoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
