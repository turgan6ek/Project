import {Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';
import {PlantService} from '../add-new/PlantService/plant.service';
import {Plant} from '../add-new/PlantService/Plant.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnChanges, DoCheck {

//@Injectable
  constructor(private plantService: PlantService) {

  }
  Plant = this.plantService.getPlants().subscribe(data => this.Plant = data)
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }


}
