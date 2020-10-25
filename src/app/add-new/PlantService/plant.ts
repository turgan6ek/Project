export class Plant {

  id: number;
  name: string;
  type: string;
  origin: string;
  soilNeeds: string;
  waterNeeds: string;
  more: string;
  size: string;
  img: string;
  likes: number;


  constructor(id: number, name: string, type: string, origin: string, soilNeeds: string, waterNeeds: string, more: string, size: string, img: string, likes: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.origin = origin;
    this.soilNeeds = soilNeeds;
    this.waterNeeds = waterNeeds;
    this.more = more;
    this.size = size;
    this.img = img;
    this.likes = likes;
  }
}
