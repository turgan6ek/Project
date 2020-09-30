import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {


  @Input() message="";
  constructor() {
    console.log("ChildComponent:Constructor");
  }
  ngOnInit(): void {
  }

}
