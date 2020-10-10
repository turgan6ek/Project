import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit , DoCheck, OnChanges{
  @Input() likes = 0;
  oldLikes=0;
  text;
  private changengeLog: any;
  constructor() { }
  @Output() newLikeEvent = new EventEmitter<string>();
  today: number = Date.now();

  addLike() {
    this.likes++;

    console.log("You liked the card"+"\n"+"Number of likes:"+this.likes);
  }
  ngOnInit(): void {

  }


  ngOnChanges(changes:SimpleChanges): void {
    this.addLike();
  }

  ngDoCheck() {
  }
}
