import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {TestApi} from "./api/test.api";
import {DataService} from "./data/data.service";
import {GuardService} from "./guard/guard.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    TestApi,
    DataService,
    GuardService
  ]
})
export class ServiceModule {
}

