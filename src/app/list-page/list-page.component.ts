import {Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnChanges, DoCheck {

  likes = 0;
  constructor() {
    console.log("More cards are displayed");
  }
  ngOnInit(): void {
    this.likes = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }


}
