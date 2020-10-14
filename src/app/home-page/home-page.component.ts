import {
  AfterContentChecked,
  AfterViewInit,
  Component, Input,
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
  constructor() {
    this.list = [

      { "id" : "1",
        "name" : "Dahlia",
        "type" : "Afadasdad",
        "origin" : "asdadada",
        "soil_needs": " ",
        "water_needs":" ",
        "more" : "Dahlia is a genus of plants with large brightly-colored flowers. They are from Mexico, Central America, and Colombia. There are at least 36 species of Dahlia. Dahlia are often grown in flower gardens. This flower grows well away from strong, direct sunlight.",
        "size" : " ",
        "img" : "https://wallpaperset.com/w/full/8/1/c/489991.jpg"
      },
      { "id" : "2",
        "name" : " Cherry Blossom",
        "type" : "Afadasdad",
        "origin" : "asdadada",
        "soil_needs": " ",
        "water_needs":" ",
        "more" : "Cherry blossoms symbolize the arrival of Spring, the season of flowers. The beautiful pink and white blossom open at the end of March or beginning of April. The blooming period can last for 14 days.",
        "size" : " ",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/cherry-blossom.webp"
      },
      { "id" : "3",
        "name" : "Bird of Paradise",
        "type" : "Afadasdad",
        "origin" : "asdadada",
        "soil_needs": " ",
        "water_needs":" ",
        "more" : "It’s definitely a confusing name. Actually, bird of paradise is an exotic plant native to South Africa. On blooming, its pretty flowers look exactly like the bird of paradise in flight.",
        "size" : " ",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/bird-of-paradise.webp"
      },

    ],
      this.list2 = [

        { "id" : "4",
          "name" : "Bleeding Heart",
          "type" : "Afadasdad",
          "origin" : "asdadada",
          "soil_needs": " ",
          "water_needs":" ",
          "more" : "This beautiful, spring-blooming bleeding heart flower grows well in a moist, cool climate. On blooming, up to 20 heart-shaped flowers would open on each arching stem.",
          "size" : " ",
          "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/bleeding-hearts.webp"
        },
        { "id" : "5",
          "name" : "Water Lilies",
          "type" : "Afadasdad",
          "origin" : "asdadada",
          "soil_needs": " ",
          "water_needs":" ",
          "more" : "Probably the queen of all aquatic flowers in the world. To your surprise, there are 70 different types of water lilies in the world. They grow only in still, shallow freshwater ecosystems like ponds. ",
          "size" : " ",
          "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/water-lilly.webp"
        },
        { "id" : "6",
          "name" : "Gazania",
          "type" : "Afadasdad",
          "origin" : "asdadada",
          "soil_needs": " ",
          "water_needs":" ",
          "more" : "Gazania is a beautiful daisy look like a flower native to South Africa. It is also known as treasure flower. Convincingly, gazania has pretty, brightly colored flowers and very attractive long, silver-green leaves.",
          "size" : " ",
          "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/gazania.webp"
        },

      ]
    console.log('AppComponent:Constructor');
    for (let i = 0; i < 3; i++) {
      this.showFirst = true;
    }
  }
  @Input() list;
  list2 : any;
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
