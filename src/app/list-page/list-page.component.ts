import {Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnChanges, DoCheck {
  list : any

  constructor() {
    this.list = [

      { "id" : "1",
        "name" : "Dahlia",
        "type" : "Flower",
        "origin" : "Central America",
        "soilNeeds": " 7.0 pH",
        "water_needs":" Regular",
        "more" : "Dahlia is a genus of plants with large brightly-colored flowers. They are from Mexico, Central America, and Colombia. There are at least 36 species of Dahlia. Dahlia are often grown in flower gardens. This flower grows well away from strong, direct sunlight.",
        "size" : " 12-24 ",
        "img" : "https://wallpaperset.com/w/full/8/1/c/489991.jpg",
        "likes" : "0",
      },
      { "id" : "2",
        "name" : " Cherry Blossom",
        "type" : "Tree",
        "origin" : "Japan",
        "soilNeeds": "  6.0 pH ",
        "water_needs":"Regular ",
        "more" : "Cherry blossoms symbolize the arrival of Spring, the season of flowers. The beautiful pink and white blossom open at the end of March or beginning of April. The blooming period can last for 14 days.",
        "size" : "4-6 ",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/cherry-blossom.webp",
        "likes" : "0",
      },
      { "id" : "3",
        "name" : "Bird of Paradise",
        "type" : "Flower",
        "origin" : "South Africa",
        "soilNeeds": "Slightly acidic ",
        "water_needs":"Regular ",
        "more" : "It’s definitely a confusing name. Actually, bird of paradise is an exotic plant native to South Africa. On blooming, its pretty flowers look exactly like the bird of paradise in flight.",
        "size" : " 4-6 ",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/bird-of-paradise.webp",
        "likes" : "0",
      },
      { "id" : "4",
        "name" : "Bleeding Heart",
        "type" : "Flower",
        "origin" : "Siberia",
        "soilNeeds": " 6.5 pH",
        "water_needs":"Regular ",
        "more" : "This beautiful, spring-blooming bleeding heart flower grows well in a moist, cool climate. On blooming, up to 20 heart-shaped flowers would open on each arching stem.",
        "size" : "6 ",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/bleeding-hearts.webp",
        "likes" : "0",
      },
      { "id" : "5",
        "name" : "Water Lilies",
        "type" : "Flower",
        "origin" : "North America",
        "soilNeeds": "6.5 pH ",
        "water_needs":"Regular ",
        "more" : "Probably the queen of all aquatic flowers in the world. To your surprise, there are 70 different types of water lilies in the world. They grow only in still, shallow freshwater ecosystems like ponds. ",
        "size" : " 4-6",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/water-lilly.webp",
        "likes" : "0",
      },
      { "id" : "6",
        "name" : "Gazania",
        "type" : "Flower",
        "origin" : "Southern Africa",
        "soilNeeds": "5.5 pH ",
        "water_needs":"Regular ",
        "more" : "Gazania is a beautiful daisy look like a flower native to South Africa. It is also known as treasure flower. Convincingly, gazania has pretty, brightly colored flowers and very attractive long, silver-green leaves.",
        "size" : " 4-6 ",
        "img" : "https://themysteriousworld.com/wp-content/uploads/2016/08/gazania.webp",
        "likes" : "0",
      }

    ]
    console.log("More cards are displayed");
  }
  ngOnInit(): void {
    this.list.likes = 0;
  }
  addItem(plant : any) {
    this.list.push(plant);
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }


}
