import {
  AfterContentChecked,
  AfterViewInit,
  Component, Input,
  OnChanges,
  OnInit
} from '@angular/core';
import {PlantService} from '../add-new/PlantService/plant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements  OnChanges, OnInit, AfterViewInit, AfterContentChecked{

  displayChild: boolean = false;
  constructor(private plantService: PlantService) {
  for (var x = 0; x < 3; x++) {
    this.showFirst = true;
  }
  }
  toggle() { this.displayChild = ! this.displayChild; }

  ngOnChanges() { console.log("ListComponent:OnChanges"); }
  ngOnInit() { }

  showFirst: boolean = false;
  ngAfterViewInit() {
    console.log("Images are loaded");
  }
  ngAfterContentChecked() {

  }




}
