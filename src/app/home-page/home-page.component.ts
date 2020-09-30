import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements  OnChanges, OnInit, DoCheck,
  AfterContentInit {

  displayChild: boolean = false;
  constructor() { console.log('AppComponent:Constructor'); }

  toggle() { this.displayChild = ! this.displayChild; }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



}
