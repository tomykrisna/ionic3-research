import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AppRate} from "@ionic-native/app-rate";
import {AppCenterCrashes} from "@ionic-native/app-center-crashes";

declare var GreatdayAtt: any;
declare var memory: any;
declare var window: any;
declare const greatdayplugin;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private appRate: AppRate,
    private AppCenterCrashes: AppCenterCrashes) {
  }

  callNative() {
    memory.getMemoryInfo('data', (response) => {
      console.log('reponse', response)
    }, (err) => {
      console.log('error', err)
    });
  }


  crashCenter() {
    this.AppCenterCrashes.setEnabled(true).then(() => {
      this.AppCenterCrashes.lastSessionCrashReport().then(report => {
        console.log('Crash report', report);
      });
    });
  }


  // ionic cordova plugin add cordova-plugin-apprate
  // npm install — save @ionic-native/app-rate@4
  rateUs() {
    this.appRate.preferences.storeAppURL.android = 'market://details?id=com.hsa.followup.happyspoon'
    //ios: '< my_app_id >',
    //windows: 'ms-windows-store://review/?ProductId=< Store_ID >'

    this.appRate.navigateToAppStore()
  }




}
