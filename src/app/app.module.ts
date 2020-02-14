import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AppRate} from "@ionic-native/app-rate";
import {AppCenterCrashes} from "@ionic-native/app-center-crashes";
import {RamCheker} from "../pages/ram-checker/ram-cheker";
import {Rate} from "../pages/rate/rate";
import {FormControlModule} from "../components/form-control-component/form-control.module";
import {DynamicForm} from "../pages/dynamic-form/dynamic-form";
import {WalkthroughPage} from "../pages/walkthrough/walkthrough-page.component";
import {ComponentPage} from "../pages/component/component";
import {MapsPage} from "../pages/maps/maps-page.component";
import {MapsComponent} from "../components/maps-component/maps-component";
import {MapsComponentModule} from "../components/maps-component/maps-component.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RamCheker,
    Rate,
    DynamicForm,
    WalkthroughPage,
    ComponentPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormControlModule,
    MapsComponentModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RamCheker,
    Rate,
    DynamicForm,
    WalkthroughPage,
    ComponentPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppRate,
    AppCenterCrashes,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
