import {Component} from "@angular/core";
import {AppRate} from "@ionic-native/app-rate";

@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html'
})
export class Rate {
  constructor(
    private appRate: AppRate
  ) {

  }

  rateUs() {
    this.appRate.preferences.storeAppURL = {
      ios: '1149720670',
      android: 'market://details?id=com.dataon.sunfishgo&hl=en'
    };
    this.appRate.navigateToAppStore();
  }

}
