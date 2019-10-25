import {Component} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidationService} from "../../providers/form-control/validation.service";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html'
})

export class DynamicForm {
  fg: FormGroup;
  isHaveData: boolean = false;
  formSubmissionData: any = [];
  dataDummy: any;
  modelAdditional: any = {};

  constructor(public alertCtrl: AlertController) {
    this.fg = new FormGroup({
      dynamicForms: new FormArray([])
    })
    this.dataDummy = [
      {
        "id": 132,
        "label": "Full Name",
        "fieldName": "fullName",
        "value": "",
        "typeField": "text",
        "readOnly": 0,
        "isHide": 0,
        "isRequired": 1,
        "additionalDetail": []
      }, // text required
      {
        "id": 341,
        "label": "Number Phone",
        "fieldName": "numberPhone",
        "value": "",
        "typeField": "number",
        "readOnly": 0,
        "isHide": 0,
        "isRequired": 1,
        "additionalDetail": []
      }, // number required
      {
        "id": 128,
        "label": "Nationality",
        "fieldName": "nationality",
        "value": "",
        "typeField": "dropdown",
        "readOnly": 0,
        "isHide": 0,
        "isRequired": 1,
        "additionalDetail": [
          {
            "id": 196,
            "text": "Indonesia",
            "value": "ID",
            "partnerProductAdditionalId": 128
          },
          {
            "id": 197,
            "text": "Entah Brantah",
            "value": "EB",
            "partnerProductAdditionalId": 128
          },
          {
            "id": 199,
            "text": "Wakanda",
            "value": "WK",
            "partnerProductAdditionalId": 128
          }
        ]
      }, // dropdown required
      {
        "id": 139,
        "label": "File KTP",
        "fieldName": "KTP",
        "value": "",
        "typeField": "file",
        "readOnly": 0,
        "isHide": 0,
        "isRequired": 0,
        "additionalDetail": []
      }, // file not required
      {
        "id": 142,
        "label": "Personal Email",
        "fieldName": "empPersonalEmail",
        "value": "",
        "typeField": "email",
        "readOnly": 0,
        "isHide": 0,
        "isRequired": 1,
        "additionalDetail": []
      }, // email required
      {
        "id": 155,
        "label": "Birthday",
        "fieldName": "birthday",
        "value": "",
        "typeField": "date",
        "readOnly": 0,
        "isHide": 0,
        "isRequired": 1,
        "additionalDetail": []
      }, // date required
    ]
    this.ionViewDidLoad();
  }

  //get dynamic Form
  get dynamicForms(): FormArray {
    return this.fg.get('dynamicForms') as FormArray;
  }


  ionViewDidLoad() {
    console.log('viewDidLoad')
    this.fg = new FormGroup({
      dynamicForms: new FormArray([
        new FormControl()
      ])
    });
    this.formSubmissionData = this.dataDummy;
    this.setFormControl();
  }

  //set form control validation
  setFormControl() {
    let getformArray = (formApi) => {
      return formApi.map(el => {
        if (el['isRequired']) {
          if (el['typeField'] === 'number') {
            return new FormControl(el.value, [Validators.required, FormValidationService.numValidator]);
          } else if (el['typeField'] === 'email') {
            return new FormControl(el.value, [Validators.required, FormValidationService.emailCompleteValidator]);
          } else {
            return new FormControl(el.value, [Validators.required]);
          }
        } else {
          return new FormControl(el.value);

        }
      })
    }
    this.fg = new FormGroup({
      dynamicForms: new FormArray(getformArray(this.formSubmissionData))

    });
    setTimeout(() => {
      this.isHaveData = true;
      // this.loading.dismiss();
    }, 200)
  }

//delete value iamge
  delete(form) {
    this.dynamicForms.controls[form].setValue('');
  }

  //set value form control to fieldName
  submit() {
    for (let i = 0; i < this.formSubmissionData.length; i++) {
      this.modelAdditional[this.formSubmissionData[i].fieldName] = this.fg.value.dynamicForms[i];
    }
    setTimeout(() => {
      this.showAlert(this.modelAdditional)
    },)
  }

  showAlert(data) {
    console.log('data form', data);
    const alert = this.alertCtrl.create({
      title: 'Value Form',
      message: "KTP :" + data.KTP + "birthday :" + data.birthday + "empPersonalEmail :" + data.empPersonalEmail + "fullName :" + data.fullName + "nationality :" + data.nationality + "numberPhone :" + data.numberPhone,
      buttons: ['OK']
    });
    alert.present();
  }
}
