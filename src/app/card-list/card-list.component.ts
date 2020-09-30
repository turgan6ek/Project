import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() likes = 0;
  constructor() { }
  @Output() newLikeEvent = new EventEmitter<string>();

  addLike() {
    this.likes++;
    this.likes = this.likes % 2;
  }
  ngOnInit(): void {
  }

}
