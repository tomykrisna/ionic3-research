import {Component} from "@angular/core";

declare var require: any
const IntroJs = require("../../../node_modules/intro.js");

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough-page.component.html'
})
export class WalkthroughPage {
  constructor() {
    setTimeout(() => {
      this.openWalkthrough();
    }, 2000);
  }


  openWalkthrough() {
    let intro = IntroJs();
    intro.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Logo',
          position: 'bottom',
        },
        {
          element: '#step2',
          intro: 'Logo',
          position: 'bottom'
        }

      ],
      highlightClass:intro,
      showProgress: true,
      showStepNumbers: false,
      disableInteraction: false,
      exitOnOverlayClick: false,
      skipLabel: "Skip",
      doneLabel: "Done",
      nextLabel: "Next",
      prevLabel: "Back",
    });
    intro.start();
  }

}
