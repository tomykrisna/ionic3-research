import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {RamCheker} from "../pages/ram-checker/ram-cheker";
import {Rate} from "../pages/rate/rate";
import {DynamicForm} from "../pages/dynamic-form/dynamic-form";
import {WalkthroughPage} from "../pages/walkthrough/walkthrough-page.component";
import {ComponentPage} from "../pages/component/component";
import {MapsPage} from "../pages/maps/maps-page.component";
import {ServiceComponent} from "../pages/service/service.component";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Ram Checker', component: RamCheker },
      { title: 'Rate Apps', component: Rate },
      { title: 'Dynamic Form', component: DynamicForm },
      { title: 'List', component: ListPage },
      { title: 'Walkthrough', component: WalkthroughPage },
      { title: 'Component', component: ComponentPage },
      { title: 'Maps', component: MapsPage },
      { title: 'Service', component: ServiceComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
