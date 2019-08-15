import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnginePage } from '../engine/engine.page';
import { Secao2Page } from '../secao2/secao2.page';
import { Secao3Page } from '../secao3/secao3.page';
import { Secao4Page } from '../secao4/secao4.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {}
  async mdlEgn(){
    const modal = await this.modalController.create({
      component: EnginePage
    });
    return modal.present();
  }
  async mdlSc2(){
    const modal = await this.modalController.create({
      component: Secao2Page
    });
    return modal.present();
  }
  async mdlSc3(){
    const modal = await this.modalController.create({
      component: Secao3Page
    });
    return modal.present();
  }
  async mdlSc4(){
    const modal = await this.modalController.create({
      component: Secao4Page
    });
    return modal.present();
  }
  
}
