import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements  OnChanges, OnInit, AfterViewInit, AfterContentChecked{

  displayChild: boolean = false;
  constructor() { console.log('AppComponent:Constructor'); }

  toggle() { this.displayChild = ! this.displayChild; }

  ngOnChanges() { console.log("ListComponent:OnChanges"); }
  ngOnInit() { }


  ngAfterViewInit() {
    console.log("Images are loaded");
  }
  ngAfterContentChecked() {

  }




}
