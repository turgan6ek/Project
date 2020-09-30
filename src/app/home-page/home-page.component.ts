import {
  Component,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements  OnChanges, OnInit {

  displayChild: boolean = false;
  constructor() { console.log('AppComponent:Constructor'); }

  toggle() { this.displayChild = ! this.displayChild; }

  ngOnChanges() { console.log("AppComponent:OnChanges"); }
  ngOnInit() { console.log("AppComponent:OnInit"); }





}
