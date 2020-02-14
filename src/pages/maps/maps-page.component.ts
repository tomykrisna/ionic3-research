import {Component} from "@angular/core";
import {LatLongDto} from "../../components/maps-component/maps-component.dto";

@Component({
  selector: 'page-maps',
  templateUrl: 'maps-page.component.html'
})
export class MapsPage {
  location: LatLongDto = new LatLongDto()
  polygon: any;
  dataMap: any

  constructor() {
  }

  ngOnInit() {
    this.location.lat = -6.285718022047382;
    this.location.lng = 106.70604350302735;
    this.polygon = [
      [106.72258615493774, -6.285065984168035],
      [106.72434568405151, -6.287614757727519],
      [106.72795057296753, -6.286079096492719],
      [106.7272961139679, -6.2814827500133665],
      [106.72261834144591, -6.282026635357221],
      [106.72258615493774, -6.285065984168035]
    ];
  }

  dataLocation(event) {
    console.log('data location', event);
  }


}
