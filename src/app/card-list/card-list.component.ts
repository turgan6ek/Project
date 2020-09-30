import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit , DoCheck, OnChanges{
  @Input() likes = 0;
  oldLikes=0;
  constructor() { }
  @Output() newLikeEvent = new EventEmitter<string>();

  addLike() {
    this.likes++;
    this.likes = this.likes % 2;
  }
  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {

  }
  ngDoCheck() {

    if (this.likes!== this.oldLikes) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      const count = this.noChangeCount += 1;
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.changeLog.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }
}
