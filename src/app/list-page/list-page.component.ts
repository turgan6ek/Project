import {Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';
import {PlantService} from '../add-new/PlantService/plant.service';
import {Plant} from '../add-new/PlantService/plant';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnChanges, DoCheck {


  constructor(private plantService: PlantService) {

  }
  plantList = this.plantService.getPlants();
  ngOnInit(): void {
  }
  addItem(plant : any) {
    this.plantList.push(plant);
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }


}
