import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnChanges {

  likes = 0;
  constructor() {
    console.log("ChildComponent:Constructor");
  }
  ngOnInit(): void {
    this.likes = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



}
