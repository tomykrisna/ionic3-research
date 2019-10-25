import { NgModule } from '@angular/core';

import {FormValidationStyleDirective} from "./form-validation-style.directive";
import {FormControlStyleComponent} from "./form-control-style.component";
import {ControlMessageComponent} from "./control-message.component";
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [
    FormValidationStyleDirective,
    FormControlStyleComponent,
    ControlMessageComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports:[
    FormValidationStyleDirective,
    FormControlStyleComponent,
    ControlMessageComponent,
  ]
})
export class FormControlModule {}
