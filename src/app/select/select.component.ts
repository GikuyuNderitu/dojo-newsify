import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

private status = {
  bbc: false,
  recode: false,
  hN: false
}
@Output() checkboxClicked: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  subscribeNews(newsOutlet) {
    this.status[newsOutlet] = !this.status[newsOutlet]
    this.checkboxClicked.emit(this.status)
  }

}
