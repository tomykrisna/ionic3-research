import {NgModule} from "@angular/core";
import {MapsComponent} from "./maps-component";
import {IonicModule} from "ionic-angular";
@NgModule({
  declarations: [
    MapsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports:[
    MapsComponent
  ]
})
export class MapsComponentModule {

}
