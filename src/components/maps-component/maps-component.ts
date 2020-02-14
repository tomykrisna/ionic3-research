import {Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild} from "@angular/core";
import {LatLongDto, ResponseMap} from "./maps-component.dto";

declare var google;

@Component({
  selector: 'maps-component',
  templateUrl: 'maps-component.html'
})
export class MapsComponent {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('searchLocation') searchElement: ElementRef;
  @Output() data: EventEmitter<any> = new EventEmitter();
  @Input() location: LatLongDto;
  @Input() mode: string;
  @Input() radius: boolean;
  @Input() polygon: any;
  @Input() drawMap: boolean;

  map: any;
  // apiKey = 'AIzaSyD-XRQlEZEd5uL7MqCI6_rfix-de1bl11w';
  apiKey = 'AIzaSyADhvNtRA1UgAtChtmdN9Y_HbFhn18HoY4';
  returnLat: any = null;
  returnLng: any = null;
  lat: any;
  lng: any;
  addressDetail: any = '';
  reponseMap: ResponseMap = new ResponseMap();

  constructor(
    private ngZone: NgZone
  ) {

  }

  ngOnInit() {
    if (!this.location) {
      this.initMap(this.location.lat, this.location.lng);
    } else {
      this.getCurrentLocation();
    }
  }

  //get current Location
  getCurrentLocation() {
    let a = (position) => {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log('data', latitude, longitude)
      this.initMap(latitude, longitude);
    }
    navigator.geolocation.getCurrentPosition(a)
  }

  //init Map
  initMap(lat: any, lng: any) {
    let coords = new google.maps.LatLng(lat, lng);
    let mapOptions = {
      center: coords,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: 'greedy'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    this.pickLocation(lat, lng)
    if (this.drawMap) {
      this.drawMapInit();
    }
    if (this.polygon) {
      this.setPolygon();
    }
  }

  setPolygon() {
    var points = [];
    for (var i = 0; i < this.polygon.length; i++) {
      points.push({
        lat: this.polygon[i][1],
        lng: this.polygon[i][0]
      });
    }
    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
      paths: points,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(this.map);
  }

  drawMapInit() {
    var drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      circleOptions: {
        fillColor: '#0000FF',
        fillOpacity: 0.8,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    });
    drawingManager.setMap(this.map);
    var polylines = [];
    let draw = this.map
    google.maps.event.addListener(drawingManager, 'overlaycomplete', (polygon) => {
      polylines.push(polygon);
      // $('#vertices').val(event.overlay.getPath().getArray());
      // var polylinePath = polygon.getPath();
      // console.log("polyline : " + polylinePath.getArray());
      console.log('polygon', polygon.overlay.getPath().getArray());
    })


  }

  pickLocation(lat: any, lng: any, placeName?: any, address?: any) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(lat, lng),
      draggable: true,
      title: 'Location Selected',
      label: address
    });
    let tempMap = this.map;
    try {
      try {
        tempMap.addListener('center_changed', () => {
          let mpos = tempMap.getCenter();
          console.log('center_changed', mpos.lat(), mpos.lng());
          this.ngZone.run(() => {
            scope.returnLat = mpos.lat();
            scope.returnLng = mpos.lng();
          });
          marker.setPosition(tempMap.getCenter());
        });
        tempMap.addListener('dragend', () => {
          console.log('call end', this.returnLat, this.returnLng);
          console.log('response map', this.reponseMap)

          this.reponseMap.lat = this.returnLat;
          this.reponseMap.lng = this.returnLng;
          this.getAddress(this.returnLat, this.returnLng);
        });
      } catch (e) {
        console.log(e);
      }
      let scope = this;
      this.ngZone.run(() => {
        scope.returnLat = lat;
        scope.returnLng = lng;
      });
      this.getAddress(this.returnLat, this.returnLng);
      this.reponseMap.lat = this.returnLat;
      this.reponseMap.lng = this.returnLng;
    } catch (e) {
      console.log(e);
    }
  }

  searchLocation() {
    let lat: any;
    let lng: any;
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById("searchLocation"), {
      componentRestrictions: {'country': 'ID'}
    })
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: true,
      title: 'Drag me!',
    });

    autocomplete.addListener('place_changed', () => {
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      lat = place.geometry.location.lat();
      lng = place.geometry.location.lng();
      console.log('pick', lat, lng)
      if (!place.geometry) {
        window.alert("Autocomplete's returned place contains no geometry");
        return;
      }
      this.initMap(lat, lng)
      this.pickLocation(lat, lng)
    });
  }

  getAddress(lat, lng) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': {lat: lat, lng: lng}}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          this.ngZone.run(() => {
            this.addressDetail = results[1].formatted_address;
            this.reponseMap.address = this.addressDetail;
          })
          console.log("address", this.addressDetail)
        } else {
          console.log('No results found')
        }
      } else {
        console.log('Geocoder failed due to: ')
      }
    });
  }

  emitData() {
    console.log('emit data')
    this.data.emit(this.reponseMap);
  }

}
