import {Component} from "@angular/core";
import {GuardService} from "../../app/service/guard/guard.service";

@Component({
  selector: 'page-service',
  templateUrl: 'service.component.html'
})
export class ServiceComponent {
  constructor(
    private guardService: GuardService
  ) {
  }

  async checkGuard() {
    let a =  await this.guardService.checkGuard('15594_company_listmenu_1574667143028')
    console.log("page access value", a)
  }


}
