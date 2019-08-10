import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnginePage } from '../engine/engine.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  async mdlEgn(){
    const modal = await this.modalController.create({
      component: EnginePage
    });
    return modal.present();
  }
}
