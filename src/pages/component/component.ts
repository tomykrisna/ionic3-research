import {Component, OnDestroy} from "@angular/core";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
  selector: 'component',
  templateUrl: 'component.html'
})

export class ComponentPage{
  constructor(
    private nav: NavController
  ) {
  }

  ngOnInit(){
    console.log('ngOninit')

  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter')
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave')
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave')
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

  loadPage1(){
    this.nav.push(HomePage)
  }


}
