import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";

declare var memory: any;

@Component({
  selector: 'page-ram-checker',
  templateUrl: 'ram-checker.html'
})
export class RamCheker {
  constructor(public alertCtrl: AlertController) {

  }

  checkRam() {
    console.log('check ram info')
    memory.getMemoryInfo('data', (response) => {
      console.log('reponse', response)
      this.showAlert(response)
    }, (err) => {
      console.log('error', err)
    });
  }

  showAlert(data) {
    const alert = this.alertCtrl.create({
      title: 'MEMORY INFO',
      message:'available mem :' + data.availMem.toString() + "\n" +
        "runtime free memory : " + data.runtime_free_memory + "\n" +
        "runtime max memory :" + data.runtime_max_memory + "\n" +
        "runtime total memory :" + data.runtime_total_memory + "\n" +
        "total memory :" + data.total_memory,
      buttons: ['OK']
    });
    alert.present();
  }

}
