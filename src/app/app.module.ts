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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RamCheker,
    Rate,
    DynamicForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormControlModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RamCheker,
    Rate,
    DynamicForm
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
