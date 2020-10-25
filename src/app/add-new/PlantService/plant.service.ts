import {Plant} from './plant';
import {Injectable} from '@angular/core';
import {LoggingPlant} from './logging.plant';

@Injectable()
export class PlantService {
  constructor(private loggingPlant: LoggingPlant){
  }
  getPlants(){
    let plantList: Plant[];
    plantList = [

      new Plant(1,'Dahlia','Flower', 'Central America', '7.0 pH', 'Regular',
        'Dahlia is a genus of plants with large brightly-colored flowers. They are from Mexico, Central America, and Colombia. ' +
        'There are at least 36 species of Dahlia. Dahlia are often grown in flower gardens. This flower grows well away from strong, direct ' +
        'sunlight.','12-24','https://wallpaperset.com/w/full/8/1/c/489991.jpg',0),

      new Plant(2," Cherry Blossom","Tree","Japan","  6.0 pH ","Regular ",
        "Cherry blossoms symbolize the arrival of Spring, the season of flowers. The beautiful pink and white " +
        "blossom open at the end of March or beginning of April. The blooming period can last for 14 days.","4-6 ",
        "https://themysteriousworld.com/wp-content/uploads/2016/08/cherry-blossom.webp",0),

      new Plant(3,"Bird of Paradise","Flower","South Africa","Slightly acidic ","Regular ",
        "It’s definitely a confusing name. Actually, bird of paradise is an exotic plant native to South Africa. On blooming, " +
        "its pretty flowers look exactly like the bird of paradise in flight."," 4-6 ",
        "https://themysteriousworld.com/wp-content/uploads/2016/08/bird-of-paradise.webp",1),

      new Plant(4,"Bleeding Heart","Flower","Siberia"," 6.5 pH","Regular ",
        "This beautiful, spring-blooming bleeding heart flower grows well in a moist, cool climate. On blooming, " +
        "up to 20 heart-shaped flowers would open on each arching stem.","6 ",
        "https://themysteriousworld.com/wp-content/uploads/2016/08/bleeding-hearts.webp",1),

      new Plant(5,"Water Lilies","Flower","North America","6.5 pH ","Regular ",
        "Probably the queen of all aquatic flowers in the world. To your surprise, there are 70 different types of water " +
        "lilies in the world. They grow only in still, shallow freshwater ecosystems like ponds. "," 4-6",
        "https://themysteriousworld.com/wp-content/uploads/2016/08/water-lilly.webp", 0),
      new Plant(6, "Gazania","Flower","Southern Africa","5.5 pH ","Regular ","Gazania is a " +
        "beautiful daisy look like a flower native to South Africa. It is also known as treasure flower. Convincingly, gazania has pretty, " +
        "brightly colored flowers and very attractive long, silver-green leaves."," 4-6 ","https://themysteriousworld.com/wp-content/uploads/2016/08/gazania.webp",0),

    ];

      this.loggingPlant.log('Number of loaded plants: '+ plantList.length);


    return plantList;
}

}
